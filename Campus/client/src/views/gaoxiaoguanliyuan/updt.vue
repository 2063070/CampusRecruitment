<template>
    <div class="gaoxiaoguanliyuan-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                <el-page-header @back="$router.go(-1)" content="编辑高校管理员">
                </el-page-header>
            </div>
            <div class="form-database-form">


                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item label="账号" prop="zhanghao" required
                                  :rules="[{required:true, message:'请填写账号'},
                                  {checktype:'update', module:'gaoxiaoguanliyuan', col:'zhanghao',
                                  id:'{{   form.id   }}', trigger:'blur'}]">
                        <el-input placeholder="输入账号" :disabled="true" style="width:250px;" v-model="form.zhanghao"/>
                    </el-form-item>

                    <el-form-item label="高校名称" prop="gaoxiaomingcheng">
                        <el-input placeholder="输入高校名称" :disabled="true" style="width:450px;" v-model="form.gaoxiaomingcheng"/>
                    </el-form-item>

                    <el-form-item label="负责人" prop="fuzeren">
                        <el-input placeholder="输入负责人" style="width:250px;" v-model="form.fuzeren"/>
                    </el-form-item>

                    <el-form-item label="联系电话" prop="lianxidianhua"
                                  :rules="[{validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                        <el-input placeholder="输入联系电话" style="width:250px;" v-model="form.lianxidianhua"/>
                    </el-form-item>

                    <el-form-item label="高校地址" prop="gaoxiaodizhi">
                        <el-input placeholder="输入高校地址" :disabled="true" style="width:450px;" v-model="form.gaoxiaodizhi"/>
                    </el-form-item>

                    <el-form-item label="高校图片" prop="gaoxiaotupian">
                        <e-upload-image v-model="form.gaoxiaotupian"></e-upload-image>
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
    .gaoxiaoguanliyuan-add {

    }
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import {extend} from '@/utils/extend'


    export default {
        name: 'gaoxiaoguanliyuan-add',
        data() {
            return {
                rule,
                loading: false,
                form: {
                    zhanghao: '',
                    gaoxiaomingcheng: '',
                    fuzeren: '',
                    lianxidianhua: '',
                    gaoxiaodizhi: '',
                    gaoxiaotupian: '',


                },


            }
        },
        watch: {
            id: {
                handler() {
                    this.loadInfo();
                }
            }
        },
        props: {
            isRead: {
                type: Boolean,
                default: true
            },
            btnText: {
                type: String,
                default: '提交'
            },
            id: {
                type: [String, Number],
                required: true
            },
        },

        computed: {},
        methods: {
            submit() {
                this.$refs.formModel.validate().then(res => {
                    if (this.loading) return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.gaoxiaoguanliyuan.update, form).then(res => {
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

                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.gaoxiaoguanliyuan.edit, {
                    id: this.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                        this.form = res.data.mmm;

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
