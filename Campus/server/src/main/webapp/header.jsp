<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page language="java" import="java.util.*"%>
<%@page import="util.*"%>
<%@page import="net.jntoo.db.*"%>
<%@ taglib prefix="ssm" uri="http://ssm" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>




<!--Start Hedaer Section-->


    

<section id="header">
        <div class="header-area">
            <div class="top_header">

                <div class="container"><!-- 使用bootstrap css框架，container定宽，并剧中 https://v3.bootcss.com/css/#overview-container -->


                    <div class="row">
    
                        <div class="col-xs-4 col-sm-4 col-lg-4 zero_mp hidden-xs">
    
                            <div class="address">
                                <p>欢迎进入校招网站</p>
                            </div>
                        
</div>

                        <!--End of col-md-4-->
                        <div class="col-xs-12 col-md-8 text-right">
    
                            <c:choose>
<c:when test="${sessionScope.username != null && '' !=  sessionScope.username }">

                            欢迎${sessionScope.username}登录，
                            您得权限：${sessionScope.cx}
                            <a class="btn btn-primary btn-xs" href="main.do"> 个人中心</a>
                            <a class="btn btn-default btn-xs" href="logout.do" onclick="return confirm('你确定退出？')"> 退出</a>
                            </c:when><c:otherwise>
                            <button type="button" class="btn btn-default btn-xs" toggle="modal" data-toggle="modal" data-target="#loginModel">
    登录
</button>

                            
                            </c:otherwise></c:choose>
                        
</div>
                        <!--End of col-md-4-->
                    
</div>
                    <!--End of row-->
                
<!-- container定宽，并剧中结束 --></div>
                <!--End of container-->
            </div>
            <!--End of top header-->
            <div class="header_menu text-center">

                <div class="container"><!-- 使用bootstrap css框架，container定宽，并剧中 https://v3.bootcss.com/css/#overview-container -->

                    <nav class="ls-navbar ls-navbar-default zero_mp clearfix">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="ls-navbar-header">
                            <a class="ls-navbar-brand custom_navbar-brand" href="#">校招网站</a>
                        </div>
                        <!--End of navbar-header-->

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="ls-collapse ls-navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
                            <ul class="ls-nav ls-navbar-nav ls-navbar-right main_menu" id="navbar-str">
                                <li>
<a href="./">首页
</a>
</li>
<li>
<a href="zhaopinxinxilist.do">招聘信息
</a>
</li>
<li>
<a href="gaoxiaoxinxilist.do">高校信息
</a>
</li>
<li>
<a href="diaochawenjuanlist.do">调查问卷
</a>
</li>
<li>
<a href="xinwenxinxilist.do">新闻信息
</a>
</li>
<li>
<a href="yongrendanweiadd.do">用人单位注册
</a>
</li>
<li>
<a href="xueshengadd.do">学生注册
</a>
</li>
<li>
<a href="login.do">后台登录
</a>
</li>                            </ul>
                        </div>
                        <!-- /.navbar-collapse -->
                    </nav>
                    <!--End of nav-->
                
<!-- container定宽，并剧中结束 --></div>
                <!--End of container-->
            </div>
            <!--End of header menu-->
        </div>
        <!--end of header area-->

        <!-- Modal -->
        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="0" id="loginModel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title" id="0">登录</h4>
            </div>
            <div class="modal-body">
                <div class="pa10">
                    
            <form action="authLogin.do?ac=login&a=a" method="post"><!-- form 标签开始 -->
    
                <div class="form-group">
    
    
                    <input type="text" class="form-control" name="username" placeholder="输入帐号"/>
                
</div>
                <div class="form-group">
    
    
                    <input type="password" class="form-control" name="pwd" placeholder="密码"/>
                
</div>
                <div class="form-group">
    
    
                    <select class="form-control" name="cx">

                        <option value="学生">学生</option>                    
</select>
                
</div>
                <div class="form-group">
    
    
                    <div class="input-group">
    
                        <input type="text" class="form-control" name="pagerandom" placeholder="输入验证码"/>
                        
                    
    <span class="input-group-addon"><img src="captcha.do" style="width: 60px;height: 20px;max-width: none; max-height: none;" onclick="this.src='captcha.do?rand='+new Date().getTime()"/></span>
</div>
                
</div>
                <div class="form-group">
    <div class="row">
        <label style="text-align: right" class="col-sm-2 hiddex-xs"> </label>
        <div class="col-sm-10">
            
                    <button type="submit" class="btn btn-primary">
    登录
</button>
                
        </div>
        
    </div>
</div>
            
<!--form标签结束--></form>
        
                </div>
            </div>
        </div>
    </div>
</div>
        <script>
            $(function () {
                $('#bs-example-navbar-collapse-1 .ls-nav>li').hover(function () {
                    $(this).find('.nav-sub').stop().slideDown();
                },function () {
                    $(this).find('.nav-sub').stop().slideUp();
                })
            });
            (function () {
                var path =location.pathname.substr(1);
                var search = location.search;
                if(search!=''){
                    path += decodeURIComponent(search);
                }
                if(path == '')
                {
                    $('#navbar-str li:eq(0)').addClass('active');
                }else{
                    $('#navbar-str>li').each(function () {
                        var href = $(this).find('>a').attr('href');
                        if(href == path)
                        {
                            $(this).addClass('active');
                        }
                        if($(this).find('.nav-sub').length>0)
                        {
                            var that = this;
                            $(this).find('a').each(function () {
                                var href = $(this).attr('href');
                                if(href == path)
                                {
                                    $(this).addClass('active');
                                    $(that).addClass('active');
                                }
                            })
                        }
                    })
                }

            })();
        </script>


    </section>



