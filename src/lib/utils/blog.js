import { format, parseISO } from 'date-fns';
import matter from 'gray-matter';
import { parse } from 'path';

// Vite bundles these at build time — no runtime fs access needed
const postFiles = import.meta.glob('../posts/*.md', { as: 'raw', eager: true });

const parsePost = (raw, filename) => {
  const { data, content } = matter(raw);
  const { name } = parse(filename);

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

  return { slug: name, ...data, formattedDate, content };
};

/**
 * Get all markdown posts
 * @returns {Array} Array of posts with metadata
 */
export const getPosts = () => {
  return Object.entries(postFiles)
    .filter(([path]) => !path.endsWith('README.md'))
    .map(([path, raw]) => {
      const { content: _content, ...meta } = parsePost(raw, path);
      return meta;
    })
    .sort((a, b) => {
      try {
        return new Date(b.date) - new Date(a.date);
      } catch {
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
  const entry = Object.entries(postFiles).find(([path]) => {
    const { name } = parse(path);
    return name === slug;
  });

  if (!entry) throw new Error(`Post not found: ${slug}`);

  const [path, raw] = entry;
  const { content, ...meta } = parsePost(raw, path);
  return { content, meta };
};
