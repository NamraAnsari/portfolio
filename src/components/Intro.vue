<template>
  <section
    id="home"
    class="
      max-w-7xl
      mx-auto
      lg:h-screen
      relative
      py-8
      sm:py-16
      md-py-20
      lg:pt-0
      lg:pb-28
      xl:pb-32
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div
      class="
        sm:text-center
        lg:text-left
        lg:w-3/4
        lg:absolute
        lg:top-1/2
        lg:transform
        lg:-translate-y-1/2
      "
    >
      <h1
        class="
          text-4xl
          tracking-tight
          font-extrabold
          text-gray-500
          sm:text-5xl
          md:text-6xl
          xl:text-7xl
        "
      >
        <span class="block">Hii,</span>
        <span class="block"
          >I'm <span class="text-violet-700">Namra Ansari.</span></span
        >
      </h1>
      <p
        class="
          mt-3
          text-lg text-gray-700
          font-semibold
          sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto
          md:mt-5 md:text-2xl
          xl:text-3xl
          lg:mx-0
        "
      >
        Front-End Developer | UI UX Designer
      </p>
      <div
        class="mt-5 sm:mt-8 lg:mt-14 sm:flex sm:justify-center lg:justify-start"
      >
        <div class="rounded-md shadow">
          <a
            href="#work"
            class="
              w-full
              flex
              items-center
              justify-center
              px-8
              md:px-10
              py-3
              md:py-6
              border border-transparent
              text-base
              font-semibold
              rounded-sm
              text-white
              bg-violet-700
              hover:bg-violet-800
              md:text-lg
              xl:text-xl
            "
          >
            View My Work
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-11 md:ml-14 py-3 md:py-6">
          <a
            href="#contact"
            class="
              w-max
              sm:w-full
              mx-auto
              sm:mx-0
              flex
              items-center
              justify-center
              border border-transparent
              text-base
              md:text-lg
              xl:text-xl
              font-semibold
              text-violet-700
              hover:text-violet-800
              border-b-2 border-l-0 border-r-0 border-t-0 border-violet-700
              hover:border-violet-800
            "
          >
            Contact Me<ArrowNarrowRightIcon class="ml-4 w-6 h-6 inline-block" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="
        hidden
        lg:block
        lg:absolute
        lg:top-1/2
        lg:transform
        lg:-translate-y-1/2
        lg:right-0
        lg:w-1/3
      "
    >
      <img
        class="object-cover lg:w-full lg:h-auto"
        src="../assets/ClipArt.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
export default {
  name: "Intro",
  components: {
    ArrowNarrowRightIcon,
  },
};
</script>