<style scoped>
    @import '../static/style/index.less';
</style>
<template>
    <div class="login">
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
        <div class="login-box">
            <div class="header">
                <div class="header-title">
                    <h1 class="title">TraderCat</h1><span class="subtitle">您身边的贸易专家</span>
                    <a class="register" href="register">注册账号</a>
                </div>
                <form action="" autocomplete="off">
                    <input name="account" class="input-box" type="text" value="" placeholder="手机号/注册邮箱">
                    <input name="password" class="input-box" type="password" value="" placeholder="密码">
                    <input name="captcha" class="input-box" type="text" value="" placeholder="验证码">
                    <div class="options">
                        <Checkbox v-model="single" style="float: left;">&nbsp;记住账号</Checkbox>
                        <a href="/reset" style="float: right;" target="_blank">忘记密码？</a>
                    </div>
                    <button class="login-btn" type="button">登录</button>
                </form>
                <div class="third-party">
                    <div class="bar-wrapper">
                        <div class="or-bar"><span class="bar-title">或者其它账号登录</span></div>
                    </div>
                    <ul class="buttons">
                        <li style="float: left;"><button class="wechat login-btn" type="button">微信登录</button></li>
                        <li style="float: right;"><button class="weibo login-btn" type="button">微博登录</button></li>
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

    Vue.use(VueParticles);

    export default {
        methods: {}
    };
</script>
