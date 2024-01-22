<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <hero-banner/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeroBanner from "@/components/HeroBanner.vue";
export default {
  components: {HeroBanner, NavBar}
}
</script>
