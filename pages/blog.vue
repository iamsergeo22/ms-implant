<template>
    <div class="tw-bg-gray-200">
     
        <div class="tw-relative tw-w-full tw-h-72">
    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover" src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740" alt="Banner Image">
    <div class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
      <h1 class="tw-text-4xl tw-font-bold tw-text-white">News</h1>
    </div>
</div>

<h1
            class="tw-mt-12 tw-text-xl tw-text-center lg:tw-text-2xl tw-font-bold tw-uppercase md:tw-ml-8 md:tw-ml-20 md:tw-mb-20 tw-font-extrabold tw-text-blue-600">
            News
          </h1>

      <v-row class="tw-p-6 tw-pt-3">
        <v-col cols="12" md="8" class="">
          <v-card v-for="(post, index) in posts" :key="index" class="tw-mb-6">
            <v-img :src="post.image" height="500px" class="tw-rounded-t-md"></v-img>
            <v-card-title class="tw-mt-3 tw-text-lg tw-font-extrabold tw-text-blue-600">{{ post.title }}</v-card-title>
            <v-card-text class="tw-mb-3">{{ post.excerpt }}</v-card-text>
            <v-card-actions>
              <v-btn text :to="{ name: 'blog-slug', params: { slug: post.slug } }">Read More</v-btn>
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

          <v-card class="tw-mt-4">
            <v-img class="tw-rounded-lg tw-shadow-2xl"
            src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
            width="550px" height="800px"></v-img>
  
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        posts: [
          {
            title: "Introduction to Ms Implant",
            slug: "post-title-1",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "https://img.freepik.com/free-photo/african-american-woman-doctor-showing-blank-smartphone-screen-against-blue-background_93675-132959.jpg?w=740&t=st=1683277346~exp=1683277946~hmac=e5a93d4cc6c6d260bd7110536ea4109a635497d24aa7fecc166d8c898dce662b"
          },
          {
            title: "Introduction to Ms Implant",
            slug: "post-title-2",
            excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: "https://img.freepik.com/free-photo/african-american-woman-doctor-showing-blank-smartphone-screen-against-blue-background_93675-132959.jpg?w=740&t=st=1683277346~exp=1683277946~hmac=e5a93d4cc6c6d260bd7110536ea4109a635497d24aa7fecc166d8c898dce662b"
          },
          {
            title: "Introduction to Ms Implant",
            slug: "post-title-3",
            excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: "https://img.freepik.com/free-photo/african-american-woman-doctor-showing-blank-smartphone-screen-against-blue-background_93675-132959.jpg?w=740&t=st=1683277346~exp=1683277946~hmac=e5a93d4cc6c6d260bd7110536ea4109a635497d24aa7fecc166d8c898dce662b"
          },
          {
            title: "Introduction to Ms Implant",
            slug: "post-title-4",
            excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: "https://img.freepik.com/free-photo/african-american-woman-doctor-showing-blank-smartphone-screen-against-blue-background_93675-132959.jpg?w=740&t=st=1683277346~exp=1683277946~hmac=e5a93d4cc6c6d260bd7110536ea4109a635497d24aa7fecc166d8c898dce662b"
          }
        ],
        categories: ["Category 1", "Category 2", "Category 3"],
        recentPosts: [
          { title: 'Recent Post 1', date: 'May 1, 2023', slug: 'recent-post-1' },
          { title: 'Recent Post 2', date: 'May 2, 2023', slug: 'recent-post-2' },
          { title: 'Recent Post 3', date: 'May 3, 2023', slug: 'recent-post-3' },
          { title: 'Recent Post 4', date: 'May 4, 2023', slug: 'recent-post-4' }
        ],
        selectedCategory: null
      }
    }
  }
  </script>
  