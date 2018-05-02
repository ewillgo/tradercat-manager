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
                <form action="" autocomplete="off">
                    <input name="account" class="input-box" type="text" value="" placeholder="账号">
                    <input name="password" class="input-box" type="password" value="" placeholder="密码">
                    <input name="nickname" class="input-box" type="text" value="" placeholder="昵称">
                    <button class="action-btn register" type="button">注册</button>
                </form>
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
