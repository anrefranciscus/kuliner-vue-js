<template>
  <div class="home">
    <div class="container">

      <div class="row mt-4">
        <div class="col">
          <h2 class="">Best <strong>Food</strong></h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
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
import FoodService from "@/usecases/FoodService";

export default {
  name: 'HomeView',
  components: {CardProduct},
  data() {
    return {
      products: []
    }
  },
  methods: {
    async setProduct() {
      const response = await FoodService.get()
      if(response.status === 200) {
        this.products = response.data
      }
    }
  },
  mounted() {
    this.setProduct()
  }
}
</script>
