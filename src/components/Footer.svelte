<footer
  class="py-20 w-full sm:py-32 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
  <p
    class="px-6 py-3 bg-coinbaseBlue bg-opacity-0 text-white font-medium rounded-lg shadow-md text-center"
    id="contact"
  >
    Get in touch &darr;
  </p>

  <div class="flex flex-col gap-6 items-center justify-center w-full px-4">
    <div class="kit-wrapper">
      <script
        async
        data-uid="c7ad401ca8"
        src="https://matthew-karlson.kit.com/c7ad401ca8/index.js"
      ></script>
    </div>
    <p>
      <b class="pr-2">Blog</b>
      <a href="/blog" class="text-coinbaseBlue"
        >Read my blog<sup class=""
          ><span class="text-xs scale-75 pl-0.5"
            ><i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i></span
          ></sup
        ></a
      >
    </p>
    <p>
      <b class="pr-2">Email</b>
      <a href="mailto:hello@mattkarlson.com" class="text-coinbaseBlue"
        >hello@mattkarlson.com<sup class=""
          ><span class="text-xs scale-75 pl-0.5"
            ><i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i></span
          ></sup
        ></a
      >
    </p>
    <p>
      <b class="pr-2">X/Twitter</b>
      <a
        href="https://x.com/matthew_karlson"
        target="_blank"
        class="text-coinbaseBlue"
        >matthew_karlson<sup class=""
          ><span class="text-xs scale-75 pl-0.5"
            ><i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i></span
          ></sup
        ></a
      >
    </p>
    <p>
      <b class="pr-2">GitHub</b>
      <a
        href="https://github.com/matthewkarlson"
        target="_blank"
        class="text-coinbaseBlue"
        >matthewkarlson<sup class=""
          ><span class="text-xs scale-75 pl-0.5"
            ><i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i></span
          ></sup
        ></a
      >
    </p>
    <p>
      <b class="pr-2">LinkedIn</b>
      <a
        href="https://www.linkedin.com/in/matthew-karlson-a69b031a3/"
        target="_blank"
        class="text-coinbaseBlue"
        >Matthew Karlson<sup class=""
          ><span class="text-xs scale-75 pl-0.5"
            ><i
              class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"
            ></i>
          </span></sup
        ></a
      >
    </p>
  </div>
  <div class="px-10 max-sm:px-2 max-w-4xl">
    <p>
      This website was built using Svelte and Tailwind following <a
        class="text-coinbaseBlue"
        href="https://www.youtube.com/watch?v=-2UjwQzxvBQ&t=3449s"
        target="_blank">this</a
      >
      tutorial. It's hosted on Heroku(I know, I had free credits pls don't judge)
      The particle effect is from
      <a
        href="https://github.com/VincentGarreau/particles.js/"
        target="_blank"
        class="text-coinbaseBlue">particle.js</a
      >. The code for this website can be found
      <a
        class="text-coinbaseBlue"
        href="https://github.com/matthewkarlson/personal_website"
        target="_blank">here</a
      >
    </p>
  </div>
</footer>

<style>
  .kit-wrapper {
    width: 100%;
    max-width: 980px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    justify-content: center;
    display: flex;
  }

  :global([data-uid="c7ad401ca8"] form) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  :global([data-uid="c7ad401ca8"] h2),
  :global([data-uid="c7ad401ca8"] h3) {
    line-height: 1.1;
  }

  :global([data-uid="c7ad401ca8"] input[type="email"]) {
    width: 100%;
    padding: 0.9rem 1rem;
    font-size: 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.04);
    color: #e5e7eb;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  }

  :global([data-uid="c7ad401ca8"] input[type="email"]:focus) {
    border-color: rgba(0, 212, 255, 0.5);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.2);
  }

  :global([data-uid="c7ad401ca8"] button[type="submit"]) {
    align-self: flex-start;
    padding: 0.9rem 1.5rem;
    border-radius: 12px;
    background: linear-gradient(120deg, #0052ff, #00d4ff);
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 82, 255, 0.35);
    transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  }

  :global([data-uid="c7ad401ca8"] button[type="submit"]:hover) {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(0, 82, 255, 0.45);
    filter: brightness(1.05);
  }

  :global([data-uid="c7ad401ca8"] button[type="submit"]:active) {
    transform: translateY(0);
    box-shadow: 0 8px 18px rgba(0, 82, 255, 0.3);
  }

  :global([data-uid="c7ad401ca8"] .formkit-guarantee) {
    color: #94a3b8;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 640px) {
    .kit-wrapper {
      padding: 1.5rem 1.1rem;
    }

    :global([data-uid="c7ad401ca8"] button[type="submit"]) {
      width: 100%;
      text-align: center;
    }
  }
</style>
