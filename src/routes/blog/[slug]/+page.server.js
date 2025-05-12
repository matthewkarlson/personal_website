import { getPostBySlug } from '$lib/utils/blog';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
  try {
    const { slug } = params;
    const post = getPostBySlug(slug);
    
    return {
      post
    };
  } catch (e) {
    throw error(404, `Could not find post: ${params.slug}`);
  }
}; 