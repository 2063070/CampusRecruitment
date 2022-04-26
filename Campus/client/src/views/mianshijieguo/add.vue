<template>
    <div class="mianshijieguo-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                                <span class="title"> 添加面试结果</span>
                            </div>
            <div class="form-database-form">
                

            <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                                <el-form-item v-if="isRead" label="编号" prop="bianhao">
                                            {{  form.bianhao  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="标题" prop="biaoti">
                                            {{  form.biaoti  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="职位类型" prop="zhiweileixing">
                                            <el-radio-group v-model="form.zhiweileixing" size="mini">
      <el-radio-button v-for="v in zhiweileixingSpec" :label="v" :key="v"></el-radio-button>
    </el-radio-group>                                    </el-form-item>

                                <el-form-item v-if="isRead" label="发布人" prop="faburen">
                                            {{  form.faburen  }}                                    </el-form-item>

                                <el-form-item v-if="isRead" label="申请人" prop="shenqingren">
                                            {{  form.shenqingren  }}                                    </el-form-item>

                                <el-form-item label="结果" prop="jieguo">
                                            <el-select v-model="form.jieguo" ><el-option label="通过" value="通过"></el-option>
<el-option label="驳回" value="驳回"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="结果备注" prop="jieguobeizhu">
                                            <el-input type="textarea" v-model="form.jieguobeizhu"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.mianshijieguo-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'mianshijieguo-add',
        data() {
            return {
                                readMap:{},
                                rule,
                loading:false,
                form:{
                    bianhao:'',
                    biaoti:'',
                    zhiweileixing:'',
faburen:this.$store.state.user.session.username,shenqingren:this.$store.state.user.session.username,                    jieguo:'',
                    jieguobeizhu:'',

            mianshitongzhiid:0,
                        
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

                    this.$post(api.mianshijieguo.insert , form).then(res=>{
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
                this.$post(api.mianshijieguo.create , {
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
                        form.mianshitongzhiid = readMap.id;
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
