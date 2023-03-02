<template>
    <main class="detail-container">
        <div>
            <div v-if="details">
                <h2>Pokemon Details</h2>
                <div class="clicks">Clicks: {{ clicks }}</div>
                <div class="name">Name: {{ details?.name }}</div>
                <div class="height">height {{ details?.height }}</div>
                <div class="image">
                    <img
                        :src="details?.sprites?.front_default"
                        alt="pokemon image"
                    />
                </div>
            </div>
            <div v-else>
                <div class="intro">
                    <h1 class="intro-title">
                        Welcome to the pokedex of PokeAPI
                    </h1>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "details-view",
    props: {
        msg: String,
        url: String,
        details: Object,
        clicks: Number,
    },
};
</script>

<style lang="scss">
.detail-container {
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;

    .intro {
        /* Center title in the middle */
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url('../assets/pokemon.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
        .intro-title {
            font-size: 52px;
            font-weight: 600;
            /* Bounce Effect */
            animation: bounce 1s infinite;
            padding: 30px;
            box-sizing: border-box;
            /* background black with alpha */
            background: rgba(0, 0, 0, 0.5);
            color: white;
        }
    }
}
</style>
