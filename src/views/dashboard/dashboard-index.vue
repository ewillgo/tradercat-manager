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
            Util.ajax.get('/api/user/login').then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        methods: {}
    };
</script>
