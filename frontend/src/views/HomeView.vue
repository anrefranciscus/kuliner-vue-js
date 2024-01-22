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

      <div class="row mb-3">
        <div class="col-md-4 mt-d" v-for="(product, index) in products" :key="index">
          <card-product :product="product "/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: 'HomeView',
  components: {CardProduct},
  data() {
    return {
      products: []
    }
  },
  methods: {
    setProduct() {
      const url = `http://localhost:3000/api/v1/food/get-all`
      axios.get(url)
          .then((res) => {this.products = res.data})
          .catch((err) => {console.log(err)})
    }
  },
  mounted() {
    this.setProduct()
  }
}
</script>
