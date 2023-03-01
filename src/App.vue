<template>
    <div class="parent-container">
        <Master @selected="selected"/>
        <Details :details="details"/>
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
        }
    },
    methods: {
      async selected(pokemon) {
        this.details = pokemon
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
