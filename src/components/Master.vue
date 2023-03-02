<template>
    <aside class="master-container">
        <h1>Pokemones</h1>
        <div v-for="pokemon in pokemons" :key="pokemon.name">
            <div class="item">
                <button @click="sendClick(pokemon)" class="image">
                    <img
                        :src="pokemon.sprites.front_default"
                        alt="pokemon image"
                    />
                </button>
                <div
                    :class="{ active: itemClicked === pokemon.id }"
                    @click="select(pokemon)"
                    class="name"
                >
                    {{ pokemon.name }}
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
import axios from "axios";

export default {
    name: "master-view",
    data() {
        return {
            pokemons: [],
            dataClicked: {},
            itemClicked: 0,
        };
    },
    async mounted() {
        // Get all pokemons from pokeapi and save it in pokemons variable.
        this.pokemons = await this.requestPokemons();
    },
    methods: {
        async requestPokemons() {
            /**
             * This function makes a request to pokeapi and returns all the pokemons.
             */

            // Get first pokemons from pokeapi.
            const poke_data = (
                await axios.get("https://pokeapi.co/api/v2/pokemon")
            ).data.results;
            // Map all the urls we got from the first request.
            const promiseArray = poke_data.map((pokemon) => pokemon.url);
            //Make a request for each url and save the data in pokemonData variable. Which more complete than the first request.
            //Then we do not need to make another request for each pokemon anymore.
            const pokemonData = await Promise.all(
                promiseArray.map((url) => axios.get(url))
            );
            // Return the data of each pokemon.
            return pokemonData.map((pokemon) => pokemon.data);
        },
        select(pokemon) {
            /**
             * This function emits the selected pokemon to the parent component
             * and also emits the number of times the pokemon has been clicked.
             */
            this.$emit("selected", pokemon);
            this.$emit("click", this.getClicked(pokemon.id));
            this.itemClicked = pokemon.id;
        },
        getClicked(id) {
            /**
             * This function returns the number of times a pokemon has been clicked.
             */

            //if the pokemon has not been clicked, it gives it a value of 0.
            if (!this.dataClicked[id]) {
                this.dataClicked[id] = 0;
            }
            return this.dataClicked[id];
        },
        setClick(id) {
            /**
             * This function saves the number of times a pokemon has been clicked.
             */
            this.dataClicked[id]
                ? (this.dataClicked[id] += 1)
                : (this.dataClicked[id] = 1);
        },
        sendClick(pokemon) {
            /**
             * This function trigger event click and emits the number of times a pokemon has been clicked.
             *  This function only applies when you click in the image of the pokemon.
             */

            // Select the pokemon
            this.select(pokemon);
            //Set the number of clicks.
            this.setClick(pokemon.id);
            //Emit the result to the parent component.
            this.$emit("click", this.dataClicked[pokemon.id]);
        },
    },
};
</script>

<style lang="scss">
.master-container {
    max-width: 300px;
    width: 100%;
    background-color: #f0f0f0;
    border: 1px solid black;
    overflow: auto;
    padding: 0 30px 30px;

    
    .item {
        padding: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: border 600ms ;
        &:hover {
            /* border animation expand */
            border: 1px solid black;
        }
        
        .image {
            border: 1px solid black;
            border-radius: 10px;

        }
        
        .name {
            padding: 10px;
            box-sizing: border-box;
        }
    }


    .active {
        /* border animation expand */
        border-bottom: 1px solid black;
    }
}
</style>
