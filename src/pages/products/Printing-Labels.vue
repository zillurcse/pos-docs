<template>
  <div>
    <h2 class="text-5xl text-brand font-bold">Printing Labels</h2>

    <p class="my-8 text-base text-gray-700">You can go to print label screen from multiple places:</p>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        <strong>From Products Sidebar menu Products -> Print Labels.</strong>
      </li>
      <li class="my-4 text-base text-gray-700">
        <strong>Go to Products -> View Products and click on Actions -> Labels. This will add the selected product to print label list.</strong>
      </li>
      <li class="my-4 text-base text-gray-700">
        <strong>Go to Purchases -> List Purchases and click on Actions -> Labels. This will add the products from the selected purchase to print label list.</strong>
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Printing Labels</h3>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Once you’re in print label screen, add the products for which you want to print labels by entering the name or barcode/sku id.
      </li>
      <li class="my-4 text-base text-gray-700">
        Adjust the quantity of each product’s label (No. of labels).
      </li>
      <li class="my-4 text-base text-gray-700">
        Select the information you want to display in labels by checking/unchecking the options under “Information to show in labels” heading.
      </li>
      <li class="my-4 text-base text-gray-700">
        Select the Barcode Setting according to your sticker. We have included some commonly used settings.
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp; You can add new setting from Settings -> Barcode Settings menu.
      </li>

      <li class="my-4 text-base text-gray-700">
        Click on Preview to view the labels.
      </li>
      <li class="my-4 text-base text-gray-700">
        If everything looks good you can click on Print button to print it.
        &nbsp;&nbsp;&nbsp;&nbsp; Note: You must set the Margins to ‘default’ in browser print window.
      </li>

      <li class="my-4 text-base text-gray-700">
        If some information is getting half displayed because of sticker size, then it is advised to hide them or better to use a 20 Labels Per sheet settings.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Error: Unsupported SKU id for the selected barcode type</h3>

    <p class="my-8 text-base text-gray-700">This error means the SKU provided by you when creating the product doesn’t satisfy the encoding as per barcode type. <br><br>The solution can be edit the product and change the barcode type as “Code 128” save & try printing the label again.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>