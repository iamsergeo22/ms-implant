<template>
  <div class="font-sans tw-flex tw-flex-col tw-opacit-90">
    <header>
    <nav class="tw-shadow-lg tw-mx-auto tw-flex tw-flex-wrap tw-gap-4 tw-px-8 tw-lg:justify-evenly tw-justify-between tw-items-center tw-py-6">
      <div>
        <nuxt-link v-if="theme === 'theme-light'" to="/">
          <h1 class="tw-text-2xl tw-font-extrabold tw-text-blue-600">
            ms-implant.
          </h1>
        </nuxt-link>
        <nuxt-link v-else to="/">
          <h1 class="tw-text-2xl tw-font-extrabold  tw-text-blue-600">
            ms-implant. </h1>
        </nuxt-link>
      </div>
      <div class="tw-block lg:tw-hidden">
        <button @click="toggleMenu"
          class="tw-flex tw-items-center tw-px-3 tw-py-2 border tw-rounded tw-border-gray-500 hover:tw-border-gray-600">
          <svg class="tw-current-color tw-h-3 tw-w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
        </button>
      </div>
      <ul class="tw-tracking-wide tw-font-medium tw-w-full tw-block tw-flex-grow lg:tw-space-x-8 tw-space-y-6 lg:tw-space-y-0 lg:tw-flex lg:tw-flex-initial lg:tw-w-auto tw-items-center tw-mt-8 lg:tw-mt-0" :class="{ 'tw-block': isOpen, 'tw-hidden': !isOpen }">
        <li class="tw-mb-6 lg:tw-mb-0">
          <!-- <search-input /> -->
        </li>

        <li @click="closeMenu">
          <nuxt-link to="/" class="tw-text-black tw-font-medium  hover:tw-text-blue-300 tw-text-xl">Home</nuxt-link>
        </li>
        <li @click="closeMenu">
          <nuxt-link to="/product" class="tw-text-black tw-font-medium  hover:tw-text-blue-300 tw-text-xl">Products</nuxt-link>
        </li>
        <li @click="closeMenu">
          <nuxt-link to="/about" class="tw-text-black tw-font-medium  hover:tw-text-blue-300 tw-text-xl">About Us</nuxt-link>
        </li>
        <li @click="closeMenu">
          <nuxt-link to="/blog" class="tw-text-black tw-font-medium  hover:tw-text-blue-300 tw-text-xl">News</nuxt-link>
        </li>

        <li @click="closeMenu">
          <nuxt-link to="/contact" class="tw-text-black tw-font-medium  hover:tw-text-blue-300 tw-text-xl">Contact Us</nuxt-link>
        </li>

      </ul>
    </nav>
  </header>

    <div class="tw-flex-grow">
      <Nuxt />
    </div>


    <footer class="tw-text-white tw-bg-blue-600 tw-p-8">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="3">
          <h3 class="tw-text-white tw-font-extrabold tw-mb-4">About Us</h3>
          <p class="tw-text-white tw-text-md tw-justify-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            nunc at ipsum fringilla congue non non nunc. 
          </p>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <h3 class="tw-text-white tw-font-extrabold tw-mb-4">Contact Us</h3>
          <p class="tw-text-white tw-leading-6">
            123 Main Street<br />
            Anytown, USA 12345<br />
            <a href="mailto:info@example.com" class="tw-text-white"
              >info@example.com</a
            ><br />
            <a href="tel:123-456-7890" class="tw-text-white"
              >(123) 456-7890</a
            >
          </p>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <h3 class="tw-text-white tw-font-extrabold tw-mb-4">Links</h3>
          <ul class="tw-list-disc tw-list-inside tw-text-gray-400 tw-leading-6">
            <li>
              <a href="/" class="tw-text-white">Home</a>
            </li>
            <li>
              <a href="/product" class="tw-text-white">Products</a>
            </li>
            <li>
              <a href="/about" class="tw-text-white">About Us</a>
            </li>
            <li>
              <a href="/contact" class="tw-text-white">Contact Us</a>
            </li>
            
          </ul>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <h3 class="tw-text-white tw-font-extrabold tw-mb-4">Connect with Us</h3>
          <div class="tw-mb-4">
            <ul class="tw-flex tw-items-center tw-gap-4">
          <li>
            <a href="mailto:s.tassiga@alustudent.com" class="tw-text-white">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" width="20" height="20"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V600c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg>
            </a>
          </li>

          <li>
            <a href="https://twitter.com/STassiga" target="_blank" class="tw-text-white">
              <svg width="20" height="17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.807 1.943a8.588 8.588 0 0 1-2.036 2.135 11.918 11.918 0 0 1-.465 3.854 12.085 12.085 0 0 1-1.452 3.177 12.426 12.426 0 0 1-2.318 2.691c-.897.78-1.978 1.402-3.243 1.867-1.265.464-2.618.697-4.06.697-2.27 0-4.348-.618-6.233-1.854.293.034.62.051.98.051 1.885 0 3.565-.588 5.04-1.764a3.915 3.915 0 0 1-2.363-.825 4.038 4.038 0 0 1-1.432-2.039c.276.043.532.064.766.064.36 0 .717-.047 1.068-.14A3.982 3.982 0 0 1 1.73 8.43c-.617-.754-.925-1.63-.925-2.627v-.051c.57.324 1.182.498 1.835.524a4.1 4.1 0 0 1-1.32-1.47 4.078 4.078 0 0 1-.49-1.969c0-.75.185-1.445.553-2.084a11.548 11.548 0 0 0 3.702 3.05 11.163 11.163 0 0 0 4.669 1.271c-.067-.324-.1-.639-.1-.946 0-1.142.395-2.116 1.187-2.92C11.632.402 12.589 0 13.712 0c1.173 0 2.161.435 2.966 1.304a7.878 7.878 0 0 0 2.576-.997 3.997 3.997 0 0 1-1.785 2.275 7.98 7.98 0 0 0 2.338-.639z"
                  fill-rule="nonzero" /></svg>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/__iamsergeo/" target="_blank"
              class="tw-text-white">
              <svg width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.002 4.872A5.12 5.12 0 0 0 4.876 10a5.12 5.12 0 0 0 5.126 5.128A5.12 5.12 0 0 0 15.13 10a5.12 5.12 0 0 0-5.127-5.128zm0 8.462A3.34 3.34 0 0 1 6.67 10a3.337 3.337 0 0 1 3.333-3.334A3.337 3.337 0 0 1 13.335 10a3.34 3.34 0 0 1-3.333 3.334zm6.532-8.671c0 .664-.535 1.196-1.195 1.196a1.196 1.196 0 1 1 1.196-1.196zm3.396 1.213c-.076-1.602-.442-3.02-1.615-4.19C17.145.516 15.727.15 14.125.07c-1.65-.093-6.6-.093-8.25 0-1.597.076-3.016.442-4.19 1.611C.512 2.851.151 4.27.07 5.871c-.093 1.652-.093 6.601 0 8.253.076 1.602.442 3.02 1.615 4.19 1.174 1.17 2.588 1.535 4.19 1.616 1.65.093 6.6.093 8.25 0 1.602-.076 3.02-.442 4.19-1.616 1.169-1.17 1.534-2.588 1.615-4.19.093-1.652.093-6.596 0-8.248zm-2.133 10.02a3.375 3.375 0 0 1-1.9 1.9c-1.317.523-4.44.402-5.895.402-1.454 0-4.582.116-5.894-.402a3.375 3.375 0 0 1-1.9-1.9c-.523-1.317-.402-4.441-.402-5.896s-.116-4.583.401-5.895a3.375 3.375 0 0 1 1.901-1.901c1.316-.523 4.44-.402 5.894-.402 1.455 0 4.582-.116 5.894.402a3.375 3.375 0 0 1 1.901 1.9c.522 1.317.402 4.441.402 5.896s.12 4.583-.402 5.895z"
                  fill-rule="nonzero" /></svg>
            </a>
          </li>

          <li>
            <a href="#" class="tw-text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" id="mainIconPathAttribute" fill="#ffffff" filter="url(#shadow)"></path> <filter id="shadow"><feDropShadow id="shadowValue" stdDeviation=".5" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg>
            </a>
          </li>

          
        </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="tw-my-4"></v-divider>
    <div class="tw-text-center tw-text-white">
      <p>&copy; 2023 Ms Implant. All rights reserved. Designed by <strong>Serge Tassiga</strong></p>
    </div>
  </footer>
   
    <div style="display:none">
      <svg id="dots-triangle" width="170" height="170" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M168.152 170a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 0a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.479 0a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zM94.24 133.043a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 36.956a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm-18.478 55.434a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.479 73.913a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm-18.478 92.391a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0 18.479a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zM1.848 133.044a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.695zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0 18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-55.435a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.479a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.695 1.848 1.848 0 0 1 0 3.695zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696zm0-18.478a1.848 1.848 0 1 1 0-3.696 1.848 1.848 0 0 1 0 3.696z"
          fill="#2C8056" fill-rule="evenodd" opacity=".503" /></svg>
    </div>
  </div>
</template>

<script>
  export default {

    mounted() {

      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
      (function () {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6452435931ebfa0fe7fbba8f/1gvgle6b6';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();


    },
    data() {
    return {
      isOpen: false,
      theme: 'theme-light'
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }

  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins&display=swap');

  

  .font-sans {
    font-family: 'Josefin Sans', sans-serif;
    font-family: 'Poppins', sans-serif;
  }

</style>
