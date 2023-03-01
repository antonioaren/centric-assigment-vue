<template>
    <div class="parent-container">
        <Master @selected="selectedValue"/>
        <Details :details="details"/>
    </div>
</template>

<script>
import Master from './components/Master.vue'
import Details from './components/Details.vue'
import axios from 'axios'

export default {
    name: 'App',
    components: {
        Master,
        Details,
    },
    data() {
        return {
            details: null,
        }
    },
    methods: {
      async selectedValue(urlDetail) {
        this.details = (await axios.get(urlDetail)).data
      }
    },
}
</script>

<style>
.parent-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    position: fixed;

}
</style>
