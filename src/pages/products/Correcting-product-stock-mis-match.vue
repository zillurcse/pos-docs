<template>
  <div>
    <h2 class="text-5xl text-brand font-bold">Correcting product stock mis-match or incorrect stock in different reports</h2>

    <p class="my-8 text-base text-gray-700"><strong>Error 1:</strong> Mismatch between sold and purchased quantity</p>
    <p class="my-8 text-base text-gray-700"><strong>Error 2:</strong> Mismatch in stock shows in Stock-Report and sales screen. Sales screen accepts products greater or less than as in stock reports.</p>
    
    <p class="my-8 text-base text-gray-700">This rarely happens because of some unknown reasons or if you try to manually update the stock in the database.</p>

    <h3 class="text-4xl text-brand font-bold">Solution:</h3>

    <p class="my-8 text-base text-gray-700">NOTE: You must have the role of admin for this to work.</p>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Step 1: Go to this URL  www.your-pos-website.com/reports/product-stock-details
      </li>
      <li class="my-4 text-base text-gray-700">
        Step 2: Select the business location and press search button. It will show the list of products for which there is a mismatch.
      </li>
      <li class="my-4 text-base text-gray-700">
        Step 3: Click on Fix button for each product.
      </li>
    </ul>

    <p class="my-8 text-base text-gray-700">Refer to the screenshot below</p>

    <img src="https://ultimatefosters.com/wp-content/uploads/2019/05/Stock-fix-768x319.png" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>