import store from '@/store';

export default [

{
    path: 'shoucangjilu',
        name: 'Adminshoucangjilu',
    component: () => import('@/views/shoucangjilu/list'),
    meta: {authLogin: true},
},

{
    path:"admins",
        name:"AdminadminsList",
    component: () => import("@/views/admins/list"),
    meta: { title:"管理员列表",authLogin:true }
},
{
    path:"adminsadd",
        name:"AdminadminsAdd",
    component: () => import("@/views/admins/add"),
    meta: { title:"添加管理员",authLogin:true }
},
{
    path:"adminsupdt",
        name:"AdminadminsUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"adminsupdtself",
        name:"AdminadminsUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/admins/updt"),
    meta: { title:"编辑管理员",authLogin:true }
},
{
    path:"xuesheng",
        name:"AdminxueshengList",
    component: () => import("@/views/xuesheng/list"),
    meta: { title:"学生列表",authLogin:true }
},
{
    path:"xueshengadd",
        name:"AdminxueshengAdd",
    component: () => import("@/views/xuesheng/add"),
    meta: { title:"添加学生",authLogin:true }
},
{
    path:"xueshengupdt",
        name:"AdminxueshengUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xuesheng/updt"),
    meta: { title:"编辑学生",authLogin:true }
},
{
    path:"xueshengupdtself",
        name:"AdminxueshengUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/xuesheng/updt"),
    meta: { title:"编辑学生",authLogin:true }
},
{
    path:"xueshengimport",
    name:"AdminxueshengImport",
    component: () => import("@/views/xuesheng/imports"),
    meta: { title:"学生详情",authLogin:true }
},
{
    path:"xinwenfenlei",
        name:"AdminxinwenfenleiList",
    component: () => import("@/views/xinwenfenlei/list"),
    meta: { title:"新闻分类列表",authLogin:true }
},
{
    path:"xinwenfenleiadd",
        name:"AdminxinwenfenleiAdd",
    component: () => import("@/views/xinwenfenlei/add"),
    meta: { title:"添加新闻分类",authLogin:true }
},
{
    path:"xinwenfenleiupdt",
        name:"AdminxinwenfenleiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenfenlei/updt"),
    meta: { title:"编辑新闻分类",authLogin:true }
},
{
    path:"xinwenxinxi",
        name:"AdminxinwenxinxiList",
    component: () => import("@/views/xinwenxinxi/list"),
    meta: { title:"新闻信息列表",authLogin:true }
},
{
    path:"xinwenxinxi_tianjiaren",
        name:"AdminxinwenxinxiListtianjiaren",
    component: () => import("@/views/xinwenxinxi/list-tianjiaren"),
    meta: { title:"新闻信息列表",authLogin:true }
},
{
    path:"xinwenxinxiadd",
        name:"AdminxinwenxinxiAdd",
    component: () => import("@/views/xinwenxinxi/add"),
    meta: { title:"添加新闻信息",authLogin:true }
},
{
    path:"xinwenxinxiupdt",
        name:"AdminxinwenxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenxinxi/updt"),
    meta: { title:"编辑新闻信息",authLogin:true }
},
{
    path:"xinwenxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminxinwenxinxiDetail",
    component: () => import("@/views/xinwenxinxi/detail"),
    meta: { title:"新闻信息详情",authLogin:true }
},
{
    path:"youqinglianjie",
        name:"AdminyouqinglianjieList",
    component: () => import("@/views/youqinglianjie/list"),
    meta: { title:"友情链接列表",authLogin:true }
},
{
    path:"youqinglianjieadd",
        name:"AdminyouqinglianjieAdd",
    component: () => import("@/views/youqinglianjie/add"),
    meta: { title:"添加友情链接",authLogin:true }
},
{
    path:"youqinglianjieupdt",
        name:"AdminyouqinglianjieUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/youqinglianjie/updt"),
    meta: { title:"编辑友情链接",authLogin:true }
},
{
    path:"lunbotu",
        name:"AdminlunbotuList",
    component: () => import("@/views/lunbotu/list"),
    meta: { title:"轮播图列表",authLogin:true }
},
{
    path:"lunbotuadd",
        name:"AdminlunbotuAdd",
    component: () => import("@/views/lunbotu/add"),
    meta: { title:"添加轮播图",authLogin:true }
},
{
    path:"lunbotuupdt",
        name:"AdminlunbotuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/lunbotu/updt"),
    meta: { title:"编辑轮播图",authLogin:true }
},
{
    path:"yongrendanwei",
        name:"AdminyongrendanweiList",
    component: () => import("@/views/yongrendanwei/list"),
    meta: { title:"用人单位列表",authLogin:true }
},
{
    path:"yongrendanweiadd",
        name:"AdminyongrendanweiAdd",
    component: () => import("@/views/yongrendanwei/add"),
    meta: { title:"添加用人单位",authLogin:true }
},
{
    path:"yongrendanweiupdt",
        name:"AdminyongrendanweiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/yongrendanwei/updt"),
    meta: { title:"编辑用人单位",authLogin:true }
},
{
    path:"yongrendanweiupdtself",
        name:"AdminyongrendanweiUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/yongrendanwei/updt"),
    meta: { title:"编辑用人单位",authLogin:true }
},
{
    path:"diaochawenjuan",
        name:"AdmindiaochawenjuanList",
    component: () => import("@/views/diaochawenjuan/list"),
    meta: { title:"调查问卷列表",authLogin:true }
},
{
    path:"diaochawenjuan_faburen",
        name:"AdmindiaochawenjuanListfaburen",
    component: () => import("@/views/diaochawenjuan/list-faburen"),
    meta: { title:"调查问卷列表",authLogin:true }
},
{
    path:"diaochawenjuanadd",
        name:"AdmindiaochawenjuanAdd",
    component: () => import("@/views/diaochawenjuan/add"),
    meta: { title:"添加调查问卷",authLogin:true }
},
{
    path:"diaochawenjuanupdt",
        name:"AdmindiaochawenjuanUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/diaochawenjuan/updt"),
    meta: { title:"编辑调查问卷",authLogin:true }
},
{
    path:"diaochawenjuandetail",
        props:route=>({id:route.query.id}),
    name:"AdmindiaochawenjuanDetail",
    component: () => import("@/views/diaochawenjuan/detail"),
    meta: { title:"调查问卷详情",authLogin:true }
},
{
    path:"shiti",
        name:"AdminshitiList",
    component: () => import("@/views/shiti/list"),
    meta: { title:"试题列表",authLogin:true }
},
{
    path:"shiti_faburen",
        name:"AdminshitiListfaburen",
    component: () => import("@/views/shiti/list-faburen"),
    meta: { title:"试题列表",authLogin:true }
},
{
    path:"shitiadd",
        name:"AdminshitiAdd",
    component: () => import("@/views/shiti/add"),
    meta: { title:"添加试题",authLogin:true }
},
{
    path:"shitiupdt",
        name:"AdminshitiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shiti/updt"),
    meta: { title:"编辑试题",authLogin:true }
},
{
    path:"shitidetail",
        props:route=>({id:route.query.id}),
    name:"AdminshitiDetail",
    component: () => import("@/views/shiti/detail"),
    meta: { title:"试题详情",authLogin:true }
},
{
    path:"jieguo",
        name:"AdminjieguoList",
    component: () => import("@/views/jieguo/list"),
    meta: { title:"结果列表",authLogin:true }
},
{
    path:"jieguo_faburen",
        name:"AdminjieguoListfaburen",
    component: () => import("@/views/jieguo/list-faburen"),
    meta: { title:"结果列表",authLogin:true }
},
{
    path:"jieguo_kaoshiren",
        name:"AdminjieguoListkaoshiren",
    component: () => import("@/views/jieguo/list-kaoshiren"),
    meta: { title:"结果列表",authLogin:true }
},
{
    path:"jieguoadd",
        name:"AdminjieguoAdd",
    component: () => import("@/views/jieguo/add"),
    meta: { title:"添加结果",authLogin:true }
},
{
    path:"jieguoupdt",
        name:"AdminjieguoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/jieguo/updt"),
    meta: { title:"编辑结果",authLogin:true }
},
{
    path:"jieguodetail",
        props:route=>({id:route.query.id}),
    name:"AdminjieguoDetail",
    component: () => import("@/views/jieguo/detail"),
    meta: { title:"结果详情",authLogin:true }
},
{
    path:"wenjuanjieguo",
        name:"AdminwenjuanjieguoList",
    component: () => import("@/views/wenjuanjieguo/list"),
    meta: { title:"问卷结果列表",authLogin:true }
},
{
    path:"wenjuanjieguo_faburen",
        name:"AdminwenjuanjieguoListfaburen",
    component: () => import("@/views/wenjuanjieguo/list-faburen"),
    meta: { title:"问卷结果列表",authLogin:true }
},
{
    path:"wenjuanjieguo_kaoshiren",
        name:"AdminwenjuanjieguoListkaoshiren",
    component: () => import("@/views/wenjuanjieguo/list-kaoshiren"),
    meta: { title:"问卷结果列表",authLogin:true }
},
{
    path:"wenjuanjieguoadd",
        name:"AdminwenjuanjieguoAdd",
    component: () => import("@/views/wenjuanjieguo/add"),
    meta: { title:"添加问卷结果",authLogin:true }
},
{
    path:"wenjuanjieguoupdt",
        name:"AdminwenjuanjieguoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/wenjuanjieguo/updt"),
    meta: { title:"编辑问卷结果",authLogin:true }
},
{
    path:"wenjuanjieguodetail",
        props:route=>({id:route.query.id}),
    name:"AdminwenjuanjieguoDetail",
    component: () => import("@/views/wenjuanjieguo/detail"),
    meta: { title:"问卷结果详情",authLogin:true }
},
{
    path:"leixing",
        name:"AdminleixingList",
    component: () => import("@/views/leixing/list"),
    meta: { title:"类型列表",authLogin:true }
},
{
    path:"leixingadd",
        name:"AdminleixingAdd",
    component: () => import("@/views/leixing/add"),
    meta: { title:"添加类型",authLogin:true }
},
{
    path:"leixingupdt",
        name:"AdminleixingUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/leixing/updt"),
    meta: { title:"编辑类型",authLogin:true }
},
{
    path:"zhaopinxinxi",
        name:"AdminzhaopinxinxiList",
    component: () => import("@/views/zhaopinxinxi/list"),
    meta: { title:"招聘信息列表",authLogin:true }
},
{
    path:"zhaopinxinxi_faburen",
        name:"AdminzhaopinxinxiListfaburen",
    component: () => import("@/views/zhaopinxinxi/list-faburen"),
    meta: { title:"招聘信息列表",authLogin:true }
},
{
    path:"zhaopinxinxiadd",
        name:"AdminzhaopinxinxiAdd",
    component: () => import("@/views/zhaopinxinxi/add"),
    meta: { title:"添加招聘信息",authLogin:true }
},
{
    path:"zhaopinxinxiupdt",
        name:"AdminzhaopinxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/zhaopinxinxi/updt"),
    meta: { title:"编辑招聘信息",authLogin:true }
},
{
    path:"zhaopinxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdminzhaopinxinxiDetail",
    component: () => import("@/views/zhaopinxinxi/detail"),
    meta: { title:"招聘信息详情",authLogin:true }
},
{
    path:"gerenjianli",
        name:"AdmingerenjianliList",
    component: () => import("@/views/gerenjianli/list"),
    meta: { title:"个人简历列表",authLogin:true }
},
{
    path:"gerenjianli_tianjiaren",
        name:"AdmingerenjianliListtianjiaren",
    component: () => import("@/views/gerenjianli/list-tianjiaren"),
    meta: { title:"个人简历列表",authLogin:true }
},
{
    path:"gerenjianliadd",
        name:"AdmingerenjianliAdd",
    component: () => import("@/views/gerenjianli/add"),
    meta: { title:"添加个人简历",authLogin:true }
},
{
    path:"gerenjianliupdt",
        name:"AdmingerenjianliUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/gerenjianli/updt"),
    meta: { title:"编辑个人简历",authLogin:true }
},
{
    path:"gerenjianlidetail",
        props:route=>({id:route.query.id}),
    name:"AdmingerenjianliDetail",
    component: () => import("@/views/gerenjianli/detail"),
    meta: { title:"个人简历详情",authLogin:true }
},
{
    path:"jianlileixing",
        name:"AdminjianlileixingList",
    component: () => import("@/views/jianlileixing/list"),
    meta: { title:"简历类型列表",authLogin:true }
},
{
    path:"jianlileixingadd",
        name:"AdminjianlileixingAdd",
    component: () => import("@/views/jianlileixing/add"),
    meta: { title:"添加简历类型",authLogin:true }
},
{
    path:"jianlileixingupdt",
        name:"AdminjianlileixingUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/jianlileixing/updt"),
    meta: { title:"编辑简历类型",authLogin:true }
},
{
    path:"qiuzhishenqing",
        name:"AdminqiuzhishenqingList",
    component: () => import("@/views/qiuzhishenqing/list"),
    meta: { title:"求职申请列表",authLogin:true }
},
{
    path:"qiuzhishenqing_faburen",
        name:"AdminqiuzhishenqingListfaburen",
    component: () => import("@/views/qiuzhishenqing/list-faburen"),
    meta: { title:"求职申请列表",authLogin:true }
},
{
    path:"qiuzhishenqing_shenqingren",
        name:"AdminqiuzhishenqingListshenqingren",
    component: () => import("@/views/qiuzhishenqing/list-shenqingren"),
    meta: { title:"求职申请列表",authLogin:true }
},
{
    path:"qiuzhishenqingadd",
        name:"AdminqiuzhishenqingAdd",
    component: () => import("@/views/qiuzhishenqing/add"),
    meta: { title:"添加求职申请",authLogin:true }
},
{
    path:"qiuzhishenqingupdt",
        name:"AdminqiuzhishenqingUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/qiuzhishenqing/updt"),
    meta: { title:"编辑求职申请",authLogin:true }
},
{
    path:"shenqingshenhe",
        name:"AdminshenqingshenheList",
    component: () => import("@/views/shenqingshenhe/list"),
    meta: { title:"申请审核列表",authLogin:true }
},
{
    path:"shenqingshenhe_faburen",
        name:"AdminshenqingshenheListfaburen",
    component: () => import("@/views/shenqingshenhe/list-faburen"),
    meta: { title:"申请审核列表",authLogin:true }
},
{
    path:"shenqingshenhe_shenqingren",
        name:"AdminshenqingshenheListshenqingren",
    component: () => import("@/views/shenqingshenhe/list-shenqingren"),
    meta: { title:"申请审核列表",authLogin:true }
},
{
    path:"shenqingshenheadd",
        name:"AdminshenqingshenheAdd",
    component: () => import("@/views/shenqingshenhe/add"),
    meta: { title:"添加申请审核",authLogin:true }
},
{
    path:"shenqingshenheupdt",
        name:"AdminshenqingshenheUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/shenqingshenhe/updt"),
    meta: { title:"编辑申请审核",authLogin:true }
},
{
    path:"jiaoliu",
        name:"AdminjiaoliuList",
    component: () => import("@/views/jiaoliu/list"),
    meta: { title:"交流列表",authLogin:true }
},
{
    path:"jiaoliu_shouxinren",
        name:"AdminjiaoliuListshouxinren",
    component: () => import("@/views/jiaoliu/list-shouxinren"),
    meta: { title:"交流列表",authLogin:true }
},
{
    path:"jiaoliu_faxinren",
        name:"AdminjiaoliuListfaxinren",
    component: () => import("@/views/jiaoliu/list-faxinren"),
    meta: { title:"交流列表",authLogin:true }
},
{
    path:"jiaoliuadd",
        name:"AdminjiaoliuAdd",
    component: () => import("@/views/jiaoliu/add"),
    meta: { title:"添加交流",authLogin:true }
},
{
    path:"jiaoliuupdt",
        name:"AdminjiaoliuUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/jiaoliu/updt"),
    meta: { title:"编辑交流",authLogin:true }
},
{
    path:"liaotianjilu",
        name:"AdminliaotianjiluList",
    component: () => import("@/views/liaotianjilu/list"),
    meta: { title:"聊天记录列表",authLogin:true }
},
{
    path:"liaotianjilu_faxinren",
        name:"AdminliaotianjiluListfaxinren",
    component: () => import("@/views/liaotianjilu/list-faxinren"),
    meta: { title:"聊天记录列表",authLogin:true }
},
{
    path:"liaotianjiluadd",
        name:"AdminliaotianjiluAdd",
    component: () => import("@/views/liaotianjilu/add"),
    meta: { title:"添加聊天记录",authLogin:true }
},
{
    path:"liaotianjiluupdt",
        name:"AdminliaotianjiluUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/liaotianjilu/updt"),
    meta: { title:"编辑聊天记录",authLogin:true }
},
{
    path:"gaoxiaoguanliyuan",
        name:"AdmingaoxiaoguanliyuanList",
    component: () => import("@/views/gaoxiaoguanliyuan/list"),
    meta: { title:"高校管理员列表",authLogin:true }
},
{
    path:"gaoxiaoguanliyuanadd",
        name:"AdmingaoxiaoguanliyuanAdd",
    component: () => import("@/views/gaoxiaoguanliyuan/add"),
    meta: { title:"添加高校管理员",authLogin:true }
},
{
    path:"gaoxiaoguanliyuanupdt",
        name:"AdmingaoxiaoguanliyuanUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/gaoxiaoguanliyuan/updt"),
    meta: { title:"编辑高校管理员",authLogin:true }
},
{
    path:"gaoxiaoguanliyuanupdtself",
        name:"AdmingaoxiaoguanliyuanUpdtSelf",
    props:route=>({id:store.state.user.session.id}),
    component: () => import("@/views/gaoxiaoguanliyuan/updt"),
    meta: { title:"编辑高校管理员",authLogin:true }
},
{
    path:"gaoxiaoxinxi",
        name:"AdmingaoxiaoxinxiList",
    component: () => import("@/views/gaoxiaoxinxi/list"),
    meta: { title:"高校信息列表",authLogin:true }
},
{
    path:"gaoxiaoxinxi_faburen",
        name:"AdmingaoxiaoxinxiListfaburen",
    component: () => import("@/views/gaoxiaoxinxi/list-faburen"),
    meta: { title:"高校信息列表",authLogin:true }
},
{
    path:"gaoxiaoxinxiadd",
        name:"AdmingaoxiaoxinxiAdd",
    component: () => import("@/views/gaoxiaoxinxi/add"),
    meta: { title:"添加高校信息",authLogin:true }
},
{
    path:"gaoxiaoxinxiupdt",
        name:"AdmingaoxiaoxinxiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/gaoxiaoxinxi/updt"),
    meta: { title:"编辑高校信息",authLogin:true }
},
{
    path:"gaoxiaoxinxidetail",
        props:route=>({id:route.query.id}),
    name:"AdmingaoxiaoxinxiDetail",
    component: () => import("@/views/gaoxiaoxinxi/detail"),
    meta: { title:"高校信息详情",authLogin:true }
},
{
    path:"mianshitongzhi",
        name:"AdminmianshitongzhiList",
    component: () => import("@/views/mianshitongzhi/list"),
    meta: { title:"面试通知列表",authLogin:true }
},
{
    path:"mianshitongzhi_faburen",
        name:"AdminmianshitongzhiListfaburen",
    component: () => import("@/views/mianshitongzhi/list-faburen"),
    meta: { title:"面试通知列表",authLogin:true }
},
{
    path:"mianshitongzhi_shenqingren",
        name:"AdminmianshitongzhiListshenqingren",
    component: () => import("@/views/mianshitongzhi/list-shenqingren"),
    meta: { title:"面试通知列表",authLogin:true }
},
{
    path:"mianshitongzhiadd",
        name:"AdminmianshitongzhiAdd",
    component: () => import("@/views/mianshitongzhi/add"),
    meta: { title:"添加面试通知",authLogin:true }
},
{
    path:"mianshitongzhiupdt",
        name:"AdminmianshitongzhiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/mianshitongzhi/updt"),
    meta: { title:"编辑面试通知",authLogin:true }
},
{
    path:"ceshishijuan",
        name:"AdminceshishijuanList",
    component: () => import("@/views/ceshishijuan/list"),
    meta: { title:"测试试卷列表",authLogin:true }
},
{
    path:"ceshishijuan_faburen",
        name:"AdminceshishijuanListfaburen",
    component: () => import("@/views/ceshishijuan/list-faburen"),
    meta: { title:"测试试卷列表",authLogin:true }
},
{
    path:"ceshishijuanadd",
        name:"AdminceshishijuanAdd",
    component: () => import("@/views/ceshishijuan/add"),
    meta: { title:"添加测试试卷",authLogin:true }
},
{
    path:"ceshishijuanupdt",
        name:"AdminceshishijuanUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ceshishijuan/updt"),
    meta: { title:"编辑测试试卷",authLogin:true }
},
{
    path:"ceshishijuandetail",
        props:route=>({id:route.query.id}),
    name:"AdminceshishijuanDetail",
    component: () => import("@/views/ceshishijuan/detail"),
    meta: { title:"测试试卷详情",authLogin:true }
},
{
    path:"ceshishiti",
        name:"AdminceshishitiList",
    component: () => import("@/views/ceshishiti/list"),
    meta: { title:"测试试题列表",authLogin:true }
},
{
    path:"ceshishiti_faburen",
        name:"AdminceshishitiListfaburen",
    component: () => import("@/views/ceshishiti/list-faburen"),
    meta: { title:"测试试题列表",authLogin:true }
},
{
    path:"ceshishitiadd",
        name:"AdminceshishitiAdd",
    component: () => import("@/views/ceshishiti/add"),
    meta: { title:"添加测试试题",authLogin:true }
},
{
    path:"ceshishitiupdt",
        name:"AdminceshishitiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ceshishiti/updt"),
    meta: { title:"编辑测试试题",authLogin:true }
},
{
    path:"ceshishitidetail",
        props:route=>({id:route.query.id}),
    name:"AdminceshishitiDetail",
    component: () => import("@/views/ceshishiti/detail"),
    meta: { title:"测试试题详情",authLogin:true }
},
{
    path:"ceshijieguo",
        name:"AdminceshijieguoList",
    component: () => import("@/views/ceshijieguo/list"),
    meta: { title:"测试结果列表",authLogin:true }
},
{
    path:"ceshijieguo_faburen",
        name:"AdminceshijieguoListfaburen",
    component: () => import("@/views/ceshijieguo/list-faburen"),
    meta: { title:"测试结果列表",authLogin:true }
},
{
    path:"ceshijieguo_kaoshiren",
        name:"AdminceshijieguoListkaoshiren",
    component: () => import("@/views/ceshijieguo/list-kaoshiren"),
    meta: { title:"测试结果列表",authLogin:true }
},
{
    path:"ceshijieguoadd",
        name:"AdminceshijieguoAdd",
    component: () => import("@/views/ceshijieguo/add"),
    meta: { title:"添加测试结果",authLogin:true }
},
{
    path:"ceshijieguoupdt",
        name:"AdminceshijieguoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ceshijieguo/updt"),
    meta: { title:"编辑测试结果",authLogin:true }
},
{
    path:"ceshichengji",
        name:"AdminceshichengjiList",
    component: () => import("@/views/ceshichengji/list"),
    meta: { title:"测试成绩列表",authLogin:true }
},
{
    path:"ceshichengji_faburen",
        name:"AdminceshichengjiListfaburen",
    component: () => import("@/views/ceshichengji/list-faburen"),
    meta: { title:"测试成绩列表",authLogin:true }
},
{
    path:"ceshichengji_kaoshiren",
        name:"AdminceshichengjiListkaoshiren",
    component: () => import("@/views/ceshichengji/list-kaoshiren"),
    meta: { title:"测试成绩列表",authLogin:true }
},
{
    path:"ceshichengjiadd",
        name:"AdminceshichengjiAdd",
    component: () => import("@/views/ceshichengji/add"),
    meta: { title:"添加测试成绩",authLogin:true }
},
{
    path:"ceshichengjiupdt",
        name:"AdminceshichengjiUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ceshichengji/updt"),
    meta: { title:"编辑测试成绩",authLogin:true }
},
{
    path:"ceshichengjidetail",
        props:route=>({id:route.query.id}),
    name:"AdminceshichengjiDetail",
    component: () => import("@/views/ceshichengji/detail"),
    meta: { title:"测试成绩详情",authLogin:true }
},
{
    path:"logs",
        name:"AdminlogsList",
    component: () => import("@/views/logs/list"),
    meta: { title:"操作日志列表",authLogin:true }
},
{
    path:"logs_username",
        name:"AdminlogsListusername",
    component: () => import("@/views/logs/list-username"),
    meta: { title:"操作日志列表",authLogin:true }
},
{
    path:"logsadd",
        name:"AdminlogsAdd",
    component: () => import("@/views/logs/add"),
    meta: { title:"添加操作日志",authLogin:true }
},
{
    path:"logsupdt",
        name:"AdminlogsUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/logs/updt"),
    meta: { title:"编辑操作日志",authLogin:true }
},
{
    path:"mianshijieguo",
        name:"AdminmianshijieguoList",
    component: () => import("@/views/mianshijieguo/list"),
    meta: { title:"面试结果列表",authLogin:true }
},
{
    path:"mianshijieguo_faburen",
        name:"AdminmianshijieguoListfaburen",
    component: () => import("@/views/mianshijieguo/list-faburen"),
    meta: { title:"面试结果列表",authLogin:true }
},
{
    path:"mianshijieguo_shenqingren",
        name:"AdminmianshijieguoListshenqingren",
    component: () => import("@/views/mianshijieguo/list-shenqingren"),
    meta: { title:"面试结果列表",authLogin:true }
},
{
    path:"mianshijieguoadd",
        name:"AdminmianshijieguoAdd",
    component: () => import("@/views/mianshijieguo/add"),
    meta: { title:"添加面试结果",authLogin:true }
},
{
    path:"mianshijieguoupdt",
        name:"AdminmianshijieguoUpdt",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/mianshijieguo/updt"),
    meta: { title:"编辑面试结果",authLogin:true }
},
]
