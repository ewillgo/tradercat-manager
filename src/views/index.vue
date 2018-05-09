<style scoped>
    @import '../static/style/index.less';
</style>
<template>
    <div class="homepage">
        <vue-particles
                color="#dedede"
                :particleOpacity="0.7"
                :particlesNumber="80"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="false"
                clickMode="push">
        </vue-particles>
        <div class="homepage-center">
            <div class="box">
                <div class="logo-wrapper">
                    <h1 class="title">TraderCat</h1><span class="subtitle">您身边的贸易专家</span>
                    <a class="link" href="register">注册账号</a>
                </div>
                <form action="" autocomplete="off" @submit.prevent="login">
                    <a @click="changeCaptcha" title="换一张"><img :src="captchaUrl" class="captcha"></a>
                    <input name="username" class="input-box" type="text" v-model="username" placeholder="电子邮箱">
                    <input name="password" class="input-box" type="password" v-model="password" placeholder="密码">
                    <input name="captcha" class="input-box" type="text" v-model="captcha" placeholder="验证码">
                    <div class="options">
                        <Checkbox v-model="rememberUsername" style="float: left;">&nbsp;记住账号</Checkbox>
                        <a href="/reset" style="float: right;" target="_blank">忘记密码？</a>
                    </div>
                    <button class="action-btn login" type="submit">登录</button>
                </form>
                <div class="third-party">
                    <div class="bar-wrapper">
                        <div class="bar"><span class="title">或者其它账号登录</span></div>
                    </div>
                    <ul class="buttons">
                        <li style="float: left;"><button class="wechat action-btn" type="button">微信登录</button></li>
                        <li style="float: right;"><button class="weibo action-btn" type="button">微博登录</button></li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                Copyright &copy; 2017-2018 <a href="/">TraderCat</a>.
                <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备16097965号-1</a>
            </div>
        </div>
    </div>
</template>
<script>

    import Vue from 'vue';
    import VueParticles from 'vue-particles';
    import Util from '../libs/util';

    Vue.use(VueParticles);

    let CAPTCHA_URL = "http://manager.sportsdb.cc:9001/user/loginCaptcha";

    export default {
        data() {
            return {
                captchaUrl: CAPTCHA_URL,
                username: "",
                password: "",
                captcha: "",
                rememberUsername: false
            }
        },
        methods: {
            changeCaptcha() {
                console.log(this);
                Vue.set(this, "captchaUrl", CAPTCHA_URL + "?t=" + new Date().getTime());
                // this.captchaUrl = CAPTCHA_URL + "?t=" + new Date().getTime()
            },
            login(event) {
                let methods = this.$options.methods;
                Util.ajax.post("/user/login", {
                    username: this.username,
                    password: this.password,
                    captcha: this.captcha
                }).then(function (response) {
                    console.log(response.data);
                    methods.changeCaptcha();
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    };
</script>
