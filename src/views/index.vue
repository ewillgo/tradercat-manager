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
                    <a @click="changeCaptcha" title="换一张"><img :src="captchaUrl" class="login-captcha"></a>
                    <input :autofocus="username" v-model="username" name="username" class="input-box" type="text" placeholder="电子邮箱">
                    <input v-model="password" name="password" class="input-box" type="password" placeholder="密码">
                    <input v-model="captcha" name="captcha" class="input-box" type="text" placeholder="验证码">
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
    import Constant from '../libs/constant';

    Vue.use(VueParticles);

    export default {
        data() {
            return {
                captchaUrl: Constant.USER.LOGIN_CAPTCHA_URL,
                username: "",
                password: "",
                captcha: "",
                rememberUsername: false
            }
        },
        methods: {
            changeCaptcha() {
                this.captchaUrl = Constant.USER.LOGIN_CAPTCHA_URL + "?t=" + new Date().getTime()
            },
            login() {
                let self = this;

                Util.loading(Constant.USER.LOGIN_LOADING);

                Util.ajax.post("/user/login", {
                    username: self.username,
                    password: Util.md5(self.password),
                    captcha: self.captcha
                }).then(function (response) {
                    console.log(response.data);
                    
                    if (response.data.status !== 0) {
                        Util.closeLoading();
                        Util.log.info(response.data.message);
                        self.changeCaptcha();
                        return;
                    }

                    console.log(response.data);

                }).catch(function (error) {
                    Util.closeLoading();
                    Util.log.info(Constant.USER.LOGIN_TIMEOUT);
                });
            }
        }
    };
</script>
