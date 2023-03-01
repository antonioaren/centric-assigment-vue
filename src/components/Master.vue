<template>
    <div class="master-container">
        <h1>Pokemones</h1>
        <div v-for="(pokemon) in pokemons" :key="pokemon.name">
            <div class="item">
                <div @click="sendClick(pokemon.id)" class="image">
                    <img :src="pokemon.sprites.front_default" alt="pokemon image">
                </div>
                <div @click="getSelected(pokemon)" class="name">
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
            dataClicked: {}
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
        getSelected(pokemon) {
            this.$emit('selected', pokemon)
            if (!this.dataClicked[pokemon.id]) {
                this.dataClicked[pokemon.id] = 0
            }
            this.$emit('click', this.dataClicked[pokemon.id])
        },
        setClick(id) {
            this.dataClicked[id] ? this.dataClicked[id] += 1 : this.dataClicked[id] = 1
        },
        sendClick(id) {
            this.setClick(id)
            this.$emit('click', this.dataClicked[id])
        }
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
