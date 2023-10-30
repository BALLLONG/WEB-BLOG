<template>
    <div>
        <h1>Create TV Show</h1>
        <form v-on:submit.prevent="tvCreate">
            <p>แบรนด์: <input type="text" v-model="tv.brand"></p>
            <p>ซีรีย์: <input type="text" v-model="tv.series"></p>
            <p>น้ำหนัก(กก.): <input type="text" v-model="tv.weight"></p>
            <p>ความละเอียดหน้าจอ: <input type="text" v-model="tv.resolution"></p>
            <p>ชนิดหน้าจอ: <input type="text" v-model="tv.screentype"></p>
            <p>ขนาดหน้าจอ(นิ้ว): <input type="text" v-model="tv.screensize"></p>
            <p>ราคา(บาท): <input type="text" v-model="tv.price"></p>
            <p><button type="submit">Create TV Show</button></p>
        </form>
    </div>
</template>

<script>
import TvService from '../../services/TvService';

export default {
    data() {
        return {
            tv: {
                brand: '',
                series: '',
                weight: '',
                resolution: '',
                screentype: '',
                screensize: '',
                price: '',
            }
        };
    },
    methods: {
        async tvCreate() {
            try {
                await TvService.post(this.tv);
                this.$router.push({
                    name: 'tvs' 
                });
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>

<style scoped>

</style>
