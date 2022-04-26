<template>
    <div class="shenqingshenhe-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix updt">
                                    <el-page-header @back="$router.go(-1)" content="编辑申请审核">
                    </el-page-header>
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

                                <el-form-item label="审核状态" prop="shenhezhuangtai">
                                            <el-select v-model="form.shenhezhuangtai" ><el-option label="通过" value="通过"></el-option>
<el-option label="驳回" value="驳回"></el-option>
</el-select>                                    </el-form-item>

                                <el-form-item label="审核备注" prop="shenhebeizhu">
                                            <el-input type="textarea" v-model="form.shenhebeizhu"></el-input>                                    </el-form-item>

                                <el-form-item v-if="btnText">
                    <el-button type="primary" @click="submit">{{ btnText }}</el-button>
                </el-form-item>
            </el-form>

            </div>
        </el-card>
    </div>
</template>
<style type="text/scss" scoped lang="scss">
.shenqingshenhe-add{

}
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import { extend } from '@/utils/extend'

    
    export default {
        name:'shenqingshenhe-add',
        data() {
            return {
                                rule,
                loading:false,
                form:{
                    bianhao:'',
                    biaoti:'',
                    zhiweileixing:'',
faburen:this.$store.state.user.session.username,shenqingren:this.$store.state.user.session.username,                    shenhezhuangtai:'',
                    shenhebeizhu:'',

            qiuzhishenqingid:0,
                        
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

                    this.$post(api.shenqingshenhe.update , form).then(res=>{
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

                                // 更新数据,获取数据
                this.loading = true;
                var form = this.form;
                this.$post(api.shenqingshenhe.edit , {
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
