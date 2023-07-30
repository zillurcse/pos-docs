<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Featured Products in POS screen</h2>
      <br>
      <h3>Featured Products for POS screen</h3>
      <br>
      <p>
        Adding featured products helps you quickly access some products which are frequently or most commonly sold.
        <br>
        To add featured products follow these steps:
      </p>
    </div>
    <ul>
      <li>Go to Settings -> Business Locations</li>
      <li>Add/Edit any business locations</li>
      <li>In add/edit screen you can select multiple products that can be featured in pos for this location.</li>
    </ul>
    <br>

    <figure>
      <img src="https://ultimatefosters.com/wp-content/uploads/2020/05/Featured-products-700x289.png" alt="">
    </figure>
    <br>
    <p class="text-center">Select feature products in add/edit business locations</p>
    <br>
    <figure>
      <img src="https://ultimatefosters.com/wp-content/uploads/2020/05/Featured-products-pos-screen-1024x529.png" alt="">
    </figure>
    <br>
    <p class="text-center">Featured products in pos screen </p>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>