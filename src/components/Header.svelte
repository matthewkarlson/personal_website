<script>
    import { page } from '$app/stores';
    export let y;

    // Determine if we're on the home page or another page
    $: isHomePage = $page.url.pathname === '/';

    let tabs = [
        {name: "Home", link: "/"},
        {name: 'Projects', link: isHomePage ? '#projects' : '/#projects'},
        {name: 'About me', link: isHomePage ? '#about' : '/#about'},
        {name: 'Blog', link: '/blog'},
        {name: 'Contact', link: isHomePage ? '#contact' : '/#contact'}
    ]
</script>

<header 
class={"sticky z-[10] top-0 duration-200 p-2 flex items-center justify-between border border-solid"+
 (y>0 ? ' py-4 bg-slate-950 border-violet-950' : ' py-6 bg-transparent border-transparent')}>
    <h1 class="font-medium">
        <b class="font-bold poppins">Matt Karlson</b>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab,index }
            <a href="{tab.link}" class="duration-200 hover:text-violet-400 outline rounded-3xl px-3 py-1" class:text-coinbaseBlue={tab.name === 'Blog' && $page.url.pathname.startsWith('/blog')}>
                <p>{tab.name}</p>
            </a>
        {/each}
    </div>
    <a href = "mailto:hello@mattkarlson.com" target="_self" class="blueShadow relative overflow-hidden px-5
     py-2 group rounded-full bg-white text-slate-950">
        <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
         group-hover:translate-x-full z-0 duration-200">
        </div>
        <h4 class="relative z-9">Get in touch</h4>
    </a>
</header>