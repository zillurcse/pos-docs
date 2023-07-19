<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold">Variations</h2>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Variations can be added from the <strong>Products -> Variations menu.</strong>
        </li>
        <li class="my-4 text-base text-gray-700">

        </li>These variations are used in variable products product.
      </ul>
      <p class="my-4 text-base text-gray-700">Example of variation is, for example, Jeans can have multiple colors, so add
        variations called Colors and provide the value for it. As given in the image below.</p>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2019/01/Variations-ultimatepos-600x494.png" alt="">
      </figure>
      <p class="my-4 text-base text-gray-700"><strong>NOTE:</strong> Delete variation option will not be shown for
        variations that are already used in some products</p>
      <h2 class="text-4xl text-brand font-bold">Adding Multiple Variations for Products</h2>

      <p class="my-4 text-base text-gray-700">
        If a product has more than one variation, for example, A shirt with size ‘M’ and brand ‘POLO’ or A book with pages
        30 and size long. <br> <br>

        Add the variation name and type as a combined variation. <br> <br>

        Eg: variation name : Size – Pages <br> <br>

        variation values – Long -30, Long -120, Long – 200, Small -30, Small – 120 etc.


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