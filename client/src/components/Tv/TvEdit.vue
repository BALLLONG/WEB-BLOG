<template>
    <div>
        <h1>Edit TV Show</h1>
        <form v-on:submit.prevent="editTvShow">
            <p>แบรนด์: <input type="text" v-model="tv.brand"></p>
            <p>ซีรีย์: <input type="text" v-model="tv.series"></p>
            <p>น้ำหนัก(กก.): <input type="text" v-model="tv.weight"></p>
            <p>ความละเอียดหน้าจอ: <input type="text" v-model="tv.resolution"></p>
            <p>ชนิดหน้าจอ: <input type="text" v-model="tv.screentype"></p>
            <p>ขนาดหน้าจอ(นิ้ว): <input type="text" v-model="tv.screensize"></p>
            <p>ราคา(บาท): <input type="text" v-model="tv.price"></p>
            <p><button type="submit">Edit TV Show</button></p>
        </form>
        <hr>
        <div>
            <p>Brand: {{ tv.brand }}</p>
            <p>Series: {{ tv.series }}</p>
            <p>Weight: {{ tv.weight }}</p>
            <p>Resolution: {{ tv.resolution }}</p>
            <p>Screentype: {{ tv.screentype }}</p>
            <p>Screensize: {{ tv.screensize }}</p>
            <p>Price: {{ tv.price }}</p>
        </div>
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
        async editTvShow() {
            try {
                await TvService.put(this.tv);
                this.$router.push({
                    name: 'tvs' 
                });
            } catch (error) {
                console.error(error);
            }
        }
    },
    async created() {
        try {
            let tvId = this.$route.params.tvId;
            this.tv = (await TvService.show(tvId)).data;
        } catch (error) {
            console.error(error);
        }
    }
};
</script>

<style scoped>

</style>
