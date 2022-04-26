<template>
    <div class="liaotianjilu-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title"> 添加聊天记录</span>
            </div>
            <chat :post="this.form" :chat-id="$route.query.id"></chat>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .liaotianjilu-add {

    }
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import {extend} from '@/utils/extend'
    import Chat from "@/views/liaotianjilu/chat";


    export default {
        name: 'liaotianjilu-add',
        components: {Chat},
        data() {
            return {
                readMap: {},
                rule,
                loading: false,
                form: {
                    liaotiantongdao: '',
                    neirong: '',
                    faxinren: this.$store.state.user.session.username,
                    jiaoliuid: 0,
                },
            }
        },
        watch: {},
        props: {
            isRead: {
                type: Boolean,
                default: true
            },
            btnText: {
                type: String,
                default: '提交'
            },
        },

        computed: {},
        methods: {
            submit() {
                this.$refs.formModel.validate().then(res => {
                    if (this.loading) return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.liaotianjilu.insert, form).then(res => {
                        this.loading = false;
                        if (res.code == api.code.OK) {
                            this.$message.success('添加成功');
                            this.$emit('success', res.data);
                            this.$refs.formModel.resetFields();
                            this.$router.go(-1);
                        } else {
                            this.$message.error(res.msg);
                        }
                    }).catch(err => {
                        this.loading = false;
                        this.$message.error(err.message);
                    })

                }).catch(err => {
                    console.log(err.message);
                })

            },
            loadInfo() {

                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.liaotianjilu.create, {
                    id: this.$route.query.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                        var readMap = res.data.readMap;
                        for (var i in form) {
                            if (readMap[i] && i != 'id' && i!='发信人') {
                                form[i] = res.data.readMap[i];
                            }
                        }
                        form.jiaoliuid = readMap.id;
                        form.faxinren = this.$session.username;
                    } else {
                        this.$message.error(res.msg);
                        this.$router.go(-1);
                    }
                }).catch(err => {
                    this.$message.error(err.message);
                    this.$router.go(-1);
                });
            },
        },
        created() {
            this.loadInfo();
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
