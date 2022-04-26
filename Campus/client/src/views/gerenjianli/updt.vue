<template>
    <div class="gerenjianli-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                                    <el-page-header @back="$router.go(-1)" content="编辑个人简历">
                    </el-page-header>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="简历编号" prop="jianlibianhao" :rules="[{required:true, message:'请填写简历编号'}]">
                                            <el-input placeholder="输入简历编号" style="width:250px;" v-model="form.jianlibianhao" />                                    </el-form-item>

                                <el-form-item label="简历类型" prop="jianlileixing">
                                            <el-select v-model="form.jianlileixing" >
<el-option v-for="m in jianlileixingList" :value="m.id" :label="m.leixing"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="姓名" prop="xingming" required :rules="[{required:true, message:'请填写姓名'}]">
                                            <el-input placeholder="输入姓名" style="width:450px;" v-model="form.xingming" />                                    </el-form-item>

                                <el-form-item label="性别" prop="xingbie" required :rules="[{required:true, message:'请填写性别'}]">
                                            <el-select v-model="form.xingbie" ><el-option label="男" value="男"></el-option>
<el-option label="女" value="女"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="年龄" prop="nianling" required :rules="[{required:true, message:'请填写年龄'}, {validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入年龄" style="width:250px;" v-model="form.nianling" />                                    </el-form-item>

                                <el-form-item label="电子邮箱" prop="dianziyouxiang" :rules="[{type:'email', message:'请输入正确邮箱地址'}]">
                                            <el-input placeholder="输入电子邮箱" style="width:250px;" v-model="form.dianziyouxiang" />                                    </el-form-item>

                                <el-form-item label="联系电话" prop="lianxidianhua" :rules="[{validator:rule.checkPhone, message:'请输入正确手机号码'}]">
                                            <el-input placeholder="输入联系电话" style="width:250px;" v-model="form.lianxidianhua" />                                    </el-form-item>

                                <el-form-item label="学历" prop="xueli">
                                            <el-input placeholder="输入学历" style="width:250px;" v-model="form.xueli" />                                    </el-form-item>

                                <el-form-item label="毕业院校" prop="biyeyuanxiao">
                                            <el-input placeholder="输入毕业院校" style="width:450px;" v-model="form.biyeyuanxiao" />                                    </el-form-item>

                                <el-form-item label="所学专业" prop="suoxuezhuanye">
                                            <el-input placeholder="输入所学专业" style="width:250px;" v-model="form.suoxuezhuanye" />                                    </el-form-item>

                                <el-form-item label="工作经历" prop="gongzuojingli">
                                            <el-input type="textarea" v-model="form.gongzuojingli"></el-input>                                    </el-form-item>

                                <el-form-item label="自我评价" prop="ziwopingjia">
                                            <el-input type="textarea" v-model="form.ziwopingjia"></el-input>                                    </el-form-item>

                                <el-form-item label="简历文件" prop="jianliwenjian">
                                            <e-upload-file v-model="form.jianliwenjian"></e-upload-file>                                    </el-form-item>

                                <el-form-item label="添加人" prop="tianjiaren">
                                            <el-input v-model="form.tianjiaren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.gerenjianli-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'gerenjianli-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
jianlibianhao:rule.getID(),
                    jianlileixing:'',
                    xingming:'',
                    xingbie:'',
                    nianling:'',
                    dianziyouxiang:'',
                    lianxidianhua:'',
                    xueli:'',
                    biyeyuanxiao:'',
                    suoxuezhuanye:'',
                    gongzuojingli:'',
                    ziwopingjia:'',
                    jianliwenjian:'',
tianjiaren:this.$store.state.user.session.username,
                                    
                },

                        jianlileixingList:[],
            
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
            isRead:{
                type:Boolean,
                default:true
            },
            btnText:{
                type:String,
                default:'提交'
            },
                        id: {
                type: [String, Number],
                required: true
            },
                    },

        computed: {},
        methods: {
            submit(){
                this.$refs.formModel.validate().then(res=>{
                    if(this.loading)return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.gerenjianli.update , form).then(res=>{
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

                                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.gerenjianli.edit , {
                    id:this.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                        this.form = res.data.mmm;

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
