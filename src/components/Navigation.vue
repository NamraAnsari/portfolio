<template>
  <header
    :class="[reachedTop ? 'bg-gray-800' : '', 'sticky top-0 mt-2 z-10']"
  >
    <Popover class="max-w-7xl mx-auto">
      <nav
        class="relative flex items-center justify-end h-16 px-2 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <PopoverButton
          class="
            bg-transparent
            rounded-md
            p-2
            inline-flex
            md:hidden
            items-center
            justify-center
            text-gray-400
            hover:text-gray-500 hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-violet-500
          "
        >
          <span class="sr-only">Open main menu</span>
          <MenuIcon class="h-6 w-6" aria-hidden="true" />
        </PopoverButton>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <template v-for="item in navigation" :key="item.name">
            <a
              :href="`#${item.href}`"
              :class="[
                currentSection == item.href
                  ? reachedTop
                    ? 'text-violet-300 border-b border-violet-300'
                    : 'text-violet-700 border-b border-violet-700'
                  : reachedTop
                  ? 'text-white hover:text-violet-400'
                  : 'text-gray-400 hover:text-violet-700',
                'font-bold text-base uppercase',
              ]"
              >{{ item.name }}</a
            >
          </template>
        </div>
      </nav>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="
            absolute
            z-10
            top-0
            inset-x-0
            m-2
            transition
            transform
            origin-top-right
            md:hidden
            rounded-lg
            shadow-md
            bg-white
            ring-1 ring-gray-900 ring-opacity-5
            overflow-hidden
          "
        >
          <div class="-mr-2 px-5 pt-4 flex items-center justify-end">
            <PopoverButton
              class="
                bg-white
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-gray-400
                hover:text-gray-500 hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-violet-500
              "
            >
              <span class="sr-only">Close main menu</span>
              <XIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <div class="sm:px-2 pt-2 pb-3 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="`#${item.href}`"
              :class="[
                currentSection == item.href
                  ? 'text-gray-900 bg-gray-50'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50',
                'block px-3 py-2 rounded-md text-lg font-semibold',
              ]"
              >{{ item.name }}</a
            >
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import navigation from "../assets/navigation.json";
export default {
  name: "Navigation",
  components: {
    MenuIcon,
    XIcon,
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  data() {
    return {
      navigation: navigation,
      reachedTop: false,
      currentSection: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.fixedHeader);
    this.currentSection = "home";
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.fixedHeader);
  },
  methods: {
    fixedHeader() {
      window.pageYOffset >= 64
        ? (this.reachedTop = true)
        : (this.reachedTop = false);
      var sections = document.getElementsByTagName("section");
      Array.from(sections).forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
          this.currentSection = section.getAttribute("id");
        }
        if (this.currentSection != "home") {
          document.getElementById(this.currentSection).classList.add("active");
        }
      });
    },
  },
};
</script>