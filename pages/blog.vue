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
          <v-img :src="post.feature_image" height="500px" class="tw-rounded-t-md"></v-img>
          <v-card-title class="tw-mt-3 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ post.title }}</v-card-title>
          <v-card-text class="tw-mb-3">{{ post.date }}</v-card-text>
          <v-card-text class="tw-mb-3">{{ post.excerpt }}</v-card-text>
          <v-card-actions>
            <nuxt-link :to="{ path: post.slug }">Read More</nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="tw-text-lg tw-font-extrabold tw-text-blue-600 tw-text-center">Categories</v-card-title>
          <v-card-text>
            <v-list class="tw-py-0">
              <v-list-item-group v-model="selectedCategory">
                <v-list-item v-for="(category, index) in categories" :key="index" :value="category">
                  <v-list-item-title>{{ category }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>

        <v-card class="tw-mt-4">
          <v-card-text>
            <p class="tw-font-extrabold tw-text-blue-600 tw-mt-4 tw-text-lg">Recent Posts</p>
            <v-list>
              <v-list-item v-for="(recentPost, index) in recentPosts" :key="index" :to="`/blog/${recentPost.slug}`">
                <v-list-item-content>
                  <v-list-item-title>{{ recentPost.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ recentPost.date }}</v-list-item-subtitle>
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
      return { posts: posts }
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
