<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <footer-page/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {FooterPage, NavBar}
}
</script>
