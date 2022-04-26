<template>
    <div class="ceshishijuan-detail" v-loading="loading">
        <div>
            <e-container>
                <div style="background-color:#FFFFFF">
                    <div>
                        <div class="common-title" style="margin-top: 4em;">
                            <p>
                                <i></i>
                                <i></i>
                            </p>
                        </div>
                        <div class="news_show">
            <span class="show_t" v-html="map.mingcheng">
            </span>
                            <span class="fa_time">
                                    考试时长:{{ map.kaoshishizhang }} &nbsp;&nbsp;
                                    发布人:{{ map.faburen }} &nbsp;&nbsp;
                                </span>
                            <div v-html="map.mingcheng"></div>

                        </div>
                        <e-paper-form @submit="postPaper" :list="webda" timu="shititimu" daan="daan" type="leixing"
                                      danxuanti="单选题"
                                      duoxuanti="多选题"></e-paper-form>
                    </div>


                </div>

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
                    zhaopinxinxiid: '',
                    bianhao: '',
                    biaoti: '',
                    mingcheng: '',
                    kaoshishizhang: '',
                    faburen: '',
                    addtime: '',
                },
                prev: {},
                next: {},
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
            postPaper(paperList, time) {
                if (this.loading) return;
                this.loading = true;
                this.$post('/savePoper2', {
                    id: this.id,
                    JSON: JSON.stringify(paperList),
                    time: time
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        this.$message.success("考试完成");
                        this.$goto("/index");
                    } else {
                        this.$message.error(res.msg);
                    }
                }).catch(err => {
                    this.loading = false;
                    this.$message.error(err.message);
                });
                console.log(paperList)
            },   //001
            goBack() {
                this.$router.go(-1)
            },
            loadDetail() {
                if (this.loading) return;
                this.loading = true;
                this.$get(api.ceshishijuan.webdetail, {
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