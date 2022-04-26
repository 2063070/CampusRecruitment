<template>

    <div class="v-list" v-loading="loading" element-loading-text="加载中">

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title">
                招聘信息列表
                </span>

            </div>
            <!-- 搜索 -->
            <div class="form-search">
                <el-form @submit.prevent.stop :inline="true" size="mini">
                    <el-form-item label="编号">

                        <el-input v-model="search.bianhao"></el-input>

                    </el-form-item>
                    <el-form-item label="标题">

                        <el-input v-model="search.biaoti"></el-input>

                    </el-form-item>
                    <el-form-item label="职位类型">

                        <el-input type="text" v-model="search.zhiweileixing"/>

                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="searchSubmit" icon="el-icon-search">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>


            <el-table border :data="list" style="width: 100%" highlight-current-row
            >

                <el-table-column type="index" label="#"></el-table-column> <!-- 序号 -->

                <el-table-column label="编号" width="130">
                    <template slot-scope="{row}">
                        {{ row.bianhao }}
                    </template>
                </el-table-column>
                <el-table-column label="标题">
                    <template slot-scope="{row}">
                        {{ row.biaoti }}
                    </template>
                </el-table-column>
                <el-table-column label="图片" width="100">
                    <template slot-scope="{row}">
                        <e-img :src="row.tupian" style="max-width:120px"/>
                    </template>
                </el-table-column>
                <el-table-column label="工资">
                    <template slot-scope="{row}">
                        {{ row.gongzi }}
                    </template>
                </el-table-column>
                <el-table-column label="学历" width="130">
                    <template slot-scope="{row}">
                        {{ row.xueli }}
                    </template>
                </el-table-column>
                <el-table-column label="经验" width="130">
                    <template slot-scope="{row}">
                        {{ row.jingyan }}
                    </template>
                </el-table-column>
                <el-table-column label="招聘人数" width="80">
                    <template slot-scope="{row}">
                        {{ row.zhaopinrenshu }}
                    </template>
                </el-table-column>
                <el-table-column label="职位类型">
                    <template slot-scope="{row}">
                        {{ row.zhiweileixing }}
                    </template>
                </el-table-column>
                <el-table-column label="公司福利">
                    <template slot-scope="{row}">
                        {{ row.gongsifuli }}
                    </template>
                </el-table-column>
                <el-table-column label="工作地点">
                    <template slot-scope="{row}">
                        {{ row.gongzuodidian }}
                    </template>
                </el-table-column>
                <el-table-column label="公司名称">
                    <template slot-scope="{row}">
                        {{ row.gongsimingcheng }}
                    </template>
                </el-table-column>
                <el-table-column label="公司介绍">
                    <template slot-scope="{row}">
                        {{ $substr(row.gongsijieshao,20) }}
                    </template>
                </el-table-column>
                <el-table-column label="发布人" width="80">
                    <template slot-scope="{row}">
                        {{ row.faburen }}
                    </template>
                </el-table-column>


                <el-table-column width="120" label="审核">
                    <template slot-scope="{row}">
                        {{ row.issh }}
                        <el-button size="mini" :type="row.issh == '是' ? 'success' : 'danger'"
                                   @click="checkIssh(row,'zhaopinxinxi')">
                            {{ row.issh == '是' ? '取消审核' : '审核' }}
                        </el-button>
                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="{row}">
                        <el-button-group>
                            <el-tooltip content="详情" placement="top">
                                <el-button @click="$goto({path:'/admin/zhaopinxinxidetail',query:{id:row.id } })"
                                           icon="el-icon-info" type="info" size="mini"></el-button>
                            </el-tooltip>
                            <el-tooltip content="编辑" placement="top">
                                <el-button icon="el-icon-edit"
                                           @click="$goto({path:'/admin/zhaopinxinxiupdt',query:{id:row.id } })"
                                           type="warning" size="mini"></el-button>
                            </el-tooltip>
                            <el-tooltip content="删除" placement="top">
                                <el-button icon="el-icon-delete" type="danger" size="mini" @click="deleteItem(row)">

                                </el-button>
                            </el-tooltip>
                        </el-button-group>
                    </template>
                </el-table-column>
            </el-table>


            <div class="e-pages" style="margin-top: 10px;text-align: center">
                <el-pagination
                        @current-change="loadList"
                        :current-page="page"
                        :page-size="pagesize"
                        @size-change="sizeChange"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalCount">
                </el-pagination>
            </div>

        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">

</style>
<script>
    import api from '@/api';
    import {remove, checkIssh} from '@/utils/utils';
    import {extend} from '@/utils/extend';
    import objectDiff from 'objectdiff';


    /**
     * 后台列表页面
     */
    export default {
        data() {
            return {

                loading: false,
                list: [],
                search: {

                    bianhao: '',

                    biaoti: '',

                    zhiweileixing: '',

                },
                total: {},
                page: 1, // 当前页
                pagesize: 10, // 页大小
                totalCount: 0, // 总行数


            }
        },
        watch: {},
        computed: {},
        methods: {
            searchSubmit() {
                this.loadList(1);
            },

            sizeChange(e) {
                this.pagesize = e;
                this.loadList(1);
            },
            checkIssh,

            loadList(page) {
                // 防止重新点加载列表
                if (this.loading) return;
                this.loading = true;
                this.page = page;
                // 筛选条件
                var filter = extend(true, {}, this.search, {page: page + "", pagesize: this.pagesize + ""});
                var diff = objectDiff.diff(filter, this.$route.query);
                if (diff.changed != 'equal') { // 筛选的条件不一致则更新链接
                    this.$router.push({  // 更新query
                        path: this.$route.path,
                        query: filter
                    });
                }
                this.$post(api.zhaopinxinxi.list, filter).then(res => {
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
            // 删除某行方法
            deleteItem(row) {
                this.$confirm('确定删除数据？', '提示', { // 弹出 确认框提示是否要删除
                    type: 'warning'
                }).then(() => {// 确定操作

                    this.loading = true; // 滚动条
                    this.$post(api.zhaopinxinxi.delete, {// 提交后台
                        id: row.id
                    }).then(res => {
                        this.loading = false;
                        if (res.code != api.code.OK) {
                            this.$message.error(res.msg);
                        } else {
                            remove(this.list, row);
                        }
                    }).catch(err => { // 访问网络错误
                        this.loading = false;
                        this.$message.error(err.message)
                    })
                }).catch(() => {
                    // 取消操作
                })
            },

        },
        beforeRouteUpdate(to, form, next) {
            extend(this.search, to.query)
            this.loadList(1);
            next();
        },
        created() {
            var search = extend(this.search, this.$route.query)
            if (search.page) {
                this.page = Math.floor(this.$route.query.page)
                delete search.page
            }
            if (search.pagesize) {
                this.pagesize = Math.floor(this.$route.query.pagesize)
                delete search.pagesize
            }

            this.loadList(1);
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
