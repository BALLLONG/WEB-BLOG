<template>
    <div>
        <p><button v-on:click="logout">Logout</button> <button v-on:click="navigateTo('/tv/create')">เพิ่มข้อมูล</button> <button v-on:click="navigateTo('/users')">ข้อมูลUser</button></p>
        <h2>Get All TV Shows</h2>
        <h4>จำนวนรายการทีวี{{ tvs.length }}</h4>
        <div v-for="tv in tvs" v-bind:key="tv.id">
            <p>id: {{ tv.id }}</p>
            <p>แบรนด์: {{ tv.brand }}</p>
            <p>ซีรีย์: {{ tv.series }}</p>

            <p>
                <button v-on:click="navigateTo('/tv/' + tv.id)">ดูข้อมูล TV Show</button>
                <button v-on:click="navigateTo('/tv/edit/' + tv.id)">แก้ไขข้อมูล</button>
                <button v-on:click="deleteTVShow(tv)">ลบข้อมูล</button>
            </p>
        </div>
    </div>
</template>

<script>
import TvService from '@/services/TvService';

export default {
    data() {
        return {
            tvs: []
        }
    },
    async created() {
        this.tvs = (await TvService.index()).data;
    },
    methods: {
        logout() {
            this.$store.dispatch('setToken', null);
            this.$store.dispatch('setUser', null);
            this.$router.push({
                name: 'login'
            });
        },
        navigateTo(route) {
            this.$router.push(route);
        },
        async deleteTVShow(tv) {
            let result = confirm("ต้องการลบข้อมูลหรือไม่?");
            if (result) {
                try {
                    await TvService.delete(tv);
                    // ลบข้อมูล TV show แล้วทำการ refresh ข้อมูล
                    this.refreshData();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        async refreshData() {
            // รีเฟรชข้อมูล TV shows
            this.tvs = (await TvService.index()).data;
        }
    }
}
</script>

<style scoped></style>
