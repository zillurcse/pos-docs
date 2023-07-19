<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
        <h2>Product stock history</h2> 
        <br> 
        <ul>
            <li>Go to Products > Product List</li>
            <li>Click on Actions > Product stock history</li>
        </ul>

        <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2021/01/ProductStockHistory-500x241.jpeg" alt="">
      </figure>
    </div>
    </div>

</template>
<script>
import Lodder from '../../components/Lodder.vue'
export default {
  components: { Lodder },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    if (this.loading === true) {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  }
}
</script>

<style></style>