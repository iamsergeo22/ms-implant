import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://ms-implant.ghost.io',
  key: '4447e7e7040c516d0b48a3ff63',
  version: "v5.0"
});

export async function getPosts(limit) {
  return await api.posts
    .browse({
      limit: limit ?? "all",
      order: 'published_at DESC'

    })
    .catch(err => {
      console.error(err);
    });
}


export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    });
}

