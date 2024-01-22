<template>
  <div>
    <div class="card">
      <img src="" class="card-img-top" alt="image-food"/>
      <div class="card-body">
        <h5 class="card-title">{{product.foodName}}</h5>
        <p class="card-text">{{product.price}}</p>
      </div>
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
  }
}
</script>
