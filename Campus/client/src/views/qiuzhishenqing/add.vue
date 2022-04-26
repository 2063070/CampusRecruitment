<template>
    <div class="qiuzhishenqing-add" v-loading="loading">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span class="title"> 添加求职申请</span>
            </div>
            <div class="form-database-form">


                <el-form :model="form" ref="formModel" label-width="130px" status-icon validate-on-rule-change>
                    <el-form-item v-if="isRead" label="编号" prop="bianhao">
                        {{ form.bianhao }}
                    </el-form-item>

                    <el-form-item v-if="isRead" label="标题" prop="biaoti">
                        {{ form.biaoti }}
                    </el-form-item>

                    <el-form-item v-if="isRead" label="职位类型" prop="zhiweileixing">
                        <el-radio-group v-model="form.zhiweileixing" size="mini">
                            <el-radio-button v-for="v in zhiweileixingSpec" :label="v" :key="v"></el-radio-button>
                        </el-radio-group>
                    </el-form-item>

                    <el-form-item v-if="isRead" label="发布人" prop="faburen">
                        {{ form.faburen }}
                    </el-form-item>

                    <el-form-item label="个人简历" prop="gerenjianli">
                        <e-select-list :model="form"
                                       v-model="form.gerenjianli" module="gerenjianli"
                                       select-update="jianlibianhao,jianlileixing,xingming,xingbie,nianling,dianziyouxiang,lianxidianhua,xueli,biyeyuanxiao,suoxuezhuanye,gongzuojingli,ziwopingjia,jianliwenjian,tianjiaren"
                                       search-update=""
                                        @update-where="updateWhere"></e-select-list>
                        <table>
                            <tr>
                                <td width="120">简历编号</td>
                                <td>{{ form.jianlibianhao }}</td>
                            </tr>
                            <tr>
                                <td width="120">简历类型</td>
                                <td>
                                    <e-select-view module="jianlileixing" :value="form.jianlileixing" select="id"
                                                   show="leixing"></e-select-view>
                                </td>
                            </tr>
                            <tr>
                                <td width="120">姓名</td>
                                <td>{{ form.xingming }}</td>
                            </tr>
                            <tr>
                                <td width="120">性别</td>
                                <td>{{ form.xingbie }}</td>
                            </tr>
                            <tr>
                                <td width="120">年龄</td>
                                <td>{{ form.nianling }}</td>
                            </tr>
                            <tr>
                                <td width="120">电子邮箱</td>
                                <td>{{ form.dianziyouxiang }}</td>
                            </tr>
                            <tr>
                                <td width="120">联系电话</td>
                                <td>{{ form.lianxidianhua }}</td>
                            </tr>
                            <tr>
                                <td width="120">学历</td>
                                <td>{{ form.xueli }}</td>
                            </tr>
                            <tr>
                                <td width="120">毕业院校</td>
                                <td>{{ form.biyeyuanxiao }}</td>
                            </tr>
                            <tr>
                                <td width="120">所学专业</td>
                                <td>{{ form.suoxuezhuanye }}</td>
                            </tr>
                            <tr>
                                <td width="120">工作经历</td>
                                <td>{{ form.gongzuojingli }}</td>
                            </tr>
                            <tr>
                                <td width="120">自我评价</td>
                                <td>{{ form.ziwopingjia }}</td>
                            </tr>
                            <tr>
                                <td width="120">简历文件</td>
                                <td>
                                    <e-file-list v-model="form.jianliwenjian"></e-file-list>
                                </td>
                            </tr>
                            <tr>
                                <td width="120">添加人</td>
                                <td>{{ form.tianjiaren }}</td>
                            </tr>
                        </table>
                    </el-form-item>

                    <el-form-item label="备注" prop="beizhu">
                        <el-input type="textarea" v-model="form.beizhu"></el-input>
                    </el-form-item>

                    <el-form-item label="申请人" prop="shenqingren">
                        <el-input v-model="form.shenqingren" readonly style="width: 250px;"></el-input>
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
    .qiuzhishenqing-add {

    }
</style>
<script>
    import api from '@/api'
    import rule from '@/utils/rule'
    import {extend} from '@/utils/extend'


    export default {
        name: 'qiuzhishenqing-add',
        data() {
            return {
                readMap: {},
                rule,
                loading: false,
                form: {
                    bianhao: '',
                    biaoti: '',
                    zhiweileixing: '',
                    faburen: this.$store.state.user.session.username, gerenjianli: '',
                    jianlibianhao: rule.getID(),
                    jianlileixing: '',
                    xingming: this.$store.state.user.session.xingming,
                    xingbie: this.$store.state.user.session.xingbie,
                    nianling: '',
                    dianziyouxiang: this.$store.state.user.session.youxiang,
                    lianxidianhua: this.$store.state.user.session.shouji,
                    xueli: '',
                    biyeyuanxiao: '',
                    suoxuezhuanye: '',
                    gongzuojingli: '',
                    ziwopingjia: '',
                    jianliwenjian: '',
                    tianjiaren: this.$store.state.user.session.username, beizhu: '',
                    zhuangtai: '待审核',
                    shenqingren: this.$store.state.user.session.username,
                    zhaopinxinxiid: 0,

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
            updateWhere(where){
              where.tianjiaren=this.$store.state.user.session.username;
            },
            submit() {
                this.$refs.formModel.validate().then(res => {
                    if (this.loading) return;
                    this.loading = true;
                    var form = this.form;

                    this.$post(api.qiuzhishenqing.insert, form).then(res => {
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
                this.$post(api.qiuzhishenqing.create, {
                    id: this.$route.query.id
                }).then(res => {
                    this.loading = false;
                    if (res.code == api.code.OK) {
                        extend(this, res.data);
                        var readMap = res.data.readMap;
                        for (var i in form) {
                            if (readMap[i] && i != 'id') {
                                form[i] = res.data.readMap[i];
                            }
                        }
                        form.zhaopinxinxiid = readMap.id;
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
