<template>
    <div class="diaochawenjuan-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 添加调查问卷</span>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item label="编号" prop="bianhao" :rules="[{required:true, message:'请填写编号'}]">
                                            <el-input placeholder="输入编号" style="width:250px;" v-model="form.bianhao" />                                    </el-form-item>

                                <el-form-item label="名称" prop="mingcheng" required :rules="[{required:true, message:'请填写名称'}]">
                                            <el-input placeholder="输入名称" style="width:450px;" v-model="form.mingcheng" />                                    </el-form-item>

                                <el-form-item label="答题时长" prop="datishichang" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入答题时长" style="width:250px;" v-model="form.datishichang" />                                    </el-form-item>

                                <el-form-item label="类型" prop="leixing" required :rules="[{required:true, message:'请填写类型'}]">
                                            <el-select v-model="form.leixing" >
<el-option v-for="m in leixingList" :value="m.id" :label="m.leixing"></el-option>
</el-select>                                    </el-form-item>

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
.diaochawenjuan-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'diaochawenjuan-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
bianhao:rule.getID(),
                    mingcheng:'',
                    datishichang:'',
                    leixing:'',
faburen:this.$store.state.user.session.username,
                                    
                },

                        leixingList:[],
            
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

                    this.$post(api.diaochawenjuan.insert , form).then(res=>{
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
                this.$post(api.diaochawenjuan.create , {
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
