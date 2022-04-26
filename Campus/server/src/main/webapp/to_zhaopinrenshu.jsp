<%@ page import="util.Request" %>
<%@ page import="dao.Query" %>
<%@ page import="dao.CommDAO" %>
<%@ page import="util.Info" %>
<%@ page import="util.Timer" %>
<%@ page import="java.util.*" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ include file="head.jsp" %>

<head>
    <title>Title</title>
    <%--<link rel="stylesheet" href="css/style.css"/>--%>
    <script src="js/datepicker/WdatePicker.js"></script>

    <script src="js/highcharts/highcharts.js"></script>
    <script src="js/highcharts/modules/exporting.js"></script>
    <script src="js/highcharts/modules/series-label.js"></script>
    <script src="js/highcharts/modules/oldie.js"></script>

</head>

<style scoped type="text/scss" lang="scss">//统计表样式
.iframe {
    position: absolute;
    width: 100%;
    height: 100vh;
    padding: 20px;
    overflow: hidden;
}

</style>
<div style="padding: 10px">

    <div class="panel panel-default">
        <div class="panel-heading">
            <span class="module-name">
                综合分析
            </span>
        </div>
        <div class="panel-body">
            <div class="pa10 bg-warning">
                <form action="?" method="get" id="formSearch">
                    开始时间：<input type="text" readonly name="kaishiriqi" value="<%=Request.get("kaishiriqi")%>"
                                onclick="WdatePicker({dateFmt:'yyyy-MM-dd',lang:'zh-cn'})">
                    结束时间：<input type="text" readonly name="jieshuriqi" value="<%=Request.get("jieshuriqi")%>"
                                onclick="WdatePicker({dateFmt:'yyyy-MM-dd',lang:'zh-cn'})">
                    <button type="submit" class="btn btn-success">提交</button>
                    <button type="button" class="btn btn-success" onclick="window.print()">打印
                    </button>
                </form>
            </div>
            <%
                String where = "1=1 and jieguo='通过'";
                if (!Request.get("kaishiriqi").equals("")) {
                    where += " AND addtime>='" + Request.get("kaishiriqi") + " 00:00:00' ";
                }
                if (!Request.get("jieshuriqi").equals("")) {
                    where += " AND addtime<='" + Request.get("jieshuriqi") + " 23:59:59' ";
                }
                List<HashMap> list = Query.make("mianshijieguo").where(where).field("count(*) count,biaoti")
                        .group("biaoti")
                        .order("count(*) desc").select();
            %>

            <style>
                th {
                    text-align: center;
                }
            </style>

            <table class="table">
                <thead>
                <tr>
                    <th>标题</th>
                    <th>人数</th>
                </tr>
                </thead>
                <tbody>
                <% for (HashMap map : list) { %>
                <tr align="center">
                    <td>
                        <%= map.get("biaoti") %>
                    </td>
                    <td><%= map.get("count") %>
                    </td>
                </tr>
                <%}%>
                <tr>
                    <td id="container1" style="min-width:750px;height:50%"></td>
                    <script>
                        var chart = Highcharts.chart('container1', {
                            chart: {
                                type: 'column'
                            },
                            title: {
                                text: '总数'
                            },
                            subtitle: {
                                text: '数据来源: 面试结果表'
                            },
                            xAxis: {
                                categories: [

                                    ''

                                ],
                                crosshair: true
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: '人数'
                                }
                            },
                            tooltip: {
                                // head + 每个 point + footer 拼接成完整的 table
                                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                    '<td style="padding:0"><b>{point.y:.1f} 人数</b></td></tr>',
                                footerFormat: '</table>',
                                shared: true,
                                useHTML: true
                            },
                            plotOptions: {
                                column: {
                                    borderWidth: 0
                                }
                            },
                            series: [
                                <%  for (HashMap map : list) { %>
                                {
                                    name: '<%= map.get("biaoti") %>',
                                    data: [<%=map.get("count")%>]
                                },
                                <%}%>
                            ]
                        });
                    </script>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>