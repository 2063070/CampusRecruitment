
import http from "@/utils/ajax/http"


const api = {
    code:{
        OK:0    },
    user:{
        login:'authLogin.do?ac=login',
        tokenLogin:'tokenLogin.do',
        logout: 'logout.do'
    },
    checkUpdate:'sh.do',
    editorPassword :'editPassword',
    checkField:'checkno.do',

    
    collect:'collect.do',
    shoucangjilu: {
        listusername:"shoucangjilu_list2.do",
        delete:'shoucangjilu_delete'
    },
    captch(){
        var url = "captcha.do?rd="+Math.floor(Math.random()*100000);
        return new Promise((resolve, reject) => {
            http.get( url ).then(res=>{
                var url = res.data;
                resolve(url);
            },reject);
        });
    },
    search:{
        select:'selectUpdateSearch.do',
        table:'tableAjax.do?a=table',
        selectView:'selectView.do',
        all:'selectAll.do'
    },
    attachment:{
        uploadUrl:'upload_re.do',
        upload (file) {
            return new Promise((resolve, reject) => {
                var formdata = new FormData();
                formdata.append("fujian" , file , file.name || 'tmp.png');
                http.post(api.attachment.uploadUrl , formdata)
                    .then(res=>{
                        if(res.code == api.code.OK)
                        {
                            resolve(res.data);
                        }else{
                            reject(res.msg);
                        }
                    }).catch(err=>{
                        reject(err.message);
                    });
            });
        },
    },
        admins:{
                list:"admins_list.do",
                insert:"adminsinsert.do",
                update:"adminsupdate.do",
                delete:"admins_delete.do",
                detail:"admins_detail.do",
                create:"admins_add.do",
                edit:"admins_updt.do",
            },
        xuesheng:{
                list:"xuesheng_list.do",
                insert:"xueshenginsert.do",
                update:"xueshengupdate.do",
                delete:"xuesheng_delete.do",
                detail:"xuesheng_detail.do",
                create:"xuesheng_add.do",
                edit:"xuesheng_updt.do",
                imports:"xuesheng_import.do",
                importfile:"xuesheng_importfile.do",
            },
        xinwenfenlei:{
                list:"xinwenfenlei_list.do",
                insert:"xinwenfenleiinsert.do",
                update:"xinwenfenleiupdate.do",
                delete:"xinwenfenlei_delete.do",
                detail:"xinwenfenlei_detail.do",
                create:"xinwenfenlei_add.do",
                edit:"xinwenfenlei_updt.do",
            },
        xinwenxinxi:{
                list:"xinwenxinxi_list.do",
                insert:"xinwenxinxiinsert.do",
                update:"xinwenxinxiupdate.do",
                delete:"xinwenxinxi_delete.do",
                detail:"xinwenxinxi_detail.do",
                create:"xinwenxinxi_add.do",
                edit:"xinwenxinxi_updt.do",
                listtianjiaren:"xinwenxinxi_list_tianjiaren.do",
                weblist:"xinwenxinxilist.do",
                webdetail:"xinwenxinxidetail.do",
            },
        youqinglianjie:{
                list:"youqinglianjie_list.do",
                insert:"youqinglianjieinsert.do",
                update:"youqinglianjieupdate.do",
                delete:"youqinglianjie_delete.do",
                detail:"youqinglianjie_detail.do",
                create:"youqinglianjie_add.do",
                edit:"youqinglianjie_updt.do",
            },
        lunbotu:{
                list:"lunbotu_list.do",
                insert:"lunbotuinsert.do",
                update:"lunbotuupdate.do",
                delete:"lunbotu_delete.do",
                detail:"lunbotu_detail.do",
                create:"lunbotu_add.do",
                edit:"lunbotu_updt.do",
            },
        yongrendanwei:{
                list:"yongrendanwei_list.do",
                insert:"yongrendanweiinsert.do",
                update:"yongrendanweiupdate.do",
                delete:"yongrendanwei_delete.do",
                detail:"yongrendanwei_detail.do",
                create:"yongrendanwei_add.do",
                edit:"yongrendanwei_updt.do",
            },
        diaochawenjuan:{
                list:"diaochawenjuan_list.do",
                insert:"diaochawenjuaninsert.do",
                update:"diaochawenjuanupdate.do",
                delete:"diaochawenjuan_delete.do",
                detail:"diaochawenjuan_detail.do",
                create:"diaochawenjuan_add.do",
                edit:"diaochawenjuan_updt.do",
                listfaburen:"diaochawenjuan_list_faburen.do",
                weblist:"diaochawenjuanlist.do",
                webdetail:"diaochawenjuandetail.do",
            },
        shiti:{
                list:"shiti_list.do",
                insert:"shitiinsert.do",
                update:"shitiupdate.do",
                delete:"shiti_delete.do",
                detail:"shiti_detail.do",
                create:"shiti_add.do",
                edit:"shiti_updt.do",
                listfaburen:"shiti_list_faburen.do",
            },
        jieguo:{
                list:"jieguo_list.do",
                insert:"jieguoinsert.do",
                update:"jieguoupdate.do",
                delete:"jieguo_delete.do",
                detail:"jieguo_detail.do",
                create:"jieguo_add.do",
                edit:"jieguo_updt.do",
                listfaburen:"jieguo_list_faburen.do",
                listkaoshiren:"jieguo_list_kaoshiren.do",
            },
        wenjuanjieguo:{
                list:"wenjuanjieguo_list.do",
                insert:"wenjuanjieguoinsert.do",
                update:"wenjuanjieguoupdate.do",
                delete:"wenjuanjieguo_delete.do",
                detail:"wenjuanjieguo_detail.do",
                create:"wenjuanjieguo_add.do",
                edit:"wenjuanjieguo_updt.do",
                listfaburen:"wenjuanjieguo_list_faburen.do",
                listkaoshiren:"wenjuanjieguo_list_kaoshiren.do",
            },
        leixing:{
                list:"leixing_list.do",
                insert:"leixinginsert.do",
                update:"leixingupdate.do",
                delete:"leixing_delete.do",
                detail:"leixing_detail.do",
                create:"leixing_add.do",
                edit:"leixing_updt.do",
            },
        zhaopinxinxi:{
                list:"zhaopinxinxi_list.do",
                insert:"zhaopinxinxiinsert.do",
                update:"zhaopinxinxiupdate.do",
                delete:"zhaopinxinxi_delete.do",
                detail:"zhaopinxinxi_detail.do",
                create:"zhaopinxinxi_add.do",
                edit:"zhaopinxinxi_updt.do",
                listfaburen:"zhaopinxinxi_list_faburen.do",
                weblist:"zhaopinxinxilist.do",
                webdetail:"zhaopinxinxidetail.do",
            },
        gerenjianli:{
                list:"gerenjianli_list.do",
                insert:"gerenjianliinsert.do",
                update:"gerenjianliupdate.do",
                delete:"gerenjianli_delete.do",
                detail:"gerenjianli_detail.do",
                create:"gerenjianli_add.do",
                edit:"gerenjianli_updt.do",
                listtianjiaren:"gerenjianli_list_tianjiaren.do",
            },
        jianlileixing:{
                list:"jianlileixing_list.do",
                insert:"jianlileixinginsert.do",
                update:"jianlileixingupdate.do",
                delete:"jianlileixing_delete.do",
                detail:"jianlileixing_detail.do",
                create:"jianlileixing_add.do",
                edit:"jianlileixing_updt.do",
            },
        qiuzhishenqing:{
                list:"qiuzhishenqing_list.do",
                insert:"qiuzhishenqinginsert.do",
                update:"qiuzhishenqingupdate.do",
                delete:"qiuzhishenqing_delete.do",
                detail:"qiuzhishenqing_detail.do",
                create:"qiuzhishenqing_add.do",
                edit:"qiuzhishenqing_updt.do",
                listfaburen:"qiuzhishenqing_list_faburen.do",
                listtianjiaren:"qiuzhishenqing_list_tianjiaren.do",
                listshenqingren:"qiuzhishenqing_list_shenqingren.do",
            },
        shenqingshenhe:{
                list:"shenqingshenhe_list.do",
                insert:"shenqingshenheinsert.do",
                update:"shenqingshenheupdate.do",
                delete:"shenqingshenhe_delete.do",
                detail:"shenqingshenhe_detail.do",
                create:"shenqingshenhe_add.do",
                edit:"shenqingshenhe_updt.do",
                listfaburen:"shenqingshenhe_list_faburen.do",
                listshenqingren:"shenqingshenhe_list_shenqingren.do",
            },
        jiaoliu:{
                list:"jiaoliu_list.do",
                insert:"jiaoliuinsert.do",
                update:"jiaoliuupdate.do",
                delete:"jiaoliu_delete.do",
                detail:"jiaoliu_detail.do",
                create:"jiaoliu_add.do",
                edit:"jiaoliu_updt.do",
                listshouxinren:"jiaoliu_list_shouxinren.do",
                listfaxinren:"jiaoliu_list_faxinren.do",
            },
        liaotianjilu:{
                list:"liaotianjilu_list.do",
                insert:"liaotianjiluinsert.do",
                update:"liaotianjiluupdate.do",
                delete:"liaotianjilu_delete.do",
                detail:"liaotianjilu_detail.do",
                create:"liaotianjilu_add.do",
                edit:"liaotianjilu_updt.do",
                listfaxinren:"liaotianjilu_list_faxinren.do",
            },
        gaoxiaoguanliyuan:{
                list:"gaoxiaoguanliyuan_list.do",
                insert:"gaoxiaoguanliyuaninsert.do",
                update:"gaoxiaoguanliyuanupdate.do",
                delete:"gaoxiaoguanliyuan_delete.do",
                detail:"gaoxiaoguanliyuan_detail.do",
                create:"gaoxiaoguanliyuan_add.do",
                edit:"gaoxiaoguanliyuan_updt.do",
            },
        gaoxiaoxinxi:{
                list:"gaoxiaoxinxi_list.do",
                insert:"gaoxiaoxinxiinsert.do",
                update:"gaoxiaoxinxiupdate.do",
                delete:"gaoxiaoxinxi_delete.do",
                detail:"gaoxiaoxinxi_detail.do",
                create:"gaoxiaoxinxi_add.do",
                edit:"gaoxiaoxinxi_updt.do",
                listfaburen:"gaoxiaoxinxi_list_faburen.do",
                weblist:"gaoxiaoxinxilist.do",
                webdetail:"gaoxiaoxinxidetail.do",
            },
        mianshitongzhi:{
                list:"mianshitongzhi_list.do",
                insert:"mianshitongzhiinsert.do",
                update:"mianshitongzhiupdate.do",
                delete:"mianshitongzhi_delete.do",
                detail:"mianshitongzhi_detail.do",
                create:"mianshitongzhi_add.do",
                edit:"mianshitongzhi_updt.do",
                listfaburen:"mianshitongzhi_list_faburen.do",
                listshenqingren:"mianshitongzhi_list_shenqingren.do",
            },
        ceshishijuan:{
                list:"ceshishijuan_list.do",
                insert:"ceshishijuaninsert.do",
                update:"ceshishijuanupdate.do",
                delete:"ceshishijuan_delete.do",
                detail:"ceshishijuan_detail.do",
                create:"ceshishijuan_add.do",
                edit:"ceshishijuan_updt.do",
                listfaburen:"ceshishijuan_list_faburen.do",
                webdetail:"ceshishijuandetail.do",
            },
        ceshishiti:{
                list:"ceshishiti_list.do",
                insert:"ceshishitiinsert.do",
                update:"ceshishitiupdate.do",
                delete:"ceshishiti_delete.do",
                detail:"ceshishiti_detail.do",
                create:"ceshishiti_add.do",
                edit:"ceshishiti_updt.do",
                listfaburen:"ceshishiti_list_faburen.do",
            },
        ceshijieguo:{
                list:"ceshijieguo_list.do",
                insert:"ceshijieguoinsert.do",
                update:"ceshijieguoupdate.do",
                delete:"ceshijieguo_delete.do",
                detail:"ceshijieguo_detail.do",
                create:"ceshijieguo_add.do",
                edit:"ceshijieguo_updt.do",
                listfaburen:"ceshijieguo_list_faburen.do",
                listkaoshiren:"ceshijieguo_list_kaoshiren.do",
            },
        ceshichengji:{
                list:"ceshichengji_list.do",
                insert:"ceshichengjiinsert.do",
                update:"ceshichengjiupdate.do",
                delete:"ceshichengji_delete.do",
                detail:"ceshichengji_detail.do",
                create:"ceshichengji_add.do",
                edit:"ceshichengji_updt.do",
                listfaburen:"ceshichengji_list_faburen.do",
                listkaoshiren:"ceshichengji_list_kaoshiren.do",
            },
        logs:{
                list:"logs_list.do",
                insert:"logsinsert.do",
                update:"logsupdate.do",
                delete:"logs_delete.do",
                detail:"logs_detail.do",
                create:"logs_add.do",
                edit:"logs_updt.do",
                listusername:"logs_list_username.do",
                batch:"logs_batch.do",
            },
        mianshijieguo:{
                list:"mianshijieguo_list.do",
                insert:"mianshijieguoinsert.do",
                update:"mianshijieguoupdate.do",
                delete:"mianshijieguo_delete.do",
                detail:"mianshijieguo_detail.do",
                create:"mianshijieguo_add.do",
                edit:"mianshijieguo_updt.do",
                listfaburen:"mianshijieguo_list_faburen.do",
                listshenqingren:"mianshijieguo_list_shenqingren.do",
            },
    }

export default api
