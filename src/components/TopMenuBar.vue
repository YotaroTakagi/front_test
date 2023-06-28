<script setup lang="ts">
import DigitalClock from './DigitalClock.vue';
import { ref } from 'vue';

const menu_items = [
    {index: 1, name: 'Home', content: '/'}, 
    {index: 2, name: 'カレンダー', content: '/calendar'}, 
    {index: 3, name: 'test', content: '/hello'},
];

const tab = ref(null)

</script>

<template>
    <v-toolbar title="App" color="black">
        <v-tabs
        class="tab-items"
        grow
        v-model="tab"
        direction="horizontal"
        align-with-title
        background-color="black"
        color="cyan"
        slider-color="green"
        >

            <v-tab
            v-for="item in menu_items"
            :key="item.index"
            :value="item.name"
            :to="item.content"
            >
            {{ item.name }}
            </v-tab>
            
        </v-tabs>
        <DigitalClock />
    </v-toolbar>
</template>

<style scoped>

</style>
