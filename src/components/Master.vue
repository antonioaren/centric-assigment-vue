<template>
    <div class="master-container">
        <h1>Pokemones</h1>
        <div v-for="pokemon in pokemons" :key="pokemon.name">
            <div @click="getSelected(pokemon)" class="item">
                <div class="image">
                    <img :src="pokemon.sprites.front_default" alt="pokemon image">
                </div>
                <div class="name">
                    {{ pokemon.name }}
                </div>
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
        const poke_data = (await axios.get('https://pokeapi.co/api/v2/pokemon'))
            .data.results

        const promiseArray = poke_data.map((pokemon) => pokemon.url)

        const pokemonData = await Promise.all(
            promiseArray.map((url) => axios.get(url))
        )

        this.pokemons = pokemonData.map((pokemon) => pokemon.data)
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
    padding: 0 30px 30px;
}

.item {
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
</style>
