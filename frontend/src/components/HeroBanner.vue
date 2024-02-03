<template>
  <div class="hero">
<!--   Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Food Menu,</strong> <br/>in your Gadget</h2>
              <p>Ayo segerah pilih dan pesan makanan favorit anda</p>
              <router-link to="/food" class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>
                Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" alt="images" width="100%"/>
        </div>
      </div>
    </div>

    <!--  Mobile -->

    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img src="../assets/images/hero.png" alt="images" width="100%"/>
        </div>
        <div class="col-md-6 mb-3">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Delicious Food Menu,</strong> <br/>in your Gadget</h2>
              <p>Ayo segerah pilih dan pesan makanan favorit anda</p>
              <router-link to="/food" class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>
                Pesan
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner"
}
</script>
