<template>
    <div>
        <Category @filterFood="isFilter" />

        <ListFoods :dataFood="foods" />
    </div>
</template>

<script setup>
import Category from '../components/Category.vue';
import ListFoods from './ListFoods.vue';

import { onMounted, ref, inject, watch } from "vue";
import axios from "axios";

const foods = ref([]);

onMounted( async () => {
  await axios
    .get('v1/foods')
    .then((resp) => foods.value = resp.data.data.data)
    .catch((err) => console.log(err));
});

const isFilter = async (id) => {
    await axios
    .get('v1/foods?category='+id)
    .then((resp) => foods.value = resp.data.data.data)
    .catch((err) => console.log(err));
}

const navbarData = inject('navbarSearch');

watch(navbarData, async (value) => {
    await axios
    .get('v1/foods?search='+value)
    .then((resp) => foods.value = resp.data.data.data)
    .catch((err) => console.log(err));
})

</script>