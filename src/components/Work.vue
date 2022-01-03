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
      px-2
      sm:px-6
      lg:px-8
    "
  >
    <h2
      class="
        c_p_reveal-right
        text-3xl
        lg:text-4xl
        xl:text-5xl
        font-bold
        text-violet-700
      "
    >
      My Work
    </h2>
    <p class="c_p_reveal-right text-lg text-gray-500 font-semibold pt-2">
      Worked on the Front-Ends of...
    </p>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
      <div
        class="
          c_p_work-samples
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
        <div
          class="w-full h-full px-8 flex justify-center items-center bg-white"
        >
          <img
            :src="require(`../assets/${project.src}`)"
            :alt="project.alt"
            class="w-full h-auto"
          />
        </div>
        <div
          class="
            absolute
            inset-0
            w-full
            h-full
            bg-violet-700
            rounded-sm
            p-4
            xl:p-6
            flex flex-col
            transition-transform
            transform
            translate-y-full
            group-hover:translate-y-0
          "
        >
          <div class="flex-auto">
            <p class="text-sm text-white tracking-wide">
              {{ project.text }}
            </p>
            <ul
              class="
                flex flex-wrap
                space-x-4
                list-inside
                text-sm
                tracking-wide
                text-white
                list-disc
              "
            >
              <li
                class="mt-2"
                v-for="(tech, tIdx) in project.tech_used"
                :key="tIdx"
              >
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
              c_p_visit-btn
            "
            >Visit URL<ArrowNarrowRightIcon
              class="w-4 h-4 inline-block ml-2 transition-transform c_p_arrow"
          /></a>
        </div>
      </div>
      <p class="c_p_work-samples text-2xl lg:text-3xl font-semibold text-gray-500 self-end">
        & Many More...
      </p>
    </div>
  </section>
</template>

<script>
import { ArrowNarrowRightIcon } from "@heroicons/vue/outline";
import projects from "../assets/work.json";
export default {
  name: "Work",
  components: {
    ArrowNarrowRightIcon,
  },
  mounted() {
    var factor = 0.5
    Array.from(document.getElementsByClassName("c_p_work-samples")).forEach(
      (sample, sIdx) => {
        sample.style.animationDelay = (factor*sIdx)+'s' 
      }
    );
  },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>
<style scoped>
.c_p_visit-btn:hover .c_p_arrow {
  transform: translateX(0.375rem);
}
@keyframes revealBottom {
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
#work .c_p_work-samples {
  opacity: 0;
  transform: translateY(3rem);
}
#work.active .c_p_work-samples {
  animation: revealBottom 2s ease-out forwards;
}
</style>