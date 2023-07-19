<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold">Delete Product (Bulk delete)</h2>
      <h3 class="text-3xl text-brand font-bold my-8">Deleting Products</h3>
      <p class="my-4 text-base text-gray-700">
        Deleting of a product will remove the products from the database. <br> <br>

        <strong>NOTE:</strong> This delete will not work if the product have some transactions related to it. Transaction
        can be Opening Stock, Purchas, Sales or Stock transfer of the product. It will show some error like:
      </p>
      <ul class="list-disc px-8 ">
        <li class="my-4 text-base text-gray-700">
          Product can’t be deleted because purchases related to this product exist
        </li>
        <li class="my-4 text-base text-gray-700">
          Some products couldn’t be deleted because it has transaction related to it.

        </li>
      </ul>
      <h3 class="text-3xl text-brand font-bold my-8">Deleting individual product </h3>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2019/12/delete-product-pos-800x399.png" alt="">
      </figure>

      <h3 class="text-3xl text-brand font-bold my-8"> Bulk Delete multiple products </h3>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2019/12/delete-bulk-product-pos-700x312.png" alt="">
      </figure>

      <h3 class="text-3xl text-brand font-bold my-8">Delete product Errors:</h3>
      <h4 class="text-2xl text-brand font-bold my-8">
        Some products couldn’t be deleted because it has transaction related to it:
      </h4>
      <p class="">
        When a product has any transactions it cannot be deleted. <br> <br>

        Transactions can be either Sales, Purchase, or Adding opening stock. <br> <br>

        The best way to avoid such products is by deactivation them
      </p>
    </div>
  </div>
</template>

<script>
import Lodder from '../../components/Lodder.vue';
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