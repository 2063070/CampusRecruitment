<template>
    <div class="zhaopinxinxi-detail" v-loading="loading">
        <div>
            <e-container>
                <div style="margin:20px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #E6E6E6">
                    <div class="row4 hjlgf">
                        <div class="row clearfix">
                            <div class="row1">
                                <e-image-toggle :images="map.tupian"></e-image-toggle>
                            </div>
                            <div class="row2">
                                <section class="product-details add-cart">
                                    <header class="entry-header">
                                        <h1 class="entry-title uppercase" v-text="map.biaoti"></h1>
                                    </header>
                                    <article class="entry-content">
                                        <figure>
                                            <span class="entry-price inline-middle">招聘人数:{{ map.zhaopinrenshu }}</span>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">工资:</span>
                                                    <span class="value">{{ map.gongzi }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">学历:</span>
                                                    <span class="value">{{ map.xueli }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">经验:</span>
                                                    <span class="value">{{ map.jingyan }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">职位类型:</span>
                                                    <span class="value">{{ map.zhiweileixing }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">公司福利:</span>
                                                    <span class="value">{{ map.gongsifuli }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">工作地点:</span>
                                                    <span class="value">{{ map.gongzuodidian }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">公司名称:</span>
                                                    <span class="value">{{ map.gongsimingcheng }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">公司介绍:</span>
                                                    <span class="value">{{ map.gongsijieshao }}</span>
                                                </li>
                                            </ul>
                                            <ul class="entry-meta unstyled">
                                                <li>
                                                    <span class="key">发布人:</span>
                                                    <span class="value">{{ map.faburen }}</span>
                                                </li>
                                            </ul
                                            >
                                            <div class="rate-bar inline-middle">
                                                <div class="rateit" data-rateit-backingfld="#backing0"
                                                     data-rateit-starwidth="12" data-rateit-starheight="12"
                                                     data-rateit-resetable="false" data-rateit-ispreset="true"
                                                     data-rateit-min="0" data-rateit-max="5"></div>
                                            </div>
                                            <el-button type="primary"
                                                       @click="$router.push('/qiuzhishenqingadd?id='+map.id)">求职申请
                                            </el-button>
                                            <el-button type="primary"
                                                       @click="$router.push('/jiaoliuadd?shouxinren='+map.faburen)">交流
                                            </el-button>
                                            <e-collect v-model="isCollect"
                                                       module="zhaopinxinxi"
                                                       ziduan="biaoti"
                                                       :id="map.id"></e-collect>
                                        </figure>
                                    </article>
                                </section>
                            </div>
                        </div>

                    </div>

                </div>
                <div style="background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #EAEAEA">
                    <e-module-widget-title title="详情">

                        <div style="text-indent: 4em">
                            <div v-html="map.zhiweimiaoshu"></div>
                        </div>

                    </e-module-widget-title>

                </div>

                <e-container>
                    <div style="margin:20px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #EAEAEA">
                        <e-module-widget-title title="测试试卷">


                            <div class="list-table">
                                <table width="100%" border="1" class="table table-list table-bordered table-hover">
                                    <thead>
                                    <tr align="center">
                                        <th> 名称</th>
                                        <th> 考试时长</th>
                                        <th> 发布人</th>
                                        <th width="80" align="center">操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    <tr v-for="(r,i) in ceshishijuanlist1">
                                        <td> {{ r.mingcheng }}</td>
                                        <td> {{ r.kaoshishizhang }}</td>
                                        <td> {{ r.faburen }}</td>


                                        <td align="center">
                                            <el-button @click="$goto('/ceshishijuandetail?id='+r.id)">
                                                详细
                                            </el-button>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>


                        </e-module-widget-title>

                    </div>

                </e-container>


            </e-container>
        </div>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';

    export default {
        data() {
            return {
                loading: false,   // 加载
                isCollect: false, // 是否已经收藏
                map: {
                    bianhao: '',
                    biaoti: '',
                    tupian: '',
                    gongzi: '',
                    xueli: '',
                    jingyan: '',
                    zhaopinrenshu: '',
                    zhiweileixing: '',
                    gongsifuli: '',
                    zhiweimiaoshu: '',
                    gongzuodidian: '',
                    gongsimingcheng: '',
                    gongsijieshao: '',
                    faburen: '',
                    addtime: '',
                },
                ceshishijuanlist1: [],
            }
        },
        props: {
            id: {
                type: [String, Number],
                required: true
            }
        },
        watch: {
            id: {
                handler() {
                    this.loadDetail();
                },
                immediate: true
            },
        },
        computed: {},
        methods: {
            loadDetail() {
                if (this.loading) return;
                this.loading = true;
                this.$get(api.zhaopinxinxi.webdetail, {
                    id: this.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
                    this.loading = false;
                    this.$message.error(err.message);
                });
            },

        },
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
