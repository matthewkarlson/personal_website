<script>
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Sensors in Autonomous Vehicles",
            icon: "fa-solid fa-car",
            description:
                "Worked with ON Semiconductors to test a pre-production image sensor for applications in autonomous vehicles. Developed a custom test suite to evaluate the sensor's performance in various lighting conditions and at different speeds. The test suite was used to evaluate the sensor's performance and identify potential areas for improvement.",
        },
        {
            name: "House Price Prediction Using ML",
            icon: "fa-solid fa-house",
            description:
                "Test for model robustness with customized test profiles and receive exhaustive reporting on the performance and potential vulnerabilities of your model.",
        },
        {
            name: "Data Visualization & Augmentation",
            icon: "fa-solid fa-chart-line",
            description:
                "Augment your datasets with our filters and dataset manipulations to ensure your models are trained on the highest quality datasets (coming soon).",
        },
    ];

    let benefits = [
        {
            metric: "10x",
            name: "A Rational Optimist",
            description:
                "We live in the best time in human history. We have more wealth, more freedom, and more opportunities than ever before, despite what the news might tell you. I believe we have a responsibility to use our skills and resources to make the world an even better place by building things that add value to the world.",
},
        {
            name: "A Writer",
            description:
            "I write about technology, wealth creation, optimism and my general thoughts. I believe that writing is a powerful tool for learning and growth. I write to clarify my thoughts and to share my ideas with the world. Sharing my thoughts publicly keeps me accountable and allows me to get rapid feedback on ideas and thougts.",
        },
        {
            metric: "10x",
            name: "A Stoic",
            description:
            "Stoicism is at the core of my personal philisophy. I believe in focusing on the things that we can control and letting go of the rest. There are a lot of things we can't control, and thats ok. By remaining focused we waste less time and live a more fulfilling and peaceful life. Our minds and our actions are the only things we have true control over, so my life is based around a ruthless focus on how I can think and act in a way that is most beneficial to myself and others."
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Matt</span>
                Karlson
                <br /> <span class="poppins text-violet-400">Machine Learning</span>
                and <span class="poppins text-violet-400">AI</span> Engineer
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes Python, Streamlit, Javascript, and Solidity. I'm passionate about building things that add value to the world.
            </p>
            <button
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <a
                    href="mailto:hello@mattkarlson.com"
                >
                    <h4 class="relative z-9">Get in touch &rarr;</h4></a
                >
            </button>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img
                src={"/images/profile.png"}
                alt="Matthew Karlson"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my recent projects
            </h6>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Worked with <strong class="text-violet-400">ON Semiconductor</strong> to test a pre-production image sensor for applications in autonomous vehicles. Developed a <strong class="text-violet-400">custom test suite </strong>to evaluate the sensor's performance in various lighting conditions and at different speeds. Experimented with Convolutional filters to improve sensor performance.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Built a basic machine learning model to predict house prices using the <strong class="text-violet-400">HMRC Housing</strong>. The model was trained using a <strong class="text-violet-400">Random Forest Regressor</strong> and evaluated using <strong class="text-violet-400">cross-validation</strong>. The model was then deployed using <strong class="text-violet-400">Streamlit</strong> and <strong class="text-violet-400">Heroku</strong>.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    Built out multiple data dashboards as <strong class="text-violet-400" >Streamlit apps</strong> and deployed them as web apps using a <strong class="text-violet-400" >Kubernetes</strong> cluster. I engineered <strong class="text-violet-400" >SQL Queries</strong> on the backend, built out the logic in python and designed the frontend.
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
            If these things interest <span class="text-violet-400">you</span>, I would <span class="text-violet-400">love</span> to hear from you. Check out all my links <span class="text-violet-400">below.</span>
        </h5>
        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
        Subscribe to the <span class="text-violet-400">newsletter</span> to get my writing and updates on projects <span class="text-violet-400">directly in your inbox.</span>
        </h5>
        <div
            class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
        >

        <script async data-uid="c7ad401ca8" src="https://matthew-karlson.ck.page/c7ad401ca8/index.js"></script>

        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scroll to see more &rarr;</p>
        </div>

    </section>
</main>
