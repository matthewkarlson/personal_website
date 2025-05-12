# Blog Post Instructions

## Creating a New Blog Post

1. Create a new Markdown file in this directory with the filename that will be used as the URL slug (e.g., `my-new-post.md`).

2. Include the following frontmatter at the top of your Markdown file:

```markdown
---
title: Your Post Title Here
description: A brief description of your post that will appear in the preview cards
date: YYYY-MM-DDT12:00:00Z
tags: [tag1, tag2, tag3]
coverImage: /images/blog/your-image-filename.jpg (optional)
---
```

**Note on dates:** Use ISO 8601 format (YYYY-MM-DDThh:mm:ssZ) for dates to ensure proper sorting and display.

3. Add your content below the frontmatter using standard Markdown syntax.

4. If using a cover image, place it in the `/static/images/blog/` directory.

## Markdown Features

The blog supports:

- Headers (# h1, ## h2, etc.)
- **Bold** and *italic* text
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Links
- Images
- Blockquotes
- And more!

## Code Example

````markdown
```javascript
// This is a code block with syntax highlighting
function hello() {
  return "Hello, world!";
}
```
````

## Publishing

Once you've created your Markdown file with the proper frontmatter and content, it will automatically appear in the blog listing page when the site is built.

## Working with Images

For optimal display:
- Cover images should ideally have a 16:9 aspect ratio
- Place all blog-related images in `/static/images/blog/`
- Reference images in your markdown with: `![Alt text](/images/blog/image-name.jpg)` 