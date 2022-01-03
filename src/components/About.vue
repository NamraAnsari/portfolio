<template>
  <section id="about" class="bg-violet-900 px-2 sm:px-6 lg:px-8">
    <div
      class="
        max-w-7xl
        mx-auto
        lg:flex
        py-8
        sm:py-16
        md:py-20
        lg:py-24 lg:space-x-6
      "
    >
      <div class="mx-auto w-1/2 sm:w-1/3 lg:mx-0">
        <img
          src="../assets/Profile.png"
          alt="Profile Photo"
          class="w-full h-auto c_p_reveal-right"
        />
      </div>
      <div class="lg:w-2/3 sm:text-center lg:text-left mt-8 lg:mt-0">
        <h2
          class="
            text-3xl
            lg:text-4xl
            xl:text-5xl
            font-bold
            text-white
            c_p_reveal
          "
        >
          About Me
        </h2>
        <p
          class="
            c_p_reveal-left
            pt-8
            lg:pt-11
            text-white text-base
            xl:text-xl
            font-medium
          "
        >
          Qualified IT Engineer with 1+ year of experience in designing &
          developing Front-Ends of various web / mobile based Applications
          incorporating a range of technologies.
        </p>
        <p
          class="
            c_p_reveal-left
            pt-5
            lg:pt-7
            text-white text-base
            xl:text-xl
            font-medium
          "
        >
          Eager to learn new technologies & methodologies.
        </p>
        <p
          class="
            c_p_reveal-left
            pt-5
            lg:pt-7
            text-white text-base
            xl:text-xl
            font-medium
          "
        >
          Always willing to innovate new things & improve existing technology.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>