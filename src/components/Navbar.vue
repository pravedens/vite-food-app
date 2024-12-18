<template>
  <div>
    <nav class="bg-blue-400 shadow">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              @click="toggleMobileMenu"
              id="mobile-menu-button"
              ref="mobileMenuButton"
              type="button"
              class="inline-flex items-center justify-center p-2 text-gray-600 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 mt-1">
              <a href="#" class="text-xl font-bold">Brand</a>
            </div>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <RouterLink
                  to="/"
                  exactActiveClass="bg-gray-200"
                  class="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
                  >Home</RouterLink
                >
                <RouterLink
                  to="Contact"
                  exactActiveClass="bg-gray-200"
                  class="px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
                  >Contact</RouterLink
                >
                <div>
                  <input
                    v-model="search"
                    type="text"
                    class="p-1 mt-1 bg-blue-300 border-2 border-gray-300 rounded-lg placeholder-slate-600"
                    placeholder="Search Menu"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <div class="relative dropdown">
              <div v-if="authStore.isLoggin">
                <div class="flex gap-2">
                  <button
                    @click="toggleDropdown"
                    type="button"
                    class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    ref="userMenuButton"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt=""
                    />
                  </button>
                  <div class="mt-1">
                    {{ authStore.user.name }}
                  </div>
                </div>
                <!-- Dropdown menu -->
                <div
                  v-show="userDropdown"
                  @click.stop
                  class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dropdown-content"
                  role="menu"
                  aria-orientation="vertical"
                  ref="dropdownContent"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                <div
                @click="handleLogout"
                class="block px-4 py-2 text-sm text-gray-700 pointer-events-auto hover:bg-gray-300"
                role="menuitem"
              >
                Logout
              </div>
              </div>

              </div>
              <div v-else>
                <RouterLink to="login">
                  <div class="flex gap-2">
                    <button
                      type="button"
                      class="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu-button"
                      ref="userMenuButton"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="w-8 h-8 rounded-full"
                        src="https://via.placeholder.com/150"
                        alt=""
                      />
                    </button>
                    <div class="mt-1">Sign in</div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div v-show="isMobileMenuVisible" ref="mobileMenu" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <RouterLink
            to="/"
            class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-200"
            >Home</RouterLink
          >
          <RouterLink
            to="/contact"
            class="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-200"
            >Contact</RouterLink
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { watch, ref, defineEmits, onUnmounted, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { userAuthStore } from "../stores/authStore";
import { useRouter } from "vue-router";
import axios from "axios";

const authStore = userAuthStore();

const search = ref("");

const router = useRouter();

const userDropdown = ref(false);

const isMobileMenuVisible = ref(false);

const emit = defineEmits(["search"]);

watch(search, (value) => {
  if (value.length >= 3) emit("search", value);
  if (value.length < 1) emit("search", value);
});

const toggleMobileMenu = (event) => {
  event.stopPropagation();
  isMobileMenuVisible.value = !isMobileMenuVisible.value;
};

const toggleDropdown = (event) => {
  event.stopPropagation();
  userDropdown.value = !userDropdown.value;
};

const handleClickDropdown = () => {
  if (userDropdown.value) userDropdown.value = false;
  if (isMobileMenuVisible.value) isMobileMenuVisible.value = false;
};

onMounted(() => {
  authStore.getUser();
  document.addEventListener("click", handleClickDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickDropdown);
});

const handleLogout = () => {
  axios
    .post("v1/logout", null)
    .then((resp) => {
      authStore.clearToken();
      router.push("/");
    })
    .catch((err) => console.log(err));
};
</script>
