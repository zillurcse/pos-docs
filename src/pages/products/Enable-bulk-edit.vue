<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Enable bulk edit</h2>
      <br>
      <p>
        Open config/constants.php <br><br>

        change “enable_product_bulk_edit” false to true
      </p>
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