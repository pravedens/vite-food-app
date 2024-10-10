<template>
    <div>
        <Category />

        <ListFoods :dataFood="foods" />
    </div>
</template>

<script setup>
import Category from '../components/Category.vue';
import ListFoods from './ListFoods.vue';

import { onMounted, ref } from "vue";
import axios from "axios";

const foods = ref([]);

onMounted(() => {
  axios
    .get('v1/foods')
    .then((resp) => foods.value = resp.data.data.data)
    .catch((err) => console.log(err));
})

</script>