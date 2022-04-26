<template>
    <div class="xuesheng-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 添加学生</span>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="学号" prop="xuehao" required :rules="[{required:true, message:'请填写学号'}, {validator:rule.checkRemote, message:'内容重复了', checktype:'insert', module:'xuesheng', col:'xuehao', trigger:'blur'}]">
                                            <el-input placeholder="输入学号" style="width:250px;" v-model="form.xuehao" />                                    </el-form-item>

                                <el-form-item label="密码" prop="mima" required :rules="[{required:true, message:'请填写密码'}]">
                                            <el-input placeholder="输入密码" style="width:250px;" v-model="form.mima" />                                    </el-form-item>

                                <el-form-item label="姓名" prop="xingming" required :rules="[{required:true, message:'请填写姓名'}]">
                                            <el-input placeholder="输入姓名" style="width:250px;" v-model="form.xingming" />                                    </el-form-item>

                                <el-form-item label="性别" prop="xingbie">
                                            <el-select v-model="form.xingbie" ><el-option label="男" value="男"></el-option>
<el-option label="女" value="女"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="手机" prop="shouji" :rules="[{validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                                            <el-input placeholder="输入手机" style="width:250px;" v-model="form.shouji" />                                    </el-form-item>

                                <el-form-item label="邮箱" prop="youxiang" :rules="[{type:'email', message:'请输入正确邮箱地址'}]">
                                            <el-input placeholder="输入邮箱" style="width:250px;" v-model="form.youxiang" />                                    </el-form-item>

                                <el-form-item label="身份证" prop="shenfenzheng" :rules="[{validator:rule.checkCard, message:'请输入有效身份证号码'}]">
                                            <el-input placeholder="输入身份证" style="width:250px;" v-model="form.shenfenzheng" />                                    </el-form-item>

                                <el-form-item label="头像" prop="touxiang">
                                            <e-upload-image v-model="form.touxiang"></e-upload-image>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<!--普通的style标签只支持普通的样式，如果想启用scss或者less，需要为style元素设置lang属性-->
<style type="text/scss" scoped lang="scss">
.xuesheng-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'xuesheng-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    xuehao:'',
                    mima:'',
                    xingming:'',
                    xingbie:'',
                    shouji:'',
                    youxiang:'',
                    shenfenzheng:'',
shifoujiuye:'否',
                    touxiang:'',

                                    
                },

            
            }
        },
                watch: {
                    },
        props: {
            isRead:{
                type:Boolean,
                default:true
            },
            btnText:{
                type:String,
                default:'提交'
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.xuesheng.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.loadInfo();
                                                    }else{
                            this.$message.error(res.msg);
                        }
                    }).catch(err=>{
                        this.loading = false;
                        this.$message.error(err.message);
                    })

                }).catch(err=>{
                    console.log(err.message);
                })

            },
            loadInfo(){

                                var form = this.form;
                // 获取模块得数据
                this.loading = true;
                this.$post(api.xuesheng.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                                            }else{
                        this.$message.error(res.msg);
                        this.$router.go(-1);
                    }
                }).catch(err=>{
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
