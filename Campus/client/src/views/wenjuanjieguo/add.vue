<template>
    <div class="wenjuanjieguo-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 添加问卷结果</span>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="编号" prop="bianhao">
                                            {{  form.bianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="名称" prop="mingcheng">
                                            {{  form.mingcheng  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="发布人" prop="faburen">
                                            {{  form.faburen  }}                                    </el-form-item>

                                <el-form-item label="答题编号" prop="datibianhao" :rules="[{required:true, message:'请填写答题编号'}]">
                                            <el-input placeholder="输入答题编号" style="width:250px;" v-model="form.datibianhao" />                                    </el-form-item>

                                <el-form-item label="答题时长" prop="datishichang">
                                            <el-input placeholder="输入答题时长" style="width:250px;" v-model="form.datishichang" />                                    </el-form-item>

                                <el-form-item label="总得分" prop="zongdefen" :rules="[{validator:rule.checkNumber, message:'输入一个有效数字'}]">
                                            <el-input placeholder="输入总得分" style="width:250px;" v-model="form.zongdefen" />                                    </el-form-item>

                                <el-form-item label="答题人" prop="datiren">
                                            <el-input v-model="form.datiren" readonly style="width: 250px;"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.wenjuanjieguo-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'wenjuanjieguo-add',
        data() {
            return {
                                readMap:{},
                                rule,
                loading:false,
                form:{
                    bianhao:'',
                    mingcheng:'',
faburen:this.$store.state.user.session.username,datibianhao:rule.getID(),
                    datishichang:'',
                    zongdefen:'',
datiren:this.$store.state.user.session.username,
            diaochawenjuanid:0,
                        
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

                    this.$post(api.wenjuanjieguo.insert , form).then(res=>{
                        this.loading = false;
                        if(res.code == api.code.OK){
                            this.$message.success('添加成功');
                            this.$emit('success' , res.data);
                            this.$refs.formModel.resetFields();
                                                        this.$router.go(-1);
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
                this.$post(api.wenjuanjieguo.create , {
                    id:this.$route.query.id
                }).then(res=>{
                    this.loading = false;
                    if(res.code == api.code.OK){
                        extend(this , res.data);
                                                var readMap = res.data.readMap;
                        for (var i in form){
                            if(readMap[i] && i != 'id')
                            {
                                form[i] = res.data.readMap[i];
                            }
                        }
                        form.diaochawenjuanid = readMap.id;
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
