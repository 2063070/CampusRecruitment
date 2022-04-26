<template>
    <div class="zhaopinxinxi-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                                    <el-page-header @back="$router.go(-1)" content="编辑招聘信息">
                    </el-page-header>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="编号" prop="bianhao" :rules="[{required:true, message:'请填写编号'}]">
                                            <el-input placeholder="输入编号" style="width:250px;" v-model="form.bianhao" />                                    </el-form-item>

                                <el-form-item label="标题" prop="biaoti">
                                            <el-input placeholder="输入标题" style="width:450px;" v-model="form.biaoti" />                                    </el-form-item>

                                <el-form-item label="图片" prop="tupian">
                                            <e-upload-image v-model="form.tupian"></e-upload-image>                                    </el-form-item>

                                <el-form-item label="工资" prop="gongzi">
                                            <el-input placeholder="输入工资" style="width:450px;" v-model="form.gongzi" />                                    </el-form-item>

                                <el-form-item label="学历" prop="xueli">
                                            <el-input placeholder="输入学历" style="width:250px;" v-model="form.xueli" />                                    </el-form-item>

                                <el-form-item label="经验" prop="jingyan">
                                            <el-input placeholder="输入经验" style="width:250px;" v-model="form.jingyan" />                                    </el-form-item>

                                <el-form-item label="招聘人数" prop="zhaopinrenshu" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入招聘人数" style="width:250px;" v-model="form.zhaopinrenshu" />                                    </el-form-item>

                                <el-form-item label="职位类型" prop="zhiweileixing">
                                            <e-spec v-model="form.zhiweileixing" />                                    </el-form-item>

                                <el-form-item label="公司福利" prop="gongsifuli">
                                            <e-spec v-model="form.gongsifuli" />                                    </el-form-item>

                                <el-form-item label="职位描述" prop="zhiweimiaoshu">
                                            <e-editor v-model="form.zhiweimiaoshu"></e-editor>                                    </el-form-item>

                                <el-form-item label="工作地点" prop="gongzuodidian">
                                            <el-input placeholder="输入工作地点" style="width:450px;" v-model="form.gongzuodidian" />                                    </el-form-item>

                                <el-form-item label="公司名称" prop="gongsimingcheng">
                                            <el-input type="textarea" v-model="form.gongsimingcheng"></el-input>                                    </el-form-item>

                                <el-form-item label="公司介绍" prop="gongsijieshao">
                                            <el-input type="textarea" v-model="form.gongsijieshao"></el-input>                                    </el-form-item>

                                <el-form-item label="发布人" prop="faburen">
                                            <el-input v-model="form.faburen" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.zhaopinxinxi-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'zhaopinxinxi-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
bianhao:rule.getID(),
                    biaoti:'',
                    tupian:'',
                    gongzi:'',
                    xueli:'',
                    jingyan:'',
                    zhaopinrenshu:'',
                    zhiweileixing:'',
                    gongsifuli:'',
                    zhiweimiaoshu:'',
                    gongzuodidian:'',
                    gongsimingcheng:'',
                    gongsijieshao:'',
faburen:this.$store.state.user.session.username,
                        issh:"否",
            
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

                    this.$post(api.zhaopinxinxi.update , form).then(res=>{
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
                this.$post(api.zhaopinxinxi.edit , {
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
