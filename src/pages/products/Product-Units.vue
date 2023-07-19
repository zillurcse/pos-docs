<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold">Product Units</h2>
      <p class="my-8 text-base text-gray-700">Different Products have different units. ultimatePOS allows you to add
        different units for products.</p>
      <h3 class="text-4xl text-brand font-bold">
        Adding Units
      </h3>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Go to Products -> Units
        </li>
        <li class="my-4 text-base text-gray-700">
          Give the unit name, a short name, and choose if want the unit to allow decimals.
        </li>
      </ul>
      <p class="my-4 text-base text-gray-700">
        Example: <br>
        <strong>Name:</strong> Meter <br>
        <strong>Shortname:</strong> Mtr. <br>
        <strong>Allow Decimal:</strong> Yes. <br> <br>

        Allowing decimal allows you to purchase/Sell the product in decimal and vice-versa.
      </p>
      <h3 class="text-4xl text-brand font-bold">
        Multiple Units:

      </h3>
      <p class="my-4 text-base text-gray-700">
        This can be useful if you purchase products in a different unit and sell it in a different unit. <br> <br>

        For example: Purchase in dozens and sell in pieces.
        Or purchase in boxes and sell in pieces.
      </p>
      <strong>
        Steps:
      </strong>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Add the lower unit from Add Unit Screen. For example pieces
        </li>
        <li class="my-4 text-base text-gray-700">
          Add the higher unit as per the screenshot:
          <ul class="list-decimal px-8 ">
            <li class="my-4 text-base text-gray-700">
              Check “Add as multiple of another unit”
              <figure class="m-8">
                <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/multiple-units-400x346.png" alt="">
              </figure>
            </li>
            <li class="my-4 text-base text-gray-700">
              Provide the conversion Details.
            </li>
          </ul>
        </li>
        <li class="my-4 text-base text-gray-700">
          Use the unit in Add/Edit Product. While adding/editing purchase/ sale you can see the dropdown for units. Select
          the desired unit and it will change the unit purchase/sales price accordingly.
        </li>
      </ul>
      <p class="my-4 text-base text-gray-700">
        <strong> NOTE:</strong> You will not see the main Units (Dozen in this example) in the Add-Product Unit dropdown,
        select piece as the unit of product. All purchases/sales get saved in the lower unit (pieces in the above
        example). So after adding purchases/sales if you edit the conversion details, it will affect the purchases/sales
        quantity accordingly.
      </p>
      <h3 class="text-4xl text-brand font-bold">
        Selecting relevant Sub Units for a product

      </h3>
      <p class="my-4 text-base text-gray-700">
        For some products not all sub-units will be required. Suppose for example you sell Oranges only in Dozens or only
        in pieces then it will be useful. <br><br>

        Enable it from Business settings ->Products -> Enable relevant sub-units <br><br>

        Now when adding products select the Unit for the products and it will give option to select multiple applicable
        sub-units. Selecting the sub-units will allow you to do purchases or sales on this selected sub-units.
      </p>
      <h3 class="text-4xl text-brand font-bold">
        Secondary Units:
      </h3>
      <p class="my-4 text-base text-gray-700">
        Secondary units can be added to products. A secondary unit can be used if a particular product’s subunit may vary
        each time. For example, 1 piece of stone can be 10 kg or 20 kg, or 30 kg. <br> <br>

        To enable this go to Settings-> Business Settings – > Products.
      </p>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/enablesecunit-600x314.png" alt="">
      </figure>
      <p class="my-4 text-base text-gray-700">On enabling this, a secondary unit label will be shown in add/edit products
        screen.

      </p>
      <figure class="m-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/addeditsecunit-700x332.png" alt="">
      </figure>
      <p class="my-4 text-base text-gray-700">
        Selecting this product in the purchase/sale/POS screen will also show the secondary unit label. <br><br>

        The details of secondary units for products are shown in the product stock history of that product. <br><br>

        <strong>NOTE:</strong> The secondary unit is not considered for calculation. It is only used for the user’s
        knowledge of tracking the products with varying subunits. <br><br>

        <strong>NOTE:</strong> Available only in version 4.7.8 and above.
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