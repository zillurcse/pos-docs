<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold">Product Category (Categorizing products)</h2>
      <p class="my-4 text-base text-gray-700">
        Categorizing products helps you to easily manage and filter them in reports.
      </p>
      <h3 class="text-4xl text-brand font-bold">Adding Category & Sub-Category</h3>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Go to Product -> Categories -> Add

        </li>
        <li class="my-4 text-base text-gray-700">
          Add Category name, category code(HSN code)

        </li>
        <li class="my-4 text-base text-gray-700">
          If the category is sub-category select “Add as sub taxonomy” and select the parent category.

        </li>
      </ul>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/UltimatePOS-Categories.png" alt="">
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