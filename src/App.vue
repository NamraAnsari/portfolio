<template>  
  <Navigation />
  <Home />
  <Footer />
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
import "./assets/tailwind.css";
export default {
  name: "App",
  components: {
    Navigation,
    Home,
    Footer,
  },
};
</script>
