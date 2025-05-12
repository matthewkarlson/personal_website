<script>
  import { marked } from 'marked';
  
  export let data;
  const { post } = data;
  const { content, meta } = post;
  
  // Process the markdown content
  const renderedContent = marked.parse(content);
</script>

<main class="flex flex-col flex-1 p-4 max-w-4xl mx-auto">
  <article class="py-10 lg:py-16">
    <header class="mb-12 text-center frosted-glass p-8 rounded-xl shadow-lg">
      <p class="text-coinbaseBlue mb-2">{meta.formattedDate}</p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{meta.title}</h1>
      {#if meta.description}
        <p class="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">{meta.description}</p>
      {/if}
      
      {#if meta.coverImage}
        <div class="mt-8 mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src={meta.coverImage} 
            alt={meta.title} 
            class="w-full max-h-[500px] object-cover"
          />
        </div>
      {/if}
      
      <div class="flex flex-wrap gap-2 justify-center mt-4">
        {#each meta.tags || [] as tag}
          <span class="bg-slate-800 bg-opacity-60 text-coinbaseBlue px-3 py-1 rounded-full text-sm">
            {tag}
          </span>
        {/each}
      </div>
    </header>
    
    <div class="frosted-glass prose prose-lg prose-invert max-w-none p-8 rounded-xl shadow-xl mb-16">
      {@html renderedContent}
    </div>
    
    <div class="flex justify-between">
      <a href="/blog" class="frosted-glass text-coinbaseBlue hover:text-white px-6 py-3 rounded-full flex items-center transition-all duration-300 shadow-md">
        <i class="fa-solid fa-arrow-left mr-2"></i> Back to all posts
      </a>
    </div>
  </article>
</main>

<style>
  .frosted-glass {
    background: rgba(10, 15, 30, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  }

  /* Add custom styling for markdown content */
  :global(.prose a) {
    color: theme('colors.coinbaseBlue');
    text-decoration: none;
  }
  :global(.prose a:hover) {
    text-decoration: underline;
  }
  :global(.prose h2, .prose h3, .prose h4) {
    color: theme('colors.white');
  }
  :global(.prose code) {
    background: rgba(20, 30, 50, 0.8);
    color: theme('colors.gray.200');
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }
  :global(.prose pre) {
    background: rgba(20, 30, 50, 0.8);
    border-radius: 6px;
  }
  :global(.prose img) {
    border-radius: 6px;
  }
  :global(.prose blockquote) {
    border-left-color: theme('colors.coinbaseBlue');
    background: rgba(20, 30, 50, 0.7);
    padding: 1rem;
    border-radius: 0 6px 6px 0;
  }
</style> 