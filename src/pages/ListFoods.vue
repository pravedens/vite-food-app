<template>
    <div>
        <div class="py-6 bg-gray-100 sm:py-8 lg:py-12">
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <!-- Card 1 -->
          <div class="overflow-hidden bg-white rounded-lg shadow-lg" v-for="(food, index) in dataFood" :key="index">
            <img :src="food.image" alt="Menu" class="object-cover w-full h-32 sm:h-48">
            <div class="p-4">
              <h3 class="text-lg font-medium text-gray-900">{{ food.name }}</h3>
              <!--<p class="mt-2 text-gray-600" v-html="food.description"></p>-->
              <div class="mt-2 text-lg font-semibold text-gray-900">{{ food.price }}</div>
              <div class="flex items-center justify-between mt-4">
                <button class="p-2 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
                  </svg>
                </button>
                <button class="p-2 text-gray-900 bg-gray-200 rounded-full hover:bg-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 7H7v6h6V7z" />
                    <path fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM2 5a4 4 0 014-4h8a4 4 0 014 4v10a4 4 0 01-4 4H6a4 4 0 01-4-4V5z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
defineProps({
  dataFood: Array
});
</script>