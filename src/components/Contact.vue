<template>
  <section id="contact" class="bg-gray-900">
    <div
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
      <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
        Contact Me
      </h2>
      <p class="text-lg text-white font-semibold pt-11">
        Feel Free to contact me about my work, opportunities, ideas,
        collaboration & consultation.
      </p>
      <p class="text-white text-base xl:text-xl font-normal pt-10">
        <MailIcon class="w-6 h-6 text-gray-100 inline-block mr-2 lg:mr-6" />
        <a href="mailto:namraansari6797@gmail.com" class="underline"
          >namraansari6797@gmail.com</a
        >
      </p>
      <p class="text-white text-base xl:text-xl font-normal pt-6">
        <img
          class="w-6 h-6 mr-2 lg:mr-6 inline-block"
          src="../assets/linkedin.svg"
          alt="LinkedIn Profile"
        />
        <a href="https://www.linkedin.com/in/namra-ansari-729845171" target="_blank" class="underline"
          >www.linkedin.com/in/namra-ansari-729845171</a
        >
      </p>
    </div>
  </section>
</template>

<script>
import { MailIcon } from "@heroicons/vue/outline";
export default {
  name: "Contact",
  components: {
    MailIcon,
  },
};
</script>