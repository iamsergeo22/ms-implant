<template>

  <div>

    <div class="">

      <v-carousel v-model="model" cycle :show-arrows="false" hide-delimiter-background>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" cover></v-carousel-item>
      </v-carousel>


    </div>

    <span
      class="lg:tw-w-1/2 tw-transform tw--translate-y-10 tw-bottom-0 tw-left-0 tw-block md:tw-left-20 -tw-bottom-10 tw-mb-4">
      <h1
        class="tw-mx-1 md:tw-mx-4 tw-bg-white md:tw-px-4 lg:tw-px-4 tw-shadow-md tw-shadow-gray-500 tw-font-extrabold lg:tw-font-bold tw-text-2xl tw-text-center tw-uppercase md:tw-text-center lg:tw-text-4xl tw-w-3/4 tw-text-blue-900 tw-p-4 tw-rounded"
        data-aos="fade-up">
        A Propos de Nous</h1>
    </span>


    <section
      class="tw-py-4 lg:tw-px-4 lg:tw-mb-24 tw-mb-12 lg:tw-mx-12 tw-mx-8 lg:tw-px-desktop lg:tw-mx-desktop tw-bg-[#fff] tw-rounded-2xl tw-justify-center">
      <div class="tw-flex tw-flex-col tw-flex-col-reverse lg:tw-flex-row lg:tw-gap-12">
        <div class="tw-flex tw-items-center tw-justify-evenly tw-basis-1/2">

          <v-img class="tw-rounded-lg tw-shadow-2xl"
            src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
            width="500px"></v-img>

        </div>
        <div class="tw-basis-1/2">
          <p class="tw-font-extrabold tw-mx-4 tw-text-blue-900 tw-text-xl tw-font-bold lg:tw-text-left tw-uppercase"
            data-aos="fade-up">
            A Propos de Nous</p>

          <v-card-text class="tw-text-justify tw-text-xl" data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit. Morbi quam faucibus nam lorem. Imperdiet a, nibh mauris nec nibh.
            Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis elementum fringilla ut adipiscing.
            Suscipit urna tristique ornare.

            Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis elementum fringilla ut adipiscing.
            elit. Morbi quam faucibus nam lorem. Imperdiet a, nibh mauris nec nibh.
            Interdum quisque morbi amet ut quam nunc facilisis velit.



          </v-card-text>
          <v-card-text class="tw-text-justify tw-text-xl" data-aos="fade-up">
            Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis elementum fringilla ut adipiscing.

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam faucibus nam lorem. Imperdiet a, nibh

          </v-card-text>


          <v-card-actions>
            <nuxt-link to="/about"
              class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
              <div
                class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
              </div>
              <span class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                Voir Plus
                <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                  </path>
                </svg>
              </span>
            </nuxt-link>
          </v-card-actions>

        </div>

      </div>
    </section>


    <section class="tw-bg-gray-300 lg:tw-p-12 lg:tw-pb-24 tw-px-8 tw-py-8">
      <span
        class="lg:tw-w-1/2 tw-justify-center tw-transform tw--translate-y-20 lg:tw-mx-78 tw-bottom-0 tw-left-0 tw-block md:tw-left-20">
        <h1
          class="tw-mx-1 md:tw-mx-4 tw-bg-blue-600 md:tw-px-4 lg:tw-px-4 tw-shadow-md tw-shadow-gray-500 tw-font-extrabold lg:tw-font-bold tw-text-2xl tw-text-center tw-uppercase md:tw-text-center lg:tw-text-4xl tw-w-3/4 tw-text-white tw-p-4 tw-rounded"
          data-aos="fade-up">
          Nos Produits</h1>
      </span>

    

      <v-row data-aos="fade-up">
  
        <v-col cols="12" md="3" lg="3">
          <div
            class="tw-bg-white tw-rounded-lg tw-shadow-2xl tw-cursor-pointer hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded-lg">
            <v-img  height="200px" cover class="tw-rounded-t-lg hover:tw-rounded-t-lg"
              src="https://images.pexels.com/photos/5427646/pexels-photo-5427646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              aspect-ratio="1"></v-img>
            <v-card-title class="tw-font-bold tw-text-lg">
              <h2 class="tw-text-blue-600 tw-text-2xl tw-font-extrabold">Tête</h2>
            </v-card-title>

            <v-card-text class="tw-text-sm">
              <p class="tw-text-justify">Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis
                elementum fringilla ut adipiscing.
              </p>
            </v-card-text>

            <v-card-actions>
              <nuxt-link to="/produits/product-tete"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>

          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <div
            class="tw-bg-white tw-shadow-2xl tw-rounded-lg tw-cursor-pointer hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded-lg">
            <v-img  height="200px" cover class="tw-rounded-t-lg hover:tw-rounded-t-lg"
              src="https://media.istockphoto.com/id/1188307002/photo/teeth-model-showing-an-implant-crown-bridge-model.jpg?b=1&s=170667a&w=0&k=20&c=2tpJ0TXgNZiXhty1qRs_ihoHOqyFaB3TAxHhBFyBD7I="
              aspect-ratio="1"></v-img>
            <v-card-title class="tw-font-bold tw-text-lg">
              <h2 class="tw-text-blue-600 tw-text-2xl tw-font-extrabold">Dents</h2>
            </v-card-title>

            <v-card-text class="tw-text-sm">
              <p class="tw-text-justify">Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis
                elementum fringilla ut adipiscing.
              </p>
            </v-card-text>
            <v-card-actions>
              <nuxt-link to="/produits/product-dent"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>


          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <div
            class="tw-bg-white tw-shadow-2xl tw-rounded-lg tw-cursor-pointer hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded-lg">
            <v-img  height="200px" cover class="tw-rounded-t-lg hover:tw-rounded-t-lg"
              src="https://img.freepik.com/free-photo/pain-toe-joint_1048-2602.jpg?w=740&t=st=1683152755~exp=1683153355~hmac=7ba7cc804a863701cf5bc02a17d2c87a8806359b4efe9dce57d3ab9333c59cf2"
              aspect-ratio="1"></v-img>
            <v-card-title class="tw-font-bold tw-text-lg">
              <h2 class="tw-text-blue-600 tw-text-2xl tw-font-extrabold">Mains</h2>
            </v-card-title>

            <v-card-text class="tw-text-sm">
              <p class="tw-text-justify">Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis
                elementum fringilla ut adipiscing.
              </p>
            </v-card-text>
            <v-card-actions>
              <nuxt-link to="/produits/product-main"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>



          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <div
            class="tw-bg-white tw-shadow-2xl tw-rounded-lg tw-cursor-pointer hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded-lg">
            <v-img  height="200px" cover class="tw-rounded-t-lg hover:tw-rounded-t-lg"
              src="https://img.freepik.com/premium-photo/close-up-hand-wear-medical-gloves-doctor-medical-gloves-holds-artificial-boneof-foot-examines-sore-leg-with-heel-spur-woman-close-up-osteophytes-heel-fascia_61243-784.jpg?w=740"
              aspect-ratio="1"></v-img>
            <v-card-title class="tw-font-bold tw-text-lg">
              <h2 class="tw-text-blue-600 tw-text-2xl tw-font-extrabold">Pied</h2>
            </v-card-title>

            <v-card-text class="tw-text-sm">
              <p class="tw-text-justify">Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis
                elementum fringilla ut adipiscing.
              </p>
            </v-card-text>
            <v-card-actions>
              <nuxt-link to="/produits/product-pied"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>


          </div>
        </v-col>
      </v-row>


    </section>


    <section class="tw-bg-gray-100 lg:tw-p-12  tw-p-12 tw-pb-12 tw-px-8">
      
      <span
        class="lg:tw-w-1/2 tw-justify-center tw-transform tw--translate-y-20 lg:tw-mx-78 tw-bottom-0 tw-left-0 tw-block md:tw-left-20">
        <h1
          class="tw-mx-1 md:tw-mx-4 tw-bg-blue-600 md:tw-px-4 lg:tw-px-4 tw-shadow-md tw-shadow-gray-500 tw-font-extrabold lg:tw-font-bold tw-text-2xl tw-text-center tw-uppercase md:tw-text-center lg:tw-text-4xl tw-w-3/4 tw-text-white tw-p-4 tw-rounded"
          data-aos="fade-up">
          Nos Partenaires</h1>
      </span>


      <paterns></paterns>


    </section>


    <section class=" tw-bg-gray-300 lg:tw-p-12 tw-p-8">

      <span
        class="lg:tw-w-1/2 tw-justify-center tw-mb-8 tw-transform tw--translate-y-20 lg:tw-mx-78 tw-bottom-0 tw-left-0 tw-block md:tw-left-20">
        <h1
          class="tw-mx-1 md:tw-mx-4 tw-bg-blue-600 md:tw-px-4 lg:tw-px-4 tw-shadow-md tw-shadow-gray-500 tw-font-extrabold lg:tw-font-bold tw-text-2xl tw-text-center tw-uppercase md:tw-text-center lg:tw-text-4xl tw-w-3/4 tw-text-white tw-p-4 tw-rounded"
          data-aos="fade-up">
          Galerie</h1>
      </span>

      <div class="lg:tw-block tw-hidden">
    <div class="">
      <v-carousel class="" v-model="model" cycle :show-arrows="false" continuous progress-color="blue" interval="2000">
        <v-carousel-item>
          
          <v-row>
            <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              aspect-ratio="1"></v-img>



              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>
          </v-row>
            
            
          </v-carousel-item>

          <v-carousel-item>
          
          <v-row>
            <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1621516799962-7dad52802428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>


              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>
          </v-row>
            
            
          </v-carousel-item>


          <v-carousel-item>
          
          <v-row>
            <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584650589355-e891970a9081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1598531136726-4157529f8cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>
          </v-row>
            
            
          </v-carousel-item>
          <v-carousel-item>
          
          <v-row>
            <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1590424753656-fc25220af381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              aspect-ratio="1"></v-img>

              <v-img
              class="hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>
          </v-row>
            
            
          </v-carousel-item>
      </v-carousel>
    </div>
  </div>



  <div class="tw-block lg:tw-hidden">
    <div class="">
      <v-carousel class="" v-model="model" cycle :show-arrows="false" hide-delimiter-background>
        <v-carousel-item>
          
          <v-row>
            <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584652292544-31a77c49abe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1606811842243-af7e16970c1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              aspect-ratio="1"></v-img>
          </v-row>
            
            
          </v-carousel-item>

          <v-carousel-item>
          
          <v-row>
            <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1621516799962-7dad52802428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

          </v-row>
            
            
          </v-carousel-item>

          <v-carousel-item>
          
          <v-row>
            <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1621516799962-7dad52802428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

          </v-row>
            
            
          </v-carousel-item>



          <v-carousel-item>
          
          <v-row>
            <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1584650589355-e891970a9081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1598531136726-4157529f8cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              aspect-ratio="1"></v-img>

          </v-row>
            
            
          </v-carousel-item>
          <v-carousel-item>
          
          <v-row>
            <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.unsplash.com/photo-1590424753656-fc25220af381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              aspect-ratio="1"></v-img>

              <v-img
              class="tw-w-full tw-h-full hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded"
              src="https://images.pexels.com/photos/2678059/pexels-photo-2678059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              aspect-ratio="1"></v-img>
          </v-row>
            
            
          </v-carousel-item>
      </v-carousel>
    </div>
  </div>

     
    </section>


    <section class="tw-bg-gray-200 lg:tw-p-12 tw-p-8">

      <span
        class="lg:tw-w-1/2 tw-justify-center tw-mb-8 tw-transform tw--translate-y-20 lg:tw-mx-78 tw-bottom-0 tw-left-0 tw-block md:tw-left-20">
        <h1
          class="tw-mx-1 md:tw-mx-4 tw-bg-blue-600 md:tw-px-4 lg:tw-px-4 tw-shadow-md tw-shadow-gray-500 tw-font-extrabold lg:tw-font-bold tw-text-2xl tw-text-center tw-uppercase md:tw-text-center lg:tw-text-4xl tw-w-3/4 tw-text-white tw-p-4 tw-rounded"
          data-aos="fade-up">
          Actualités</h1>
      </span>
      <v-row class="tw-transform tw--translate-y-10 tw-bottom-0 tw-left-0 tw-block md:tw-left-20"
        data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="2000">
        <v-col class="" md="4" lg="4" v-for="(post, index) in posts" :key="index" limit="2">

          <div
            class="hover:tw-shadow-blue-500 tw-rounded-lg hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded-lg">
            <div class="tw-bg-white">
              <v-img :src="post.feature_image" height="300px" class="tw-shadow-xl tw-rounded-t-lg tw-mb-4"></v-img>
              
              <p class=" tw-px-3 lg:tw-text-lg tw-text-md tw-font-extrabold tw-text-blue-600">{{ post.title }}</p>
             
              <v-list-item-subtitle class="tw-mt-2 tw-px-4 tw-text-lg tw-font-extrabold tw-text-blue-500">
                {{ new Date(post.created_at).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'}) }}
              </v-list-item-subtitle>

              <v-card-actions>
                <nuxt-link :to="{ path: post.slug }"
                  class="tw-group tw-relative tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                  <div
                    class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                  </div>
                  <span
                    class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                    Voir Plus
                    <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3">
                      </path>
                    </svg>
                  </span>
                </nuxt-link>
              </v-card-actions>

            </div>
          </div>
        </v-col>


      </v-row>

    </section>






  </div>


</template>

<script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import {
    getPosts
  } from '../api/posts';
import Paterns from '../components/Paterns.vue';


  export default {
  components: { Paterns },

    async asyncData() {

      const posts = await getPosts(3);
      console.log(posts)
      return {
        posts: posts
      }
    },

    head() {
      return {
        title: 'Welcome to Ms implant',
      }
    },

    data() {
      return {
        show: false,
        items: [{
            src: 'https://imagedash.ova-africa.com/_nuxt/img/Header2.ffb6709.png',
          },
          {
            src: 'https://imagedash.ova-africa.com/_nuxt/img/Header4.68f1a8a.png',
          },
          {
            src: 'https://imagedash.ova-africa.com/_nuxt/img/Header1.56db328.png',
          },
          {
            src: 'https://imagedash.ova-africa.com/_nuxt/img/Header3.e3c1fb0.png',
          },
          
        ],

      }
    },

    setup() {
      if (process.client) {
        new AOS.init({
          once: true,
        });
      }
    },


  }

</script>


<style scoped>
  .bg-color {
    background-color: #000000;
  }
  
  .bg-image {
    background-image: url(https://img.freepik.com/premium-photo/color-background-presentations-decorative-design-template-cover-insert-text-with-copy-space_7954-5751.jpg?w=900);
    background-size: cover;
  }

</style>
