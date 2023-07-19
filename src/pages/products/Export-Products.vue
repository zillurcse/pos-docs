<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold">Import/Export Products</h2>
      <h3 class="text-4xl text-brand font-bold my-8">Import Products:</h3>
      <h3 class="text-3xl text-brand font-bold">Steps:</h3>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Go to Products -> Import Products
        </li>
        <li class="my-4 text-base text-gray-700">
          Download the template file.
        </li>
        <li class="my-4 text-base text-gray-700">
          Fill all the information as per the displayed columns name & instructions. Don’t remove the heading from
          template file.
        </li>
        <li class="my-4 text-base text-gray-700">
          Import the file
        </li>
      </ul>
      <h3 class="text-3xl text-brand font-bold my-8">Common Errors:</h3>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          <strong>Error:</strong> UNIT not found <br>
          <strong>Solution:</strong> Make sure the unit you provided in excel file is already present in the system. Go to
          Products -> Units, add the unit & import the file again.
        </li>
        <li class="my-4 text-base text-gray-700">
          <strong> Error:</strong> The separation symbol could not be found the separation symbol could. <br>
          <strong>Solution:</strong> Format your cells in excel as text in your excel for the expiry date field and give
          the date as specified(11-25-2018).
        </li>

      </ul>
      <figure class="my-6 mx-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2020/03/formatcells-500x440.png" alt="">
      </figure>
      <h3 class="text-3xl text-brand font-bold my-8">Not well-defined error:</h3>
      <p class="my-4 text-base text-gray-700">
        Many times it can show some not well-defined errors like “non-numeric value encounter” or others <br> <br>

        In this case, the best way is to split your import into multiple files. <br> <br>

        For example, if you’re importing fil with 500 products, divide it into 2 files of 250 each and import it.
      </p>
      <h3 class="text-4xl text-brand font-bold my-8">Export Products:</h3>
      <p class="my-4 text-base text-gray-700">
        The products can be exported in excel/pdf formats from the list products screen. <br> <br>

        In version 4.7.8, a new export feature is added to export the product in the same template as the import product
        template. <br> <br>

        In the list products screen, click the download excel button.
      </p>
      <figure class="my-6 mx-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2020/03/exportprod-600x310.png" alt="">
      </figure>
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