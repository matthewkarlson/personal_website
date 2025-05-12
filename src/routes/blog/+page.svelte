<script>
  export let data;
  const { posts } = data;
</script>

<main class="flex flex-col flex-1 p-4 max-w-5xl mx-auto">
  <section class="py-10 lg:py-16">
    <div class="text-center mb-12 frosted-glass p-6 pt-8 pb-10 rounded-xl">
      <h1 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-coinbaseBlue pb-2">
        Blog
      </h1>
      <p class="mt-4 text-xl">Thoughts, ideas, and insights</p>
    </div>

    {#if posts.length === 0}
      <div class="text-center py-20 frosted-glass rounded-xl">
        <p class="text-xl text-gray-500">No posts available yet. Check back soon!</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each posts as post}
          <a 
            href={`/blog/${post.slug}`} 
            class="block frosted-glass rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
          >
            {#if post.coverImage}
              <div class="h-48 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title} 
                  class="w-full h-full object-cover"
                />
              </div>
            {/if}
            <div class="p-6">
              <p class="text-coinbaseBlue text-sm mb-2">{post.formattedDate}</p>
              <h2 class="text-xl font-bold mb-2 text-white">{post.title}</h2>
              <p class="text-gray-300 mb-4">{post.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each post.tags || [] as tag}
                  <span class="bg-slate-800 bg-opacity-50 text-coinbaseBlue px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </section>
</main>

<style>
  .frosted-glass {
    background: rgba(10, 15, 30, 0.85);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  }
</style> 