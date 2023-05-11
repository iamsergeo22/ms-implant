<template>
  <div>
    <div class="markdown-body">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-card-text>
            <!-- Blog Post Content -->
            <img :src=post.feature_image class="tw-w-full tw-rounded-lg tw-shadow-lg tw-mb-3">
            
           
           
              <h1 class="tw-text-3xl tw-font-extrabold tw-text-blue-600">{{ post.title }}</h1>
            <p class="tw-text-gray-600">{{ post.date }}</p>
              <div class="tw-text-justify" v-html="post.html"/>
            
              <a href="/blog" class="tw-font-extrabold text-color tw-pt-4 tw-text-xl">Retour aux actualités</a>

            </v-card-text>
          </v-col>
          
        </v-row>
      </v-container>

    </div>
  </div>
</template>

<script>
  import { getSinglePost } from '../api/posts';

  export default {
    async asyncData ({ params }) {
      const post = await getSinglePost(params.slug);
      return { post: post }
    }
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
