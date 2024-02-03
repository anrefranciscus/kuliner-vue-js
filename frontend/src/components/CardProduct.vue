<template>
    <div class="card shadow card-product">
      <img :src="image" class="card-img-top" alt="image-food"/>
      <div class="card-body">
        <h5 class="card-title">{{product.foodName}}</h5>
        <p class="card-text">Harga: Rp. {{product.price}}</p>
        <router-link :to="`/food/${product.id}`" class="btn btn-success">
          <b-icon-cart></b-icon-cart>
          Pesan
        </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    image() {
      return `assets/images/${this.product.images}`
    }
  }
}
</script>
