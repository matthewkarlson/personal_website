<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "PostCaptioner",
      icon: "fa-solid fa-newspaper",
      description:
        "A tool that automatically generates captions for your social media posts. It uses AI to understand the content of your post and generate a caption that is relevant to the post. Video transctription and image grabbing.",
      href: "https://postcaptioner.com"
    },
    {
      name: "Planform.AI",
      icon: "fa-solid fa-lightbulb",
      description:
        "An embeddable AI plan generation service that allows agencies to provide custom service plans to clients",
      href: "https://www.planform.ai"
    },
    {
      name: "GroupQuotes",
      icon: "fa-solid fa-quote-left",
      description:
        "A tool the empower leaseholders being overcharged by their management companies.",
      href: "https://groupquotes.co.uk"
    },
  ];

  let benefits = [
    {
      name: "A Techno-Optimist",
      description:
        "We live in the best time in human history. We have more wealth, more freedom, and more opportunities than ever before, despite what the news might tell you. I believe we have a responsibility to use our skills and resources to make the world an even better place by building things that add value.",
    },
    {
      name: "A DeFi Enthusiast",
      description:
        "I believe in a future where financial freedom is accessible to everyone. Decentralized finance empowers individuals by removing barriers, reducing reliance on intermediaries, and ensuring full ownership and control of their assets. Check out the Stand With Crypto UK movement in the nav bar to find out more about supporting pro crypto policy in the UK!",
    },
    {
      name: "A Stoic",
      description:
        "Stoicism is at the core of my personal philosophy. I believe in focusing on the things that we can control and letting go of the rest. There are a lot of things we can't control, and that's ok. By remaining focused we waste less time and live a more fulfilling and peaceful life. Our minds and our actions are the only things we have true control over.",
    },
  ];
</script>

<main class="flex flex-col flex-1 p-4">
  <section id="introPage" class="grid grid-cols-1 py-4 sm:pt-10 sm:pb-0">
    <div class="text-center py-2 md:py-4">
      <h1
        class="text-6xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-coinbaseBlue animate-pulse drop-shadow-lg sm:pb-0"
      >
        Build The Future
      </h1>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 items-center gap-8 md:gap-12 py-4 md:py-8 px-5 max-w-6xl mx-auto"
    >
      <div class="flex flex-col justify-center space-y-6">
        <p
          class="text-2xl px-1 py-4 leading-snug md:text-3xl lg:text-4xl sm:leading-relaxed text-center sm:text-left"
        >
          Hi, I'm
          <strong class="text-coinbaseBlue">Matt</strong>. Welcome to my website.
          I'm a Founding Engineer at EasyA Labs -
          Building the future of Web3
        </p>
        
        <div class="py-2">
          <p class="tech-text text-2xl px-6 py-3 mx-auto sm:mx-0 max-w-2xl leading-snug md:text-3xl lg:text-4xl sm:leading-relaxed text-center sm:text-left">
            The Cutting Edge is my Comfort Zone.
          </p>
        </div>
      </div>
      
      <div class="sm:py-6 flex justify-center items-center">
        <img
          src="/images/profile.png"
          alt="A headshot of Matthew Karlson"
          class="w-100 rounded-full border-4 border-coinbaseBlue shadow-lg transform transition-all duration-500 hover:scale-105"
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
          Created <strong class="text-coinbaseBlue">PostCaptioner.com</strong>, a tool that automatically generates captions for your social media posts.
          Create posts with a mix of video and image content. We use Cloudflare Stream to grab transcripts and images from your videos automatically!
            is relevant to the post. Video transctription and image grabbing.
          <span class="block mt-2 text-sm text-coinbaseBlue italic">Check it out →</span>
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Created <strong class="text-coinbaseBlue">Planform.AI</strong>, an embeddable AI plan generation service that allows agencies to provide custom service plans to clients.
          The service has a built in <strong class="text-coinbaseBlue">puppeteer</strong> integration to screenshot the client's website and provide a detailed analysis using AI.
          Fully integrated with <strong class="text-coinbaseBlue">Stripe</strong> for payments and <strong class="text-coinbaseBlue">SendGrid</strong> for email. Built using <strong class="text-coinbaseBlue">Next.js</strong> and <strong class="text-coinbaseBlue">PostgreSQL</strong>.
          <span class="block mt-2 text-sm text-coinbaseBlue italic">Check it out →</span>
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          Created <strong class="text-coinbaseBlue">GroupQuotes</strong>, a tool to empower leaseholders being overcharged by their management companies.
          Allows leasholders to upload the hundreds of invoices they receive from their management companies. Generates a shareable report, flagging suspicious contractors and highlighting overcharges.
          Turn your invoices into negotiation power!
          <span class="block mt-2 text-sm text-coinbaseBlue italic">Check it out →</span>
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
            <h3 class="text-2xl text-coinbaseBlue sm:text-3xl md:text-5xl">
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

    <section
      id="stand-with-crypto"
      class="py-10 lg:py-20 flex flex-col gap-6 max-w-3xl mx-auto text-center"
    >
      <h3 class="text-2xl font-bold text-coinbaseBlue">Stand With Crypto</h3>
      <p class="text-lg text-gray-300">
        Join me in supporting the <strong>Stand With Crypto</strong> movement, a
        global call to action to protect and promote innovation in the crypto space.
        Together, we can advocate for fair policies that ensure financial freedom
        and the continued growth of decentralized technologies in the UK, US, and
        beyond.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://ukstandwithcrypto.deform.cc/signup?referral=HVB9DgT1Z1pV"
          target="_blank"
          class="bg-coinbaseBlue text-white py-2 px-4 rounded-lg hover:bg-cyan-500 font-medium"
        >
          Stand With Crypto UK
        </a>
        <a
          href="https://www.standwithcrypto.org/join/2d4a4e1b67f2"
          target="_blank"
          class="bg-coinbaseBlue text-white py-2 px-4 rounded-lg hover:bg-cyan-500 font-medium"
        >
          Stand With Crypto US
        </a>
      </div>
      <div class="mt-6 flex justify-center">
        <a
          href="https://opensea.io/assets/ethereum/0x9d90669665607f08005cae4a7098143f554c59ef/143199"
          target="_blank"
          class="hover:opacity-90"
        >
          <img
            src="images/swc.png"
            alt="Stand With Crypto NFT"
            class="w-40 h-40 sm:w-60 sm:h-60 rounded-lg border-4 border-coinbaseBlue shadow-lg"
          />
        </a>
      </div>
    </section>

    <h5 class={" text-2xl sm:text-3xl font-semibold text-center poppins "}>
      So, jump on board and lets build the future together. 
    </h5>
    

  </section>
</main>

<style>
  .tech-text {
    background: rgba(15, 23, 42, 0.3);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    color: #0052FF;
    font-weight: 500;
    position: relative;
    overflow: hidden;
    animation: pulse 4s infinite;
  }

  .tech-text::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 82, 255, 0.05),
      rgba(0, 255, 255, 0.05),
      transparent
    );
    opacity: 0.5;
    animation: shimmer 8s infinite linear;
    pointer-events: none;
  }

  .tech-text::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      #0052FF,
      transparent
    );
    animation: scan 4s ease-in-out infinite;
  }

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
</style>


