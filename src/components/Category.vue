<template>
  <div>
    <div class="py-6 bg-white sm:py-8 lg:py-12">
      <div class="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div class="overflow-x-auto">
          <div class="flex gap-8 space-x-4">
            <a :class="{'bg-slate-300' : isActive == index }"
              @click="filter(item.id, index)"
              href="#"
              class="flex-shrink-0 block w-24 overflow-hidden rounded-lg group hover:bg-slate-300"
              v-for="(item, index) in categories"
              :key="index"
            >
              <img
                :src="item.icon"
                class="object-cover w-full h-24 rounded-lg sm:h-24"
              />
              <div class="flex justify-center mt-2 text-center">
                <h3 class="text-lg font-medium text-gray-900">
                  {{ item.name }}
                </h3>
                <svg v-if="isActive == index"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="ml-3 text-green-600 size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import axios from "axios";

const emit = defineEmits(['filterFood']);

const categories = ref([]);

const isActive = ref(null);

onMounted(() => {
  axios
    .get("v1/categories")
    .then((resp) => (categories.value = resp.data.data.data))
    .catch((err) => console.log(err));
});

const filter = (id, index) => {
  isActive.value = index;
  emit('filterFood', id);
}

</script>
