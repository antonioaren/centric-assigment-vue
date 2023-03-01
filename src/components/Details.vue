<template>
    <div class="detail-container">
        <div>
            <div v-if="details">
                <h2>Pokemon Details</h2>
                <div class="clicks">
                    Clicks: {{ details?.clicks }}
                </div>
                <div class="name">
                    Name: {{ details?.name }}
                </div>
                <div class="height">
                    height {{ details?.height }}
                </div>
                <div class="image">
                    <img :src="details?.sprites?.front_default" alt="pokemon image">
                </div>
            </div>
            <div v-else>
                Nothin choose yet
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'details-view',
    props: {
        msg: String,
        url: String,
        details: Object,
    },
}
</script>

<style lang="css">
.detail-container {
    width: 100%;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
