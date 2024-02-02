<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <hero-banner/>
    </div>
    <router-view/>
    <footer-page/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {FooterPage, HeroBanner, NavBar}
}
</script>
