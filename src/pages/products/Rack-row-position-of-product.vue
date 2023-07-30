<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Rack, Row & Position of product</h2>
      <div class="mt-6">
        <iframe width="799" height="450" src="https://www.youtube.com/embed/7OyqSR4GdfU"
          title="Point of sales: Easily search product in grocery, medical or other shops. Rack, Row &amp; Position"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>">

      </div>
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