<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Custom Labels for Products</h2>
      <p>
        20 custom fields can be added for the product, these custom fields can be used while adding a new product. <br>
        <br>

        Custom fields can be anything related to the product like brand code, product code etc. <br> <br>

        To add this Go to <strong>Settings > Business Settings > Custom labels</strong> <br> <br>


        Provide the custom label name here.
      </p>
      <h3>
        Field Type for labels:

      </h3>
      <br>
      <p>
        The data type can be specified for each custom field. Select text, date picker or dropdown types.
        <br> <br>
        For dropdown add a line break after each option
      </p>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2023/06/customfield-700x304.png" alt="">
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