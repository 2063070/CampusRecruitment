<template>
    <div class="xuesheng-imports">
        <el-card>
            <div slot="header" class="clearfix">
                <span class="title">
                    测试用例导入
                </span>
            </div>
            <div>
                <el-button type="success" @click="exportTemplate">下载导入模板</el-button>
                必须使用该模板导入
            </div>
            <h3>上传"导入模板文件"</h3>
            <div class="mt10">
                <e-upload-file v-model="xlsFile"></e-upload-file>
            </div>
            <div class="mt20">
                <el-button type="primary" @click="importXls" :disabled="xlsFile==''">导入</el-button>
            </div>
        </el-card>
    </div>
</template>
<style type="type/scss" lang="scss">

</style>
<script>
import api from "@/api";

export default {
    name: "xuesheng-imports",
    data() {
        return {
            xlsFile:''
        }
    },
    watch: {},
    computed: {},
    methods: {
        exportTemplate() {
            this.$get(api.xuesheng.importfile, this.search).thenBlob(data => {//以blob文件流格式返回数据
                var url = URL.createObjectURL(data);//获取对象的url
                const a = document.createElement('a')//创建a标签
                a.href = url
                a.download = '学生.xls'
                a.click()
            }, err => {
                this.$message.error(err.message);
            });
        },
        importXls(){
            this.$post(api.xuesheng.imports, {
                xls:this.xlsFile
            }).then(res => {
                if(res.code == api.code.OK){
                    this.$alert('导入成功')
                    this.xlsFile = '';
                }
            }, err => {
                this.$message.error(err.message);
            });
        }
    },
    created() {
    },
    mounted() {
    },
    destroyed() {
    }
}
</script>
