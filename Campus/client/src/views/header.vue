<template>
    <section id="header">
        <div class="header-area">
            <div class="top_header">

                <e-container>
                    <el-row class="row">
                        <el-col :md="8" class="zero_mp hidden-xs">
                            欢迎进入{{ setting.title }}
                        </el-col>
                        <!--列值取8，文本右对齐-->
                        <el-col :md="8" class="text-right">
                          <!--渲染条件为session中的用户名-->
                            <template v-if="$session.username">
                                欢迎{{ $session.username }}登录，
                                您的权限：{{ $session.cx }}
                                <el-button @click="$goto('/admin/sy')" type="primary" size="mini"> 个人中心</el-button>
                                <el-button type="default" size="xs" @click="logout"> 退出</el-button>
                            </template>
                        </el-col>

                    </el-row>
                    <!--End of row-->
                </e-container>
                <!--End of container-->
            </div>
            <!--End of top header-->
            <div class="header_menu text-center">

                <e-container>
                  <!--导航栏组件设置成默认主题-->
                    <nav class="ls-navbar ls-navbar-default zero_mp clearfix">
                        <!--负责包裹brand和折叠按钮-->
                        <div class="ls-navbar-header">
                          <!--网页名称，链接到当前页面-->
                            <a class="ls-navbar-brand custom_navbar-brand" href="#">{{ setting.title }}</a>
                        </div>
                        <!--End of navbar-header-->

                        <!--折叠和未折叠时窗口的样式设置 -->
                        <div class="ls-collapse ls-navbar-collapse zero_mp" id="bs-example-navbar-collapse-1">
                          <!---->
                            <ul class="ls-nav ls-navbar-nav ls-navbar-right main_menu" id="navbar-str">
                                <li :class="{active:$route.path == '/'}">
                                    <router-link to="/">首页
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/zhaopinxinxi'}">
                                    <router-link to="/zhaopinxinxi">招聘信息
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/gaoxiaoxinxi'}">
                                    <router-link to="/gaoxiaoxinxi">高校信息
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/diaochawenjuan'}">
                                    <router-link to="/diaochawenjuan">调查问卷
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/xinwenxinxi'}">
                                    <router-link to="/xinwenxinxi">新闻信息
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/yongrendanweiadd'}">
                                    <router-link to="/yongrendanweiadd">用人单位注册
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/xueshengadd'}">
                                    <router-link to="/xueshengadd">学生注册
                                    </router-link>
                                </li>
                                <li :class="{active:$route.path == '/login'}">
                                    <router-link to="/login">登录
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <!-- /.navbar-collapse -->
                    </nav>
                    <!--End of nav-->
                </e-container>
                <!--End of container-->
            </div>
            <!--End of header menu-->
        </div>
        <!--end of header area-->

        <!-- Modal -->
    </section>
</template>
<style type="text/scss" scoped lang="scss">
    .header-area {
        .zero_mp {
            padding: 0;
            margin: 0;
        }

        .text-right {
            text-align: right;
        }

        .text-center {
            text-align: center;
        }

        .top_header {
            min-height: 45px;
            line-height: 45px;
            background: #FBFBFB;
            border-bottom: 1px solid #F2F2F2;

            .address {
                border-right: 1px solid #E6E5E5;
            }

            .address p {
                font-size: 12px;
                padding-top: 2px;
                color: #646464;
                font-family: 'Open Sans', sans-serif;
            }

            .phone p {
                color: #646464;
                font-size: 12px;
                font-family: 'Open Sans', sans-serif;
                padding-top: 1px;
                display: inline-block;
            }

            .address i, .phone i {
                padding: 3px 5px;
                font-size: 15px;
            }

            .social_icon i {
                padding: 0 5px;
                color: #787878;
                font-size: 12px;
                font-weight: 700;
            }

            .social_icon i:hover {
                color: #43A906;
            }
        }


        .header_menu {
            min-height: 75px;
            box-shadow: 0 4px 5px 0 #888888;
            margin-bottom: 10px;
            background: #FFFFFF;

            .ls-navbar-default {
                background-color: rgba(255, 255, 255, 0);
                border-color: rgba(255, 255, 255, 0);

                .ls-navbar-header {
                    float: left;

                    .ls-navbar-brand {
                        float: left;
                        height: 50px;
                        padding: 15px 15px;
                        font-size: 18px;
                        line-height: 20px;
                    }
                }
            }

            .ls-navbar-collapse.ls-collapse {
                width: auto;
                border-top: 0;
                box-shadow: none;
                display: block !important;
                height: auto !important;
                padding-bottom: 0;
                overflow: visible !important;
                border-color: #e7e7e7;

                .ls-navbar-right {
                    float: right !important;
                    margin-right: -15px;
                }

                .ls-navbar-nav {
                    float: left;
                    margin: 0;
                }

                .ls-nav {
                    padding-left: 0;
                    margin-bottom: 0;
                    list-style: none;

                    > li {
                        float: left;
                        display: inline-block;
                        position: relative;

                        > a {
                            text-decoration: none !important;
                            padding: 10px 15px;
                            display: inline-block;
                            position: relative;
                            font-size: 15px;
                            text-transform: uppercase;
                            font-weight: 600;
                            padding-top: 15px;
                            padding-bottom: 15px;
                            line-height: 20px;

                            > .icon {
                                transition: transform .2s linear;
                            }
                        }

                        > a:hover {
                            color: #43A906;

                        }

                        .nav-sub {
                            visibility: hidden;
                            max-height: 0;
                            position: absolute;
                            top: 88%;
                            left: 0px;
                            width: 230%;
                            background: #43A906;
                            box-shadow: 0 0 5px #ffffff;
                            color: #ffffff;
                            text-align: left;
                            padding: 10px;
                            z-index: 100;
                            transition: max-height .3s linear;
                        }

                        .nav-sub a {
                            color: #FFFFFF;
                            display: block;
                            padding: 10px;
                            transition: color 100ms linear;
                        }

                        .nav-sub a:hover {
                            color: #ffffff;
                        }

                        .nav-sub a.active {
                            color: #ffffff;
                            border-bottom: 2px solid #ffffff;
                        }
                    }

                    > li:hover {
                        background: #43A906;

                        > a {
                            color: #ffffff;

                            > .icon {
                                transform: rotate(180deg);
                            }
                        }

                        > .nav-sub {
                            visibility: visible;
                            max-height: 1000px;
                        }
                    }

                    > li:after {
                        content: ' ';
                        display: block;
                        margin: auto;
                        height: 3px;
                        width: 0px;
                        background: transparent;
                        transition: width .5s ease, background-color .5s ease;
                        margin-top: 6px;
                    }

                    > li.active {
                        > a {
                            color: #43A906;
                        }
                    }

                    > li.active:hover {
                        > a {
                            color: #ffffff;
                        }
                    }

                    > li.active:after {
                        width: 90%;
                        background: #43A906;
                    }

                    > li:hover:after {
                        width: 100%;
                        background: #43A906;
                        z-index: 1000;
                        position: absolute;
                        left: 0px;
                        top: 33px;
                        height: 5px;
                    }

                }
            }
        }
    }

</style>
<script>
    import api from '@/api';
    import {extend} from '@/utils/extend';

    const setting = require('@/setting');

    export default {
        name: "v-header",
        data() {
            return {
                keyword: '',
                setting,
            }
        },
        watch: {},
        computed: {},
        methods: {
            searchKeyword() {
                var filter = {};
                filter[""] = this.keyword;
                this.$router.push({
                    path: '/',
                    query: filter
                });
            },
            logout() {
                this.$confirm('确定退出登录？', '确认信息').then(() => {
                    // 退出登录
                    this.$store.dispatch('user/logout');
                });
            },

            loadListMenu(module, target) {
                this.$post(api.search.all, {table: module, order: 'id desc'}).then(res => {
                    this[target] = res.data;
                });
            },

        },
        created() {
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>
