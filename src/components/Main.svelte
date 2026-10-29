<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "GroupQuotes",
      icon: "fa-solid fa-quote-left",
      description:
        "A tool the empower leaseholders being overcharged by their management companies.",
      href: "https://www.loom.com/share/bd3d2add58e640328b57c1f7b0bee9c0"
    },
  ];

  let stats = [
    "AWS Solutions Architect",
    "Agent-first developer",
    "Founding engineer",
  ];

  let jobs = [
    {
      company: "Housekeep",
      role: "Software Engineer",
      dates: "Jan 2026 – Present",
      points: [
        "Full-stack engineer at a UK home services marketplace, shipping customer-facing features end to end across the Django backend, Ionic/Angular apps, internal tools and AWS infrastructure.",
        "Introduced over-the-air updates for the consumer app, increasing release frequency 9x and enabling rapid rollbacks.",
        "Built a read-only MCP server letting employees across the company explore the codebase through their AI assistants.",
        "Reduced a business-critical data export from 10 hours to 3.5 hours (65% faster) and cut mobile app bundle size by 25%.",
        "Migrated EC2 scheduled jobs to AWS Lambda and rebuilt developer infrastructure, saving ~$500/month.",
      ],
    },
    {
      company: "EasyA Labs",
      role: "Founding Engineer",
      dates: "Aug – Nov 2025",
      points: [
        "Sole engineer building EVM-compatible DeFi apps in Solidity, TypeScript and Next.js, including proxy-wallet and cross-chain messaging components.",
        "Built a perpetual-futures carry-trading application integrating the Binance API.",
      ],
    },
    {
      company: "Schroders",
      role: "Technology Graduate, AI & Data Engineering",
      dates: "Sep 2023 – Jul 2025",
      points: [
        "Developed full-stack AI applications for investment professionals using React, TypeScript and Python, connecting LLM workflows to internal investment data.",
        "Built agentic analysis workflows with LangChain, including time-series analysis across 34 solar farms.",
        "Implemented Python/Kubernetes ingestion pipelines with PostgreSQL storage and Streamlit interfaces.",
      ],
    },
  ];

  let benefits = [
    {
      name: "A Builder",
      lead: "I like taking ownership of messy problems and shipping pragmatic fixes.",
      body: "I'd rather get something real in front of people and improve it than wait for the perfect plan. The work I'm proudest of tends to make a whole team faster, not just me, and I'm happiest when I'm making other people's work easier to ship.",
      pointsTitle: "In practice, at Housekeep",
      points: [
        "Introduced over-the-air updates that increased the consumer app's release rate 10x and made rollbacks fast.",
        "Built a read-only MCP server so anyone in the company can ask questions about the codebase through their AI assistant.",
        "Cut a business-critical data export from 10 hours to 3.5 hours.",
        "Moved EC2 scheduled jobs to AWS Lambda and rebuilt developer infrastructure, saving about $500/month.",
      ],
    },
    {
      name: "A Techno-Optimist",
      lead: "I'm obsessed with technology that makes people's lives better, and with getting it into their hands early.",
      body: "David Deutsch's Beginning Infinity shaped how I see the world: problems are soluble, and knowledge is what solves them. AI and crypto are the two technologies I find most exciting. AI gives anyone leverage, and crypto gives anyone ownership. I believe in abundant clean energy too, which is why I'm a believer in nuclear and fusion. I'm drawn to acceleration, and I'd rather be early than wait for consensus.",
      pointsTitle: "In practice",
      points: [
        "Became Housekeep's AI champion and drove adoption from the day I joined, before it was the consensus view.",
        "Built agentic LLM workflows at Schroders, including analysis across 34 solar farms.",
        "Founding engineer at EasyA Labs, building DeFi apps in Solidity, TypeScript and Next.js.",
      ],
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 py-4 sm:pt-10 sm:pb-0 lg:min-h-[85vh] lg:content-center lg:py-24">
    <div
      class="grid grid-cols-1 sm:grid-cols-5 items-center gap-8 md:gap-10 py-4 md:py-8 px-3 max-w-6xl mx-auto"
    >
      <div class="sm:col-span-3 flex flex-col gap-4 sm:gap-6 text-center sm:text-left order-2 sm:order-1">
        <p class="text-coinbaseBlue font-medium tracking-wide">
          Software Engineer · London
        </p>
        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-coinbaseBlue drop-shadow-lg"
        >
          Hi, I'm Matt.
        </h1>
        <p class="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
          Full-stack engineer working across Django, Angular, AWS and AI.
          Currently at <strong class="text-white">Housekeep</strong>, shipping
          features end to end. Previously a founding engineer at
          <strong class="text-white">EasyA Labs</strong> and at
          <strong class="text-white">Schroders</strong> building AI tools for
          investment teams.
        </p>
        <div class="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
          {#each stats as stat}
            <span
              class="px-2.5 py-1.5 rounded-full border border-solid border-violet-700 text-[11px] leading-tight sm:text-sm text-gray-300 whitespace-nowrap"
              >{stat}</span
            >
          {/each}
        </div>
        <div class="grid grid-cols-2 sm:flex sm:flex-row gap-3">
          <a href="mailto:hello@mattkarlson.com" class="project-button !mt-0 sm:w-auto !bg-coinbaseBlue !text-white"
            >Get in touch →</a
          >
          <a href="#experience" class="project-button !mt-0 sm:w-auto"
            >Experience →</a
          >
        </div>
      </div>

      <div class="sm:col-span-2 flex justify-center items-center order-1 sm:order-2">
        <img
          src="/images/profile.png"
          alt="A headshot of Matthew Karlson"
          class="w-28 sm:w-full max-w-xs aspect-square object-cover object-top rounded-full border-4 border-coinbaseBlue shadow-lg transform transition-all duration-500 hover:scale-105"
        />
      </div>
    </div>
  </section>
  <section class="py-10 lg:py-20 flex flex-col gap-12" id="experience">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">Where I've worked</h6>
    </div>
    <div class="flex flex-col gap-8 w-full mx-auto max-w-[800px]">
      {#each jobs as job}
        <div class="p-4 sm:p-6 rounded-lg border border-solid border-violet-700 flex flex-col gap-3">
          <div class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 class="text-2xl sm:text-3xl font-medium">
              <span class="text-coinbaseBlue">{job.company}</span>
              <span class="text-lg sm:text-xl text-gray-300"> · {job.role}</span>
            </h3>
            <p class="text-gray-400">{job.dates}</p>
          </div>
          <ul class="list-disc pl-5 space-y-2 text-gray-300">
            {#each job.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        </div>
      {/each}
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
    <div class="flex flex-col w-full mx-auto max-w-5xl">
      {#each benefits as benefit, index}
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 py-12 border-t border-solid border-violet-950 first:border-t-0"
        >
          <div class="flex flex-col gap-2">
            <p class="poppins text-slate-500 font-semibold">0{index + 1}</p>
            <h3 class="text-3xl sm:text-4xl text-coinbaseBlue">
              {benefit.name}
            </h3>
          </div>
          <div class="md:col-span-2 flex flex-col gap-6">
            <p class="text-xl sm:text-2xl leading-snug text-white">
              {benefit.lead}
            </p>
            <p class="text-gray-300 leading-relaxed">{benefit.body}</p>
            {#if benefit.points.length}
              <div class="border-l-2 border-solid border-coinbaseBlue pl-5 flex flex-col gap-3">
                <p class="text-sm uppercase tracking-wide text-gray-400">
                  {benefit.pointsTitle}
                </p>
                <ul class="space-y-2 text-gray-300 list-disc pl-4">
                  {#each benefit.points as point}
                    <li>{point}</li>
                  {/each}
                </ul>
              </div>
            {/if}
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
        The following are some recommendations for books and articles. I have
        found them all incredibly insightful, and they have shaped my thinking
        in one way or another.
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
            – A comprehensive guide to wealth, happiness, and life philosophy. Based
            on Naval's famous tweet storm "How to Get Rich without getting lucky".
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
            – A bold declaration of the power of technology to improve the world.
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
            – An exploration of the boundless potential of human knowledge and progress.
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
            Great book to get started if you've never done anything web3 or crypto
            related.
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
            – A guide to cultivating focus in a world full of distractions, essential
            for achieving meaningful results.
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
            – A contrarian take on career advice, focusing on building rare and valuable
            skills instead of following passion.
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
            – Timeless wisdom and practical philosophy from one of history's greatest
            Stoic thinkers.
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
            – A concise manual of Stoic ethical advice, offering practical guidance
            for living a virtuous and fulfilling life. Often comes across as an angry
            old man shouting at you, but sometimes that is exactly what you need!
          </div>
        </li>
      </ul>
    </div>

  </section>
  <section class="py-10 lg:py-20 flex flex-col gap-16" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">A project</h6>
    </div>

    <div class="max-w-xl mx-auto w-full">
      <Step step={steps[0]}>
        <div class="flex flex-col flex-1">
          <p class="flex-1">
            Created <strong class="text-coinbaseBlue">GroupQuotes</strong>, a tool to empower leaseholders being overcharged by their management companies.
            Allows leaseholders to upload the hundreds of invoices they receive from their management companies. Generates a shareable report, flagging suspicious contractors and highlighting overcharges.
            Turn your invoices into negotiation power!
          </p>
          <div class="flex flex-col gap-2 mt-auto">
            <a href="https://www.loom.com/share/bd3d2add58e640328b57c1f7b0bee9c0" target="_blank" on:click|stopPropagation class="project-button">See a demo →</a>
          </div>
        </div>
      </Step>
    </div>
  </section>
</main>

<style>

  @keyframes pulse {
    0%, 100% { text-shadow: 0 0 6px rgba(0, 82, 255, 0.3); }
    50% { text-shadow: 0 0 12px rgba(0, 82, 255, 0.5); }
  }

  @keyframes shimmer {
    0% { transform: translateX(0%); }
    100% { transform: translateX(200%); }
  }

  @keyframes scan {
    0%, 100% { transform: translateX(-100%); opacity: 0; }
    25%, 75% { opacity: 0.7; }
    50% { transform: translateX(100%); opacity: 0; }
  }

  .glassmorphic-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    padding: 1.5rem;
    transition: all 0.3s ease;
  }

  .glassmorphic-card:hover {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  }

  .project-button {
    display: block;
    background: rgba(0, 82, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 82, 255, 0.3);
    border-radius: 8px;
    padding: 0.5rem 1rem;
    text-align: center;
    font-size: 0.875rem;
    color: #0052FF;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    margin-top: 0.5rem;
    text-decoration: none;
  }

  .project-button:hover {
    background: rgba(0, 82, 255, 0.25);
    border-color: rgba(0, 82, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 82, 255, 0.3);
  }
</style>


