import { format, parseISO } from 'date-fns';
import fs from 'fs';
import matter from 'gray-matter';
import { parse, join } from 'path';

/**
 * Get all markdown posts
 * @returns {Array} Array of posts with metadata
 */
export const getPosts = () => {
  const posts = fs.readdirSync('src/lib/posts');
  
  return posts
    .filter(post => post.endsWith('.md') && post !== 'README.md')
    .map(post => {
      const { data } = matter(fs.readFileSync(`src/lib/posts/${post}`, 'utf-8'));
      const { name } = parse(post);
      
      // Format the date safely
      let formattedDate = '';
      try {
        if (data.date) {
          const dateObj = typeof data.date === 'string' ? parseISO(data.date) : data.date;
          formattedDate = format(dateObj, 'MMMM dd, yyyy');
        }
      } catch (e) {
        console.error(`Error formatting date for ${name}:`, e);
        formattedDate = 'Unknown date';
      }
      
      return {
        slug: name,
        ...data,
        formattedDate
      };
    })
    .sort((a, b) => {
      // Sort safely
      try {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      } catch (e) {
        return 0;
      }
    });
};

/**
 * Get a single post by slug
 * @param {string} slug - Post slug
 * @returns {Object} Post with content and metadata
 */
export const getPostBySlug = (slug) => {
  try {
    const { data, content } = matter(fs.readFileSync(`src/lib/posts/${slug}.md`, 'utf-8'));
    
    // Format the date safely
    let formattedDate = '';
    try {
      if (data.date) {
        const dateObj = typeof data.date === 'string' ? parseISO(data.date) : data.date;
        formattedDate = format(dateObj, 'MMMM dd, yyyy');
      }
    } catch (e) {
      console.error(`Error formatting date for ${slug}:`, e);
      formattedDate = 'Unknown date';
    }
    
    return {
      content,
      meta: {
        slug,
        ...data,
        formattedDate
      }
    };
  } catch (e) {
    console.error(`Error loading post ${slug}:`, e);
    throw e;
  }
}; 