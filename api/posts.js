import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://lekipising-tech.ghost.io',
  key: 'b48652c81a1590fe0980a32d2c',
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

