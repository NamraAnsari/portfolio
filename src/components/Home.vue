<template>
  <main class="overflow-x-hidden overflow-y-auto">
    <Intro />
    <About />
    <Work />
    <Contact />
  </main>
</template>

<script>
import Intro from "./Intro.vue";
import About from "./About.vue";
import Work from "./Work.vue";
import Contact from "./Contact.vue";
export default {
  name: "Home",
  components: {
    Intro,
    About,
    Work,
    Contact,
  },
};
</script>