<script setup lang="ts">
    import '~/assets/css/index.css'
    const data = await useFetch('/api')
    </script>
<template>
        <h1 class="x">{{ data.data.value?.serverName }} server status:<p class="beta_pill">ALPHA</p></h1>
</template>
<style scoped>
body {
    background-color: rgb(0, 0, 0);
}
.beta_pill {
    position: absolute;
    background-color: rgb(0, 98, 209);
    color: white;
    width: fit-content;
    width: 60px;
    text-align: center;
    border-radius: 10px;
    size: 50%;
    font-size: 50%;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    transform: translate(250px,-50px);
}
h1 {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: white;
}
</style>