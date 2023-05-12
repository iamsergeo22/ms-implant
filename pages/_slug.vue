<template>
  <div>
    <div class="tw-relative tw-w-full tw-h-72">
      <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
        src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740"
        alt="Banner Image">
      <div
        class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-text-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
        <h1 class="lg:tw-text-4xl tw-text-xl tw-font-bold tw-text-white">{{ post.title }}</h1>
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-space-x-2 tw-px-8">
    <v-breadcrumbs
      :items="breadcrumbItems"
      divider="/"
      class="tw-text-lg tw-font-extrabold"
    ></v-breadcrumbs>
  </div>

  <div class="tw-bg-gray-300">
    <div class="markdown-body">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-card-text>
            <!-- Blog Post Content -->
            <img :src=post.feature_image class="tw-w-full tw-rounded-lg tw-shadow-2xl tw-mb-3">
            
           
           
              <h1 class="lg:tw-text-3xl tw-text-2xl tw-pt-4 tw-font-extrabold tw-text-blue-600">{{ post.title }}</h1>
            <v-list-item-subtitle class="tw-mt-2 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ new Date(post.created_at).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}</v-list-item-subtitle>

              <div class="tw-text-justify tw-mb-4" v-html="post.html"/>
            
              <nuxt-link to="/blog" class="tw-font-extrabold text-color tw-mt-6 tw-text-md">Retour aux actualités</nuxt-link>

            </v-card-text>
          </v-col>
          
        </v-row>
      </v-container>

    </div>
  </div>
  </div>
</template>

<script>
  import { getSinglePost } from '../api/posts';

  export default {
    async asyncData ({ params }) {
      const post = await getSinglePost(params.slug);
      return { post: post }
    },

    head() {
    return {
      title: 'Slug News Page',
      
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
          href: '/blog',
          
        },
        {
          text: 'Slug New',
          
          
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
<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

.text-color {
  color: #070A52;
  /* Remove focus outline */
}
</style>
