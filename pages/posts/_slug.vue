<template>

  
  <div>
    <div class="markdown-body">
      <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <!-- Blog Post Content -->
          <img :src=postInMarkdown.image :alt="postInMarkdown.title" class="w-full rounded-lg shadow-lg mb-3">
          <h1 class="tw-text-3xl tw-font-bold">{{ postInMarkdown.title }}</h1>
          <p class="tw-text-gray-600">{{ postInMarkdown.date }}</p>
          <div class="tw-mt-8">
            {{ dateFormatted }}
          </div>
          <nuxt-content :document="postInMarkdown" />
        </v-col>
        <v-col cols="12" md="4">
          <!-- Blog Post Slug -->
          <v-card class="tw-mt-4">
            <v-card-title class="tw-bg-blue-600 tw-text-white tw-py-4 tw-text-center">{{ post.slug }}</v-card-title>
            <v-card-text>
              <p class="tw-text-gray-600 tw-font-bold tw-mt-4">Recent Posts</p>
              <v-list>
                <v-list-item
                  v-for="(recentPost, index) in recentPosts"
                  :key="index"
                  :to="`/blog/${recentPost.slug}`"
                >
                  <v-list-item-content>
                    <v-list-item-title>{{ recentPost.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ recentPost.date }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      <a href="/blog" class="font-bold text-color">Retour aux actualités</a>

    </div>
  </div>
</template>

<script>
import '~/assets/css/github-markdown.css'
import { format } from 'date-fns'

export default {
  async asyncData ({ $content, params, $axios }) {
    const postInMarkdown = await $content(params.slug)
      .fetch()
      .catch((err) => {
        console.error(err)
      })

    return {
      postInMarkdown,
      post: {
          title: 'Example Blog Post',
          date: 'May 5, 2023',
          content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Nunc aliquet, felis vitae pretium vestibulum, velit velit laoreet turpis, eu semper tortor orci in elit. Sed non justo libero. Morbi id orci lacus.</p>',
          slug: this.$route.params.slug
        },
        recentPosts: [
          { title: 'Recent Post 1', date: 'May 1, 2023', slug: 'recent-post-1' },
          { title: 'Recent Post 2', date: 'May 2, 2023', slug: 'recent-post-2' },
          { title: 'Recent Post 3', date: 'May 3, 2023', slug: 'recent-post-3' },
          { title: 'Recent Post 4', date: 'May 4, 2023', slug: 'recent-post-4' }
        ]
      
    }
  },
  computed: {
    dateFormatted () {
      return format(new Date(this.postInMarkdown.date), 'MMMM d, Y')
    }
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
