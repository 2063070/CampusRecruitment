<template>
    <div class="jiaoliu-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title"> 添加交流</span>
            </div>
            <div class="form-database-form">


                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item label="聊天通道" prop="liaotiantongdao" :rules="[{required:true, message:'请填写聊天通道'}]">
                        <el-input placeholder="输入聊天通道" style="width:250px;" v-model="form.liaotiantongdao"/>
                    </el-form-item>

                    <el-form-item label="标题" prop="biaoti">
                        <el-input placeholder="输入标题" style="width:450px;" v-model="form.biaoti"/>
                    </el-form-item>

                    <el-form-item label="收信人" prop="shouxinren">
                        <el-input v-model="form.shouxinren" readonly style="width: 250px;"></el-input>
                    </el-form-item>

                    <el-form-item label="发信人" prop="faxinren">
                        <el-input v-model="form.faxinren" readonly style="width: 250px;"></el-input>
                    </el-form-item>

                    <el-form-item v-if="btnText">
                        <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
    .jiaoliu-add {

    }
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import {extend} from '@/utils/extend'


    export default {
        name: 'jiaoliu-add',
        data() {
            return {
                rule,
                loading: false,
                form: {
                    liaotiantongdao: rule.getID(),
                    biaoti: '',
                    shouxinren: this.$route.query.shouxinren,
                    faxinren: this.$store.state.user.session.username,

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

                    this.$post(api.jiaoliu.insert, form).then(res => {
                        this.loading = false;
                        if (res.code == api.code.OK) {
                            this.$message.success('添加成功');
                            this.$emit('success', res.data);
                            this.$refs.formModel.resetFields();
                            this.loadInfo();
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
                this.$post(api.jiaoliu.create, {
                    id: this.$route.query.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
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
