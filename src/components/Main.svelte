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
            name: "Volume Ingestion Anomaly Detection",
            icon: "fa-solid fa-snowflake",
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
            name: "A Techno-Optimist",
            description:
                "We live in the best time in human history. We have more wealth, more freedom, and more opportunities than ever before, despite what the news might tell you. I believe we have a responsibility to use our skills and resources to make the world an even better place by building things that add value to the world.",
        },
        {
            name: "A DeFi Enthusiast",
            description:
                "I believe in a future where financial freedom is accessible to everyone. Decentralized finance empowers individuals by removing barriers, reducing reliance on intermediaries, and ensuring full ownership and control of their assets. My passion lies in building and contributing to systems that democratize access to financial services, fostering innovation, inclusion, and transparency in the global economy. Through DeFi, I see the potential to unlock opportunities for billions of people worldwide and redefine how we interact with money.",
        },
        {
            name: "A Stoic",
            description:
                "Stoicism is at the core of my personal philosophy. I believe in focusing on the things that we can control and letting go of the rest. There are a lot of things we can't control, and thats ok. By remaining focused we waste less time and live a more fulfilling and peaceful life. Our minds and our actions are the only things we have true control over, so my life is based around a ruthless focus on how I can think and act in a way that is most beneficial to myself and others.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14">
        <div class="text-center py-16">
            <h1
                class="text-6xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-coinbaseBlue animate-pulse drop-shadow-lg"
            >
                Build the Future
            </h1>
        </div>

        <div
            class="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-8 py-8"
        >
            <p class=" text-4xl leading-relaxed">
                Hi, I'm
                <strong class="text-coinbaseBlue">Matt</strong>. Welcome to my
                website. This is a brief summary of who I am, as well as some of
                the cool things I've been up to recently.
            </p>

            <div class="flex justify-center items-center">
                <img
                    src="/images/profile.png"
                    alt="A headshot of Matthew Karlson"
                    class="w-100 rounded-full border-4 border-coinbaseBlue"
                />
            </div>
        </div>
    </section>
    <section class="py-10 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my recent projects
            </h6>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    Worked with <strong class="text-coinbaseBlue"
                        >ON Semiconductor</strong
                    >
                    to test a pre-production image sensor for applications in autonomous
                    vehicles. Developed a
                    <strong class="text-coinbaseBlue"
                        >custom test suite
                    </strong>to evaluate the sensor's performance in various
                    lighting conditions and at different speeds. Experimented
                    with Convolutional filters to improve sensor performance.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    Created an anomaly detection model using <strong
                        class="text-coinbaseBlue">Snowflake</strong
                    > and Cortex AI. Analysed the volume of data ingestion feeds
                    and built the model to detect anomalies and display them in a
                    streamlit dashboard. Ability to flag false positives to improve
                    model performance.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    Built out multiple data dashboards as <strong
                        class="text-coinbaseBlue">Streamlit apps</strong
                    >
                    and deployed them as web apps using a
                    <strong class="text-coinbaseBlue">Kubernetes</strong>
                    cluster. I engineered
                    <strong class="text-coinbaseBlue">SQL Queries</strong> on the
                    backend, built out the logic in python and designed the frontend.
                </p>
            </Step>
        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-900 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-900 py-4"
        >
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-coinbaseBlue">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3
                            class="text-2xl text-coinbaseBlue sm:text-3xl md:text-5xl"
                        >
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <div
            class="max-w-3xl mx-auto my-12 p-6 bg-slate-900 text-white rounded-lg shadow-lg"
        >
            <h3 class="text-2xl font-bold text-coinbaseBlue mb-4">
                Essential Reading
            </h3>
            <p class="text-lg text-gray-300 mb-6">
                The following are some recommendations for books and articles. I
                have found them all incredibly insightful, and they have shaped
                my thinking in one way or another.
            </p>
            <ul class="space-y-4">
                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://www.navalmanack.com/"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "The Almanack of Naval Ravikant" by Eric Jorgenson
                        </a>
                        – A comprehensive guide to wealth, happiness, and life philosophy.
                        Based on Naval's famous tweet storm "How to Get Rich without getting lucky"
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://a16z.com/the-techno-optimist-manifesto/"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "The Techno-Optimist Manifesto" by Marc Andreessen
                        </a>
                        – A bold declaration of the power of technology to improve
                        the world.
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "The Beginning of Infinity" by David Deutsch
                        </a>
                        – An exploration of the boundless potential of human knowledge
                        and progress.
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://readwriteown.com/"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "Read Write Own" by Chris Dixon
                        </a>
                        – A book on how web3 is ushering in an entirely new era on the internet.
                        Great book to get started if you've never done anything web3 or crypto related
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://www.calnewport.com/books/deep-work/"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "Deep Work" by Cal Newport
                        </a>
                        – A guide to cultivating focus in a world full of distractions,
                        essential for achieving meaningful results.
                    </div>
                </li>

                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://www.calnewport.com/books/so-good/"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "So Good They Can't Ignore You" by Cal Newport
                        </a>
                        – A contrarian take on career advice, focusing on building
                        rare and valuable skills instead of following passion.
                    </div>
                </li>

                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://www.goodreads.com/book/show/30659.Meditations"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "Meditations" by Marcus Aurelius
                        </a>
                        – Timeless wisdom and practical philosophy from one of history's
                        greatest Stoic thinkers.
                    </div>
                </li>
                <li class="flex items-start">
                    <span class="text-coinbaseBlue font-bold mr-2">•</span>
                    <div>
                        <a
                            href="https://www.amazon.co.uk/Discourses-Selected-Writings-Penguin-Classics/dp/0140449469/ref=sr_1_3?crid=37EKQOKEZFZB0&dib=eyJ2IjoiMSJ9.Q2quC00lVfRtLFccjJ0KDyhSWy_XwwzCtwr-rNP1ZeEZOGNbvIeSF9GEvkCjJRRmyqLPNJQsk8uh4OBLtpT0_Dw-ipRSqgMTDhOhLSbNn24f1DSG5iCyAfx6rzjcfkLYkx-kBB4992l-P8_WG1Pc03fE7wYQOsTqnys_kH8l42NuybQaDc2xG1DZQQMvHEsW36x-yIzARw5gP8Ac49NFycO6kMiifdoWf0IZEoice10.vNP6hIzzmFRMxxHTNcH9bK0EhA1yXXXGo3HgXD0M_PY&dib_tag=se&keywords=epictetus&qid=1733853781&sprefix=epictetus%2Caps%2C81&sr=8-3"
                            target="_blank"
                            class="text-coinbaseBlue hover:underline"
                        >
                            "The Enchiridion" by Epictetus
                        </a>
                        – A concise manual of Stoic ethical advice, offering practical
                        guidance for living a virtuous and fulfilling life. Often comes across as an angry old man shouting at you, but sometimes that is exactly what you need!
                    </div>
                </li>
            </ul>
        </div>

        <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
            If these things interest you, I would love to hear from you. Check
            out all my links <span class="text-coinbaseBlue">below.</span>
        </h5>
    </section>
</main>
