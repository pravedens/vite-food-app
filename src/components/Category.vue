<template>
  <div>
    <div class="py-6 bg-white sm:py-8 lg:py-12">
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div class="overflow-x-auto">
          <div class="flex gap-8 space-x-4">
            <a
              href="#"
              class="flex-shrink-0 block w-24 overflow-hidden rounded-lg group"
              v-for="(item, index) in categories"
              :key="index"
            >
              <img
                :src="item.icon"
                class="object-cover w-full h-24 rounded-lg sm:h-24"
              />
              <div class="mt-2 text-center">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ item.name }}
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const categories = ref([]);

onMounted(() => {
  axios
    .get('v1/categories')
    .then((resp) => categories.value = resp.data.data.data)
    .catch((err) => console.log(err));
})
</script>
