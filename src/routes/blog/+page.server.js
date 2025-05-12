import { getPosts } from '$lib/utils/blog';

export const load = async () => {
  const posts = getPosts();
  
  return {
    posts
  };
}; 