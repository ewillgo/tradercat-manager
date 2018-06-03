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
                    <a class="link" href="/">登录</a>
                </div>
                <form action="" autocomplete="off" @submit.prevent="register">
                    <a @click="changeCaptcha" title="换一张"><img :src="captchaUrl" class="register-captcha"></a>
                    <input :autofocus="username" v-model="username" name="username" class="input-box" type="text" value="" placeholder="电子邮箱">
                    <input v-model="nickname" name="nickname" class="input-box" type="text" value="" placeholder="昵称">
                    <input v-model="password" name="password" class="input-box" type="password" value="" placeholder="输入密码">
                    <input v-model="passwordConfirm" name="password-confirm" class="input-box" type="password" value="" placeholder="再次输入密码">
                    <input v-model="captcha" name="captcha" class="input-box" type="text" placeholder="验证码">
                    <button class="action-btn register" type="submit">注册账号</button>
                </form>
            </div>
            <div class="footer">
                Copyright &copy; 2017-<span v-model="currentYear">{{currentYear}}</span> <a href="/">TraderCat</a>.
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
                captchaUrl: Constant.USER.REGISTER_CAPTCHA_URL,
                username: "",
                password: "",
                passwordConfirm: "",
                nickname: "",
                captcha: "",
                currentYear: new Date().getFullYear()
            }
        },
        methods: {

            changeCaptcha() {
                this.captchaUrl = Constant.USER.REGISTER_CAPTCHA_URL + "?t=" + new Date().getTime();
                this.captcha = "";
            },

            register() {
                let self = this;

                if (self.password === "" || self.passwordConfirm === "") {
                    Util.log.info(Constant.USER.PASSWORD_NOT_BLANK);
                    self.changeCaptcha();
                    return;
                }

                else if (self.password.length < Constant.USER.PASSWORD_LENGTH) {
                    Util.log.info(Constant.USER.PASSWORD_LENGTH_ERROR);
                    self.changeCaptcha();
                    return;
                }

                else if (self.password !== self.passwordConfirm) {
                    Util.log.info(Constant.USER.PASSWORD_CONFIRM_ERROR);
                    self.changeCaptcha();
                    return;
                }

                Util.loading(Constant.USER.REGISTER_LOADING);

                Util.ajax.post(Constant.USER.REGISTER_URL, {
                    username: self.username,
                    password: Util.md5(self.password),
                    nickname: self.nickname,
                    captcha: self.captcha
                }).then(function (response) {

                    Util.closeLoading();

                    if (response.data && response.data.status !== 0) {
                        Util.log.info(response.data.message);
                        self.changeCaptcha();
                        return;
                    }

                    location.href = "/dashboard?accessToken=" + response.data.data.accessTokenString;

                }).catch(function (error) {
                    Util.closeLoading();
                    Util.log.info(Constant.USER.LOGIN_TIMEOUT);
                    self.changeCaptcha();
                });

            }
        }
    };
</script>
