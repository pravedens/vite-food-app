import { defineStore } from 'pinia'
import { ref } from 'vue'

export const userAuthStore = defineStore('authStore', () => {
    const user = ref('Александр')
    const isLoggin = ref(false)

    function changeUser (name) {
        user.value = name;
    }
  
    return { user, isLoggin, changeUser }
  })