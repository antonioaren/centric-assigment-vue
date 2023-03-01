<template>
    <div class="detail-container">
        <div>
            <div v-if="details">
                <h2>Detail</h2>
                Name: {{ details?.name }} <br />
                height {{ details?.height }}
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
