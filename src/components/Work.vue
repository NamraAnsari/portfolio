<template>
  <section
    id="work"
    class="
      max-w-7xl
      mx-auto
      py-8
      sm:py-16
      md:py-20
      lg:py-24
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-violet-700">
      My Work
    </h2>
    <p class="text-lg text-gray-500 font-semibold pt-2">
      Worked on the Front-Ends of...
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
      <div
        class="
          w-full
          h-44
          border border-gray-100
          rounded-sm
          shadow-sm
          overflow-hidden
          relative
          cursor-pointer
          group
        "
        v-for="(project, pIdx) in projects"
        :key="pIdx"
      >
        <div class="w-full h-full px-8 flex justify-center items-center bg-white">
          <img
            :src="require(`../assets/${project.src}`)"
            :alt="project.alt"
            class="w-full h-auto"
          />
        </div>
        <div
          class="
            absolute
            transition-transform
            transform
            translate-y-full
            group-hover:translate-y-0
            inset-0
            w-full
            h-full
            bg-violet-700
            rounded-sm
            p-4
            xl:p-6
            flex flex-col
          "
        >
          <div class="flex-auto">
            <p class="text-sm text-white tracking-wide">
              {{ project.text }}
            </p>
            <ul
              class="
                flex
                flex-wrap
                space-x-4
                list-inside
                text-sm
                tracking-wide
                text-white
                list-disc
              "
            >
              <li class="mt-2" v-for="(tech, tIdx) in project.tech_used" :key="tIdx">
                {{ tech }}
              </li>
            </ul>
          </div>
          <a
            :href="project.url"
            target="_blank"
            class="
              w-max
              ml-auto
              text-base
              font-semibold
              text-white
              border-b border-b-2 border-white
              group
            "
            >Visit URL<ArrowNarrowRightIcon
              class="
                w-4
                h-4
                inline-block
                ml-2
                transition-transform
                transform
                group-hover:translate-x-1
              "
          /></a>
        </div>
      </div>
      <p class="text-2xl lg:text-3xl font-semibold text-gray-500 self-end">
        & Many More...
      </p>
    </div>
  </section>
</template>

<script>
import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
export default {
  name: "Work",
  components: {
    ArrowNarrowRightIcon,
  },
  data() {
    return {
      projects: [
        {
          src: "brandlogos.png",
          alt: "brandlogos.org",
          text: "Designed & Developed Front-End of Brandlogos Website",
          tech_used: ["Adobe XD", "Nuxt JS", "BootstrapVue"],
          url: "http://brandlogos.org/",
        },
        {
          src: "zifup.png",
          alt: "zifup.com",
          text: "Designed & Developed Front-End of Zifup Website",
          tech_used: ["Nuxt JS", "Tailwind CSS"],
          url: "https://beta.zifup.com/",
        },
        {
          src: "cmdce.png",
          alt: "ClipMyDeals Chrome Extension",
          text: "Designed & Developed Front-End of ClipMyDeals Chrome Extension",
          tech_used: ["Adobe XD", "HTML5", "CSS3"],
          url: "https://clipmydeals.com/add-ons.php#extension",
        },
        {
          src: "cmdapp.png",
          alt: "ClipMyDeals App",
          text: "Designed & Developed Front-End of the Product Page & Coupon Page of an App",
          tech_used: ["Adobe XD", "Flutter"],
          url: "https://clipmydeals.com/add-ons.php#apps",
        },
      ],
    };
  },
};
</script>