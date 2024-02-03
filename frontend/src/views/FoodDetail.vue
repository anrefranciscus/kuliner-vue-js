<template>
  <div class="food-detail">
    <div class="container">

      <div class="row mt-5">
        <div class="col">
          <b-breadcrumb class="breadcrumb" :items="breadCrumb"></b-breadcrumb>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <img :src="`/assets/images/${product.images}`" class="img-fluid shadow" alt="image food"/>
        </div>
        <div class="col-md-6">
          <h2><strong>{{product.foodName}}</strong></h2>
          <hr/>
          <h4>Harga Rp: {{product.price}}</h4>
          <form class="mt-4">
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesan</label>
              <input type="number" class="form-control" />
            </div>
            <div class="form-group">
              <label for="Keterangan">Keterangan</label>
              <textarea class="form-control" placeholder="Keterangan spt : Nasi Setengah..."></textarea>
            </div>
            <button type="submit" class="btn btn-success">
              <b-icon-cart></b-icon-cart>
              Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "FoodDetail",
  data() {
    return {
      breadCrumb: [
        {
          text: 'Home',
          active: false,
          href: '/'
        },
        {
          text: 'Food',
          active: false,
          href: '/food'
        },
        {
          text: 'Food Order',
          active: true,
        }
      ]
    }
  },
  computed: {
    product(){
      return this.$store.getters["product/product"]
    },
  },
  methods: {
    ...mapActions({getDetailProduct: "product/getDetailProduct"})
  },
  mounted() {
    this.getDetailProduct(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
