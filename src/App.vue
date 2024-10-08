<
<template>
  <div>
    <!--Navbar-->
    <Navbar />
    <!--end Navbar-->

    <!-- Menu Section -->
    <Category />
    <!-- End Menu Section-->

    <!-- Content Section -->
    <ListFoods />
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
</script>
