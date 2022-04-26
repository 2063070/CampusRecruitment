
export default [
{
    path:"xueshengadd",
        name:"IndexxueshengAdd",
    component: () => import("@/views/xuesheng/webadd"),
    meta: { title:"学生添加"  }
},
{
    path:"xinwenxinxi",
        name:"IndexxinwenxinxiList",
    component: () => import("@/views/xinwenxinxi/index"),
    meta: { title:"新闻信息列表"  }
},
{
    path:"xinwenxinxidetail",
        name:"IndexxinwenxinxiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/xinwenxinxi/webdetail"),
    meta: { title:"新闻信息详情"  }
},
{
    path:"yongrendanweiadd",
        name:"IndexyongrendanweiAdd",
    component: () => import("@/views/yongrendanwei/webadd"),
    meta: { title:"用人单位添加"  }
},
{
    path:"diaochawenjuan",
        name:"IndexdiaochawenjuanList",
    component: () => import("@/views/diaochawenjuan/index"),
    meta: { title:"调查问卷列表"  }
},
{
    path:"diaochawenjuandetail",
        name:"IndexdiaochawenjuanDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/diaochawenjuan/webdetail"),
    meta: { title:"调查问卷详情"  }
},
{
    path:"zhaopinxinxi",
        name:"IndexzhaopinxinxiList",
    component: () => import("@/views/zhaopinxinxi/index"),
    meta: { title:"招聘信息列表"  }
},
{
    path:"zhaopinxinxidetail",
        name:"IndexzhaopinxinxiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/zhaopinxinxi/webdetail"),
    meta: { title:"招聘信息详情"  }
},
{
    path:"qiuzhishenqingadd",
        name:"IndexqiuzhishenqingAdd",
    component: () => import("@/views/qiuzhishenqing/webadd"),
    meta: { title:"求职申请添加" ,authLogin:true,msg:true }
},
{
    path:"jiaoliuadd",
        name:"IndexjiaoliuAdd",
    component: () => import("@/views/jiaoliu/webadd"),
    meta: { title:"交流添加" ,authLogin:true,msg:true }
},
{
    path:"gaoxiaoxinxi",
        name:"IndexgaoxiaoxinxiList",
    component: () => import("@/views/gaoxiaoxinxi/index"),
    meta: { title:"高校信息列表"  }
},
{
    path:"gaoxiaoxinxidetail",
        name:"IndexgaoxiaoxinxiDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/gaoxiaoxinxi/webdetail"),
    meta: { title:"高校信息详情"  }
},
{
    path:"ceshishijuandetail",
        name:"IndexceshishijuanDetail",
    props:route=>({id:route.query.id}),
    component: () => import("@/views/ceshishijuan/webdetail"),
    meta: { title:"测试试卷详情"  }
},
]
