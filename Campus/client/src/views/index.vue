<template>
    <div v-loading="loading">
        <div>
            <e-container>
                <el-row :gutter="15">
                    <el-col :md="16">
                        <div style="background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #EAEAEA">
                            <e-module-widget-title title="新闻信息">

                                <div class="hotnews class2">
                                    <ul class="a">
                                        <li v-for="(r,i) in xinwenxinxilist3">
                                            <router-link :to="{path:'/xinwenxinxidetail',query:{id:r.id}}"
                                                         class="clearfix">
                                                <span class="dog">{{ i+1 }}</span>
                                                <span class="shijian">{{ r.addtime }}</span>
                                                {{ r.biaoti }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </e-module-widget-title>

                        </div>
                    </el-col>
                    <el-col :md="8">


                        <el-carousel indicator-position="outside" height="420px">
                            <el-carousel-item v-for="item in bhtList" :key="item.id">
                                <div style="background-size: cover" @click="$goto(item.url)"
                                     :style="{'background-image': 'url('+item.image+')',width:'100%', height: '420px'}">
                                </div>
                            </el-carousel-item>
                        </el-carousel>


                    </el-col>

                </el-row>


            </e-container>
        </div>
        <div>
            <e-container>
                <el-row :gutter="15">

                    <el-col :md="8">
                        <div style="margin:20px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #EAEAEA">
                            <e-module-widget-title title="高校信息">
                                <div class="floor_goods_wrap clearfix">
                                    <el-row :gutter="20">
                                        <el-col :md="24" v-for="r in gaoxiaoxinxilist4">
                                            <div class="floor_goods_wrap_li">
                                                <div class="floor_goods_wrap_b">
                                                    <router-link :to="{path:'/gaoxiaoxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_img">
                                                        <e-img-box :src="r.tupian" pb="70"></e-img-box>
                                                    </router-link>
                                                    <router-link :to="{path:'/gaoxiaoxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_tit"
                                                                 v-html="$substr(r.gaoxiaomingcheng,20)"></router-link>
                                                    <router-link :to="{path:'/gaoxiaoxinxidetail',query:{id:r.id}}"
                                                                 class="floor_goods_txt"
                                                                 v-html="$substr(r.gaoxiaoxiangqing,20)"></router-link>
                                                </div>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>

                            </e-module-widget-title>

                        </div>
                    </el-col>
                    <el-col :md="8">
                        <div style="margin:20px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #EAEAEA">
                            <e-module-widget-title title="招聘信息">


                                <div class="">
                                    <e-news-list v-for="r in zhaopinxinxilist5" :key="r.id"
                                                 :to="'/zhaopinxinxidetail?id='+r.id"
                                                 :title="r.biaoti"
                                                 :description="r.zhiweimiaoshu"
                                                 :len="30"
                                                 :image="r.tupian"

                                    >
                                        <span>工资:{{ r.gongzi }}</span>
                                        <span>招聘人数:{{ r.zhaopinrenshu }}</span>

                                    </e-news-list>
                                </div>


                            </e-module-widget-title>

                        </div>
                    </el-col>
                    <el-col :md="8">
                        <div style="margin:20px 0 0 0;background-color:#FFFFFF;box-shadow:0px 0px 3px 3px #E4E4E4">
                            <e-module-widget-title title="调查问卷">

                                <div class="hotnews class2">
                                    <ul class="a">
                                        <li v-for="(r,i) in diaochawenjuanlist7">
                                            <router-link :to="{path:'/diaochawenjuandetail',query:{id:r.id}}"
                                                         class="clearfix">
                                                <span class="dog">{{ i+1 }}</span>
                                                <span class="shijian">{{ r.addtime }}</span>
                                                {{ r.mingcheng }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </e-module-widget-title>

                        </div>
                    </el-col>
                </el-row>


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
                loading: false,
                xinwenxinxilist3: [],
                bhtList: [],
                gaoxiaoxinxilist4: [],
                zhaopinxinxilist5: [],
                diaochawenjuanlist7: [],
            }
        },
        watch: {},
        computed: {},
        methods: {
            loadPageData() {
                if (this.loading) return;
                this.loading = true;
                this.$get('/index').then(res => {
                  //请求提交后完成加载状态
                    this.loading = false;
                  //请求处理成功后将数据赋值给上面的数组集合
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
            this.loadPageData();
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
