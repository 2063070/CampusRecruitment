<template>
    <e-chat :load-data="loadData" :send-content="sendContent"></e-chat>
</template>

<script>
    import api from "@/api";
    import {extend} from "@/utils/extend";
    export default {
        name: "chat",
        props:{
            post:{
                type:Object
            },
            chatId:{
                type:[String,Number]
            }
        },
        methods:{
            loadData(form){
                return new Promise((resolve, reject) => {
                    form.chatid = this.chatId;
                    this.$post('/chatMessage' , form).then(res=>{
                        if(res.code == api.code.OK){
                            // 数据转换
                            var $session = this.$session;
                            var result = [];
                            res.data.forEach(e=>{
                                result.push({
                                    id:e.id,
                                    content:e.neirong,
                                    isOneself: e.faxinren == $session.username,
                                    addtime:e.addtime,
                                    nickname:e.faxinren
                                })
                            });
                            resolve(result);
                        }else{
                            reject(res.msg);
                        }
                    }).catch(err=>{
                        reject(err.message)
                    });
                });
            },
            sendContent(form){
                return new Promise((resolve, reject) => {
                    var post = extend(true,this.post,{
                        neirong:form.content,
                        faxinren:this.$session.username
                    });
                    this.$post(api.liaotianjilu.insert , post).then(res=>{
                        if(res.code == api.code.OK){
                            var e = res.data;
                            var data = {
                                id:e.id,
                                content:e.neirong,
                                isOneself:1,
                                addtime:e.addtime,
                                nickname:e.faxinren
                            }
                            resolve(data);
                        }else{
                            reject(res.msg);
                        }
                    }).catch(err=>{
                        reject(err.message)
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>