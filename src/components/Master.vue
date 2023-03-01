<template>
    <div class="master-container">
        <h1>Master</h1>
        <div v-for="pokemon in pokemons" :key="pokemon.name">
            <div @click="getSelected(pokemon.url)" class="item">
                {{ pokemon.name }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'master-view',
    data() {
        return {
            pokemons: [],
        }
    },
    async mounted() {
        this.pokemons = (
            await axios.get('https://pokeapi.co/api/v2/pokemon')
        ).data.results
    },
    methods: {
        getSelected(url) {
            this.$emit('selected', url)
        },
    },
}
</script>

<style lang="css">
.master-container {
    max-width: 300px;
    width: 100%;
    background-color: #f0f0f0;
    border: 1px solid black;
    overflow: auto;
}

.item {
    padding: 10px;
    border-bottom: 1px solid black;
    cursor: pointer;
}
</style>
