<template>
    <div class="xinwenxinxi-detail" v-loading="loading">
        <div>
<e-container>
            <div  style="background-color:#FFFFFF">
<div>
    <div class="common-title" style="margin-top: 4em;">
        <p>
            <i></i>
            <i></i>
        </p>
    </div>
    <div class="news_show">
            <span class="show_t" v-html="map.biaoti">
            </span>
        <span class="fa_time">
                                    分类: <e-select-view module="xinwenfenlei" :value="map.fenlei" select="id" show="fenleimingcheng"></e-select-view> &nbsp;&nbsp;
                                    点击率:{{ map.dianjilv }} &nbsp;&nbsp;
                                    添加人:{{ map.tianjiaren }} &nbsp;&nbsp;
                                </span>
        <div v-html="map.neirong"></div>
        <div class="s_x clearfix">
            
            <template v-if="prev.id">
                <router-link :to="'xinwenxinxidetail?id='+prev.id" class="s_prev">
                    上一篇：<span v-html="prev.biaoti"></span>
                </router-link>
            </template>
            <template v-else>
                <a href="javascript:;" class="s_prev">上一篇：没有了</a>
            </template>
            
            <template v-if="next.id">
                <router-link :to="'/xinwenxinxidetail?id='+next.id" class="x_next">
                    下一篇：<span v-html="next.biaoti"></span>
                </router-link>
            </template>
            <template v-else>
                <a href="javascript:;" class="x_next">下一篇：没有了</a>
            </template>
        </div>
    </div>
</div>


</div>    

</e-container>
</div>    </div>
</template>
<style type="text/scss" scoped lang="scss">
    </style>
<script>
    import api from '@/api';
    import { extend } from '@/utils/extend';
        export default {
        data() {
            return {
                loading:false,   // 加载
                                isCollect:false, // 是否已经收藏
                                map:{
                        biaoti:'',
                        fenlei:'',
                        tupian:'',
                        tianjiaren:'',
                        dianjilv:'',
                        neirong:'',
                        addtime:'',
                            },
                                prev:{},
                                next:{},
                            }
        },
                props:{
            id:{
                type:[String,Number],
                required:true
            }
        },
        watch: {
            id:{
                handler(){
                    this.loadDetail();
                },
                immediate:true
            },
                    },
        computed: {
                    },
        methods: {
            loadDetail(){
                if(this.loading) return;
                this.loading = true;
                this.$get(api.xinwenxinxi.webdetail , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this,res.data);
                    }else{
                        this.$message.error(res.msg);
                    }
                }).catch(err=>{
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
