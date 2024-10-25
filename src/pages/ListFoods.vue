<template>
  <div>
    <div class="py-6 bg-gray-100 sm:py-8 lg:py-12">
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <!-- Card 1 -->
          <div
            class="overflow-hidden bg-white rounded-lg shadow-lg"
            v-for="(food, index) in dataFood"
            :key="index"
          >
            <img
              :src="food.image"
              alt="Menu"
              class="object-cover w-full h-32 sm:h-48"
            />
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900">{{ food.name }}</h3>
              <!--<p class="mt-2 text-gray-600" v-html="food.description"></p>-->
              <div class="mt-2 text-lg font-semibold text-gray-900">
                {{ formatMoney(food.price) }}
              </div>
              <div class="flex items-center justify-between mt-4">
                <button
                  class="p-2 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    />
                  </svg>
                </button>
                <button @click="showModal(food)"
                  class="p-2 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 7H7v6h6V7z" />
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM2 5a4 4 0 014-4h8a4 4 0 014 4v10a4 4 0 01-4 4H6a4 4 0 01-4-4V5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Modal-->
    <div v-if="isVisible" class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="mb-10 close-button" @click="close">&times;</button>
        <div class="mx-4">
          <h4 class="text-lg font-bold">{{ dataModal.name }}</h4>
          <span v-html="dataModal.description"></span>
        </div>
      </div>
    </div>
    <!--End Modal-->
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  dataFood: Object,
});

const isVisible = ref(false);
const dataModal = ref('');

const showModal = (food) => {
  isVisible.value = true;
  dataModal.value = food;
}

const close = () => {
  isVisible.value = false;
}

const formatMoney = (money) => {
  return new Intl.NumberFormat('ru', {
    style: "currency",
    currency: "RUB"
  }).format(money);
}

</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 100%;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
