<template>
    <div class="parent-container">
        <div class="holi"></div>
        <Master @selected="selected" @click="click" />
        <Details :details="details" :clicks="clicks"/>
    </div>
</template>

<script>
import Master from './components/Master.vue'
import Details from './components/Details.vue'

export default {
    name: 'App',
    components: {
        Master,
        Details,
    },
    data() {
        return {
            details: null,
            clicks: 0,
        }
    },
    methods: {
        selected(pokemon) {
            this.details = pokemon
        },
        click(clicks) {
            console.log(clicks)
            this.clicks = clicks
        },
    },
}
</script>

<style lang="scss">
.parent-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    position: fixed;
}
</style>
