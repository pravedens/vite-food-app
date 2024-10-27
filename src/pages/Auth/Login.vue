<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { userAuthStore } from '../../stores/authStore';
import { useRouter } from 'vue-router';

const authStore = userAuthStore();

const router = useRouter();

const form = ref({
    email: '',
    password: ''
});

const submit = () => {
    axios.post('v1/login', form.value)
    .then(resp => {
        authStore.saveToken(resp.data.data.access_token);
        authStore.user = resp.data.data.user;
        router.push('/');
    })
    .catch(err => console.log(err))
}
</script>

<template>
    <div class="mx-20 mt-10">
        <form @submit.prevent="submit" class="flex flex-col w-1/2 gap-4 p-4 border rounded-lg">
            <label for="">Email</label>
            <input type="email" class="p-4 border" v-model="form.email">
            <label for="Password">Password</label>
            <input type="password" class="p-4 border" v-model="form.password">
            <button type="submit" class="p-4 mt-2 bg-green-400">Login</button>
        </form>
    </div>
</template>