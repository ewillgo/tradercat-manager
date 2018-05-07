<style scoped>

</style>
<template>
    <div class="dashboard">

    </div>
</template>
<script>
    import Util from '../../libs/util';

    export default {
        mounted() {
            console.log("=");
            Util.ajax.post('/user/login', {
                username: "abc",
                password: "asdf"
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        methods: {}
    };
</script>
