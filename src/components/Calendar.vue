<script setup lang="ts">  
    import { ref } from 'vue';
    import addDays from 'date-fns/addDays';

    const date = ref(new Date());

    const markers = ref([
  {
    date: addDays(new Date(), 1),
    type: 'dot',
    tooltip: [{ text: 'Dot with tooltip', color: 'green' }],
  },
  {
    date: addDays(new Date(), 2),
    type: 'line',
    tooltip: [
      { text: 'First tooltip', color: 'blue' },
      { text: 'Second tooltip', color: 'yellow' },
    ],
  },
  {
    date: addDays(new Date(), 3),
    type: 'dot',
    color: 'yellow',
  },
])
</script>

<template>
    <VueDatePicker 
    v-model="date" 
    inline auto-apply 
    locale="ja" 
    :markers="markers"
    calendar-class-name="calendar"
    menu-class-name="menu"
    calendar-cell-class-name="cell"
    dark
    >
    
    </VueDatePicker>
</template>

<style>
.calendar {
  width: 900px;
  height: 300px;
}

.menu {
    box-shadow: 0 0 6px #1976d2;
}

.cell{
    border-radius: 50%;
}
</style>
