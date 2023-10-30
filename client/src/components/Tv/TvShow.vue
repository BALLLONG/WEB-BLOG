<template>
    <div>
        <div>
            <h1>Get TV Show By ID</h1>
            <p>TV ID: {{ tv.id }}</p>
            <p>แบรนด์: {{ tv.brand }}</p>
            <p>ซีรีย์: {{ tv.series }}</p>
            <p>น้ำหนัก(กก.): {{ tv.series }}</p>
            <p>ความละเอียดหน้าจอ: {{ tv.resolution }} </p>
            <p>ชนิดหน้าจอ: {{ tv.screentype }} </p>
            <p>ขนาดหน้าจอ(นิ้ว): {{ tv.screensize }} </p>
            <p>ราคา(บาท): {{ tv.price }} </p>
            <p><button v-on:click="navigateTo('/Tvs')">กลับ</button></p>
        </div>
    </div>
</template>

<script>
import TvService from '@/services/TvService';

export default {
    data () {
        return {
            tv: null
        }
    },
    async created () {
        try {
            let tvId = this.$route.params.tvId;
            this.tv = (await TvService.show(tvId)).data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        navigateTo (route) {
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>

</style>
