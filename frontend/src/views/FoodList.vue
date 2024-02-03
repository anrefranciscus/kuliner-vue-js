<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h2>Daftar <strong>Makanan</strong></h2>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Cari Makanan Kesukaan Anda..."
            aria-label="Cari"
          />
          <div class="input-group-prepend">
            <span class="input-group-text">
              <b-icon-search></b-icon-search>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-3 mt-4" v-for="(product, index) in products" :key="index">
        <card-product :product="product "/>
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import {mapActions} from "vuex";

export default {
  name: "FoodsList",
  components: {CardProduct},
  data(){
    return {
    }
  },
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

<style scoped>

</style>
