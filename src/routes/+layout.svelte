<script>
    import "../app.css";
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";

    let y;
    let innerHeight = 0;
    let innerWidth = 0;

    function goTop() {
        document.body.scrollIntoView();
    }
</script>

<div
    class="relative flex flex-col mx-auto w-full text-sm sm:text-base min-h-screen"
>
    <div class="max-w-[1400px] w-full mx-auto px-4">
        <div
            class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" +
                (y > 0
                    ? "opacity-full pointer-events-auto"
                    : "pointer-events-none opacity-0")}
        >
            <button
                on:click={goTop}
                class="fixed bottom-4 right-4 rounded-full bg-slate-900 text-coinbaseBlue px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center shadow-lg"
            >
                <i class="fa-solid fa-arrow-up"></i>
            </button>
        </div>
        <Header {y} />
        <slot />
    </div>

    <Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
