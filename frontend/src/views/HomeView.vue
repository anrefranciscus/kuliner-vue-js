<template>
  <div class="home">
    <div class="container">
      <hero-banner/>
      <div class="row mt-4">
        <div class="col">
          <h2 class="">Best <strong>Food</strong></h2>
        </div>
        <div class="col">
          <router-link to="/food" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye>
            Lihat Semua
          </router-link>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-md-3 mt-4" v-for="(product, index) in products" :key="index">
          <card-product :product="product "/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import CardProduct from "@/components/CardProduct.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import {mapActions} from "vuex";

export default {
  name: 'HomeView',
  components: {HeroBanner, CardProduct},
  computed: {
    products(){
      return this.$store.getters["product/productList"]
    }
  },
  methods: {
    ...mapActions({fetchProduct: "product/fetchAllProducts"})
  },
  mounted() {
    this.fetchProduct()
  }
}
</script>
