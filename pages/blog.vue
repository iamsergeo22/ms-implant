<template>
  <div class="">

    <div class="tw-relative tw-w-full tw-h-72">
      <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
        src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740"
        alt="Banner Image">
      <div
        class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
        <h1 class="tw-text-4xl tw-font-bold tw-text-white">News</h1>
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-space-x-2 tw-px-8">
    <v-breadcrumbs
      :items="breadcrumbItems"
      divider="/"
      class="tw-text-lg tw-font-extrabold"
    ></v-breadcrumbs>
  </div>


  <div class="tw-bg-gray-200 tw-pt-4">

    <h1
      class="tw-mt-4 tw-text-xl tw-text-center lg:tw-text-2xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 md:tw-mb-6 tw-font-extrabold tw-text-blue-600">
      News
    </h1>


    <v-row class="tw-p-6 tw-pt-3 tw-bg-gray-200">
      <v-col cols="12" md="8" class="">
        <v-card v-for="(post, index) in posts" :key="index" class="tw-mb-6">
          <v-img :src="post.feature_image" height="400px" class="tw-rounded-lg tw-shadow-2xl"></v-img>
          <p class="tw-mt-4 tw-px-3 tw-text-2xl tw-font-extrabold tw-text-blue-600">{{ post.title }}</p>
          <v-list-item-subtitle class="tw-mt-2 tw-px-4 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ new Date(post.created_at).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}</v-list-item-subtitle>
          <v-card-text class="tw-mb-2 tw-text-justify">{{ post.excerpt }}</v-card-text>
          <v-card-actions>
            <nuxt-link class="tw-bg-blue-900 tw-mx-2 tw-mb-2 hover:tw-bg-blue-800 tw-text-white tw-font-bold tw-px-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl" :to="{ path: post.slug }">Read More</nuxt-link>
          </v-card-actions>
        

        </v-card>
      </v-col>
      <v-col cols="12" md="4">
      
        <v-card class="">
          <p class="tw-font-extrabold tw-text-blue-600 tw-mt-4 tw-text-2xl tw-px-8">Recent Posts</p>

          <v-card-text>
            <v-list>
              <v-list-item v-for="(recentPost, index) in recentPosts" :key="index">
                <v-list-item-content>
                  <nuxt-link :to="{ path: recentPost.slug }">
                    <v-img :src="recentPost.feature_image" height="150px" class="tw-rounded-lg tw-shadow-2xl"></v-img>
                  <v-list-item-title class="tw-mt-3 tw-text-2xl tw-font-extrabold tw-text-blue-600">{{ recentPost.title }}</v-list-item-title>
                  <v-list-item-subtitle class="tw-mt-3 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ new Date(recentPost.created_at).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}</v-list-item-subtitle>
                  </nuxt-link>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card class="tw-mt-4">
          <v-img class="tw-rounded-lg tw-shadow-2xl"
            src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
            width="550px" height="800px"></v-img>

        </v-card>

        <v-card class="tw-mt-4">
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
      title: 'News Page',
      
    }},

    computed: {
    breadcrumbItems() {
      const items = [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'News',
          
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
