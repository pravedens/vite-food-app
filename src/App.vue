<
<template>
  <div>
    <!--Navbar-->
    <Navbar @search="handleSearch" />
    <!--end Navbar-->
    
    <!-- Content Section -->
    <RouterView />
    <!-- End Content-->

    <!-- Footer Section -->
    <Footer />
    <!--End Footer-->
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Category from "./components/Category.vue";
import Footer from "./components/Footer.vue";
import ListFoods from "./pages/ListFoods.vue";
import { RouterView } from "vue-router";

import { provide, ref } from 'vue';

const emitData = ref('');

const handleSearch = (data) => {
  emitData.value = data;
}

provide('navbarSearch', emitData);
</script>
