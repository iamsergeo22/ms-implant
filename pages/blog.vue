<template>
  <div class="">

    <div class="tw-relative tw-w-full tw-h-72">
      <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
        src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740"
        alt="Banner Image">
      <div
        class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
        <h1 class="tw-text-4xl tw-font-bold tw-text-white">Actualités</h1>
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-space-x-2 tw-px-8">
    <v-breadcrumbs
      :items="breadcrumbItems"
      divider="/"
      class="tw-text-lg tw-font-extrabold"
    ></v-breadcrumbs>
  </div>


  <div class="tw-bg-gray-300 tw-pt-4">

    <v-row class="tw-p-6 tw-pt-3 tw-bg-gray-300">
      <v-col cols="12" md="8" class="">
        <v-card v-for="(post, index) in posts" :key="index" class="tw-mb-6" data-aos="zoom-in-down"
              data-aos-easing="linear" data-aos-duration="2000">
          <v-img :src="post.feature_image" height="400px" class="tw-rounded-lg tw-shadow-2xl"></v-img>
          <p class="tw-mt-4 tw-px-3 tw-text-2xl tw-font-extrabold tw-text-blue-600">{{ post.title }}</p>
          <v-list-item-subtitle class="tw-mt-2 tw-px-4 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ new Date(post.created_at).toLocaleDateString('fr-FR', {year: 'numeric', month: 'short', day: 'numeric'}) }}</v-list-item-subtitle>
          <v-card-text class="tw-mb-2 tw-text-justify">{{ post.excerpt }}</v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ path: post.slug }"
              class="tw-group tw-relative xl:tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12 tw-mt-4 tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
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
        

        </v-card>
      </v-col>
      <v-col cols="12" md="4">
      
        <v-card class="">
          <p class="tw-font-extrabold tw-text-blue-600 tw-mt-4 tw-text-2xl tw-px-8">Articles récents</p>

          <v-card-text>
            <v-list>
              <v-list-item v-for="(recentPost, index) in recentPosts" :key="index" data-aos="zoom-in-up"
              data-aos-easing="linear" data-aos-duration="2000">
                <v-list-item-content>
                  <nuxt-link :to="{ path: recentPost.slug }">
                    <v-img :src="recentPost.feature_image" height="150px" class="tw-rounded-lg tw-shadow-2xl tw-w-1/2 tw-bg-center"></v-img>
                  <v-list-item-title class="tw-mt-3 tw-text-2xl tw-font-extrabold tw-text-blue-600">{{ recentPost.title }}</v-list-item-title>
                  <v-list-item-subtitle class="tw-mt-3 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ new Date(recentPost.created_at).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}</v-list-item-subtitle>
                  </nuxt-link>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card class="tw-mt-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
          <v-img class="tw-rounded-lg tw-shadow-2xl" 
            src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
            width="550px" height="800px"></v-img>

        </v-card>

        <v-card class="tw-mt-4"
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
          <v-img class="tw-rounded-lg tw-shadow-2xl"
            src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
            width="550px" height="800px"></v-img>

        </v-card>
      </v-col>
    </v-row>
</div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getPosts } from '../api/posts';
  export default {
    async asyncData () {
      const posts = await getPosts();
      console.log(posts)
      const recentPosts = posts.slice(0, 3)
      return { posts: posts, recentPosts: recentPosts }
    },
    
    head() {
    return {
      title: 'Actualités Page',
      
    }},

    mounted() {
      if (!this.initialized) {
        AOS.init({
          once: true,
          duration: 2000
        });
        this.initialized = true;
      }
    },

    computed: {
    breadcrumbItems() {
      const items = [
        {
          text: 'Accueil',
          href: '/',
        },
        {
          text: 'Actualités',
          
        },
        
      ];

      return items.map((item) => ({
        ...item,
        disabled: !item.href,
      }));
    },
  },
  }

</script>
