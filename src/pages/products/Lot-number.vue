<template>
  <div>
    <h2 class="text-5xl text-brand font-bold">What is Lot Number?</h2> <br><br>
    <h3 class="text-4xl text-brand font-bold">Enabling Lot Number</h3>
    <p class="my-8 text-base text-gray-700">
      To enable lot number go to, <strong>Settings -> Business Settings -> Purchases</strong> <br><br>Check the Enable Lot number checkbox and update settings.
    </p>
    <h3 class="text-4xl text-brand font-bold">Adding Lot number from Purchases</h3>
    <p class="my-8 text-base text-gray-700">If the lot number is enabled as described above then when adding purchase stock it will display the lot number field for entering the lot number.</p>

    <h3 class="text-4xl text-brand font-bold">Adding lot number from add opening Stock:</h3>

    <p class="my-8 text-base text-gray-700">If lot number is enabled then when adding opening stock it displays the input field to enter lot number.</p>

    <h3 class="text-4xl text-brand font-bold">Selling products from specific Lot</h3>

    <p class="my-8 text-base text-gray-700">Refer to the <strong><a href="#">POS selling documentation</a></strong> Lot number description.</p>

    <h3 class="text-4xl text-brand font-bold">Displaying product lot number in the invoice</h3>

    <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                  Make sure the lot number feature is enabled as mentioned above.
                </li>
                <li class="my-4 text-base text-gray-700">
                  Go to invoice layout and enable “Show lot number”
                </li>
                <li class="my-4 text-base text-gray-700">
                  If the lot number is added when adding Purchase or Opening stock then when making sales it will display the lot number & product expiry dropdown. Select the lot number which you want to sell.  Then in the print invoice, it will show the lot number.
                </li>
            </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>