<template>
    <div class="gaoxiaoxinxi-detail" v-loading="loading">
        <div>
<e-container>
            <div  style="margin:20px 0 0 0;background-color:#FFFFFF">
<div class="row4 hjlgf">
    <div class="row clearfix">
        <div class="row1">
            <e-image-toggle :images="map.tupian"></e-image-toggle>
        </div>
        <div class="row2">
            <section class="product-details add-cart">
                <header class="entry-header">
                    <h1 class="entry-title uppercase" v-text="map.gaoxiaomingcheng"></h1>
                </header>
                <article class="entry-content">
                    <figure>
                                                                            <ul class="entry-meta unstyled">
                                <li>
                                    <span class="key">高校地址:</span>
                                    <span class="value">{{ map.gaoxiaodizhi }}</span>
                                </li>
                            </ul>
                                                    <ul class="entry-meta unstyled">
                                <li>
                                    <span class="key">高校负责人:</span>
                                    <span class="value">{{ map.gaoxiaofuzeren }}</span>
                                </li>
                            </ul>
                                                    <ul class="entry-meta unstyled">
                                <li>
                                    <span class="key">联系电话:</span>
                                    <span class="value">{{ map.lianxidianhua }}</span>
                                </li>
                            </ul>
                                                    <ul class="entry-meta unstyled">
                                <li>
                                    <span class="key">发布人:</span>
                                    <span class="value">{{ map.faburen }}</span>
                                </li>
                            </ul>
                                                <div class="rate-bar inline-middle">
                            <div class="rateit" data-rateit-backingfld="#backing0" data-rateit-starwidth="12" data-rateit-starheight="12" data-rateit-resetable="false"  data-rateit-ispreset="true" data-rateit-min="0" data-rateit-max="5"></div>
                        </div>
                                                                            <e-collect v-model="isCollect"
                                       module="gaoxiaoxinxi"
                                       ziduan="gaoxiaomingcheng"
                                       :id="map.id"></e-collect>
                                            </figure>
                </article>
            </section>
        </div>
    </div>

</div>

</div>
<div  style="background-color:#FFFFFF">
<e-module-widget-title title="详情">
    
<div style="text-indent: 4em">
<div v-html="map.gaoxiaoxiangqing"></div></div>

</e-module-widget-title>

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
                        bianhao:'',
                        gaoxiaomingcheng:'',
                        tupian:'',
                        gaoxiaodizhi:'',
                        gaoxiaofuzeren:'',
                        lianxidianhua:'',
                        gaoxiaoxiangqing:'',
                        faburen:'',
                        addtime:'',
                            },
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
                this.$get(api.gaoxiaoxinxi.webdetail , {
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
