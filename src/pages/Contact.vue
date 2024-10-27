<template>
    <div>
        <h1>Contact Page</h1>
        <button class="p-2 bg-green-400" @click="authStore.changeUser('Admin')">Change</button>
        {{ authStore.user.name }}
    </div>
</template>

<script setup>
import { userAuthStore } from "../stores/authStore";

const authStore = userAuthStore();
</script>