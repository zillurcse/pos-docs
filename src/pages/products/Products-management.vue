<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold">Products Management</h2>
      <h3 class="text-4xl text-brand font-bold my-5">Adding Products</h3>

      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Go to – Products > Add Products.
          <ul class="list-disc px-8 ">
            <li class="my-4 text-base text-gray-700">
              Provide a Product Name,
              Brand,
              Units,
              Category
              Sub-category
              SKU: Add a unique SKU which will be used to identify the product & Print barcode in labels. Leave it empty
              to auto-generate it. You can also add a Prefix for auto-generated SKU.
            </li>
            <li class="my-4 text-base text-gray-700">
              <strong> Steps to change the default SKU length:</strong>
              In order to change the default SKU length, make the following simple change in the code. <br> 1. Open the
              file
              pos\app\Utils\ProductUtil.php. <br> 2. Search for the function ‘generateProductSku’. <br> 3. Change the
              default value <br>
              4 to any required length.
              <br>
              <strong>Barcode Type:</strong> Select a barcode type, default/recommended is C128 option. We recommend
              changing if only if
              the product added already have an SKU number for it.
              <br>
              <strong>Not For Selling:</strong> If a product is maked not-for-selling then it will not be displayed in POS
              or sales screen.
              This can be useful when using manufacturing module to make the ingredients as product not-for-selling also
              if you want to temporary disable selling for some products.
              <br>
              <strong>Alert Quantity:</strong> Alert quantity is used to alert when remaining stocks reaches to this level
              or below it.
              Manage stock: Enable/Disable stock management at a product level. Product stock management is not required
              for services like Repairing, Hair Cutting, Web Development Printing. For items with Manage Stock Unchecked
              (disabled), you can sell them in unlimited quantities. Selling of service using UltimatePOS
            </li>
          </ul>
        </li>
        <li class="my-4 text-base text-gray-700">
          <strong> Business Location:</strong> Select the business location(s) where this product can sold or purchased
        </li>
        <li class="my-4 text-base text-gray-700">
          Select Applicable tax for that product. Adding Tax
        </li>
        <li class="my-4 text-base text-gray-700">
          <strong> Product Type:</strong>
        </li>
      </ul>
      <h3 class="text-3xl text-brand font-bold my-5">Single Product:</h3>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Applicable for products with no variation with them then select single
        </li>
        <li class="my-4 text-base text-gray-700">When selecting Single product – You will need to enter the Default
          product price including/excluding tax, Profit Margin % (you can set default profit margin from settings ->
          Business Settings; this will help to type % every time). Based on the profit margin it will auto calculate
          selling price excluding of Tax. You can also enter the selling price manually and it will auto adjust the profit
          margin for you.</li>
      </ul>
      <h3 class="text-3xl text-brand font-bold my-5">Variable Product:</h3>
      <figure class="my-5">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/Variable-product-Add-new-product-700x317.png"
          alt="">
      </figure>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Applicable to a product having variations (like size or color or design or flavors etc) You can define variation
          templates from Products -> Variations. The advantage of creating variation is that it saves time to add same
          variations multiple time.
        </li>
        <li class="my-4 text-base text-gray-700">
          When selecting Variable product – It will display different fields to add all variations and its related
          Purchase price, Selling Price. You have to select the variations from the dropdown and it will auto-populate the
          variations for that template. You can change the variable name, Variation values.
        </li>
        <li class="my-4 text-base text-gray-700">
          🆕 To give same purchase price or selling price or profit for all variations of a product click on the double
          tick present in the first variation.
        </li>
      </ul>
      <figure class="my-5">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/Variable-product-Add-new-product-700x317.png"
          alt="">
      </figure>
      <p class="my-4 text-base text-gray-700">4.Read more about adding variations </p>
      <h3 class="text-3xl text-brand font-bold my-5">Combo or Bundle Product</h3>
      <figure class="my-5">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/combo-product-Add-new-product-768x358.png"
          alt="">
      </figure>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Combo product are also called bundle products.
        </li>
        <li class="my-4 text-base text-gray-700">
          It is offering several products as one combined product.
          For example a product “Computer Set” can have: 1 PC Monitor + 1 PC CPU + 1 Pc Keyboard + 1 PC mouse
          So when someone buys Computer set she gets all the products in it.
        </li>
        <li class="my-4 text-base text-gray-700">
          Stock of bundled product depends on stock of individual products present in that bundle.
          Example: if you have 5 PC Monitor, 4 PC CPU , 10 pc Keyboard, 50 PC mouse, the stock of Computer set will be 4
          PC.
        </li>
        <li class="my-4 text-base text-gray-700">
          When the bundle product is sold, stock of all products inside them is automatically deducted.
        </li>
        <li class="my-4 text-base text-gray-700">
          Individual products present in bundle product can also be sold separately.
        </li>
        <li class="my-4 text-base text-gray-700">
          Bundle products cannot be purchased, only individual products present in it can be purchased.
        </li>
      </ul>
      <p class="my-4 text-base text-gray-700">
        Click on Save.
        <br> <br>
        You can edit a product. You can also Copy / Export to CSV, PDF or Excel file.
      </p>
      <h2 class="text-5xl text-brand font-bold my-5">Adding Products with multiple variations:</h2>
      <p class="my-4 text-base text-gray-700">
        If you have products which involve multiple variations like for example a Shirt can have Color & Size variation,
        then we have multiple ways to work with it: <br> <br>


        <strong>Solution 1, Create combined variation:</strong> Can a variation with a name “Color-Size” and add values
        like Red-Small, Red-Medium, Red-Large, etc, this can be used for while adding the Shirt. <br><br>

        <strong>Solution 2, Create multiple Products:</strong> Create multiple different products like Shirt-Red,
        Shirt-Green, Shirt-Blue with size as variations. When you create multiple products you will NOT have to enter the
        same details multiple times, first, add the Shirt-Red with all size variations of it and then use the Duplicate
        Product action to copy the data. <br>
      </p>
      <h3 class="text-3xl text-brand font-bold my-5">Select Required variations:</h3>
      <p class="my-4 text-base text-gray-700">
        While adding variable products, you can select only the required variation values. <br> <br>

        In your add/edit product screen, select the product type as ‘variation’ and select the variation name (eg. color).
        <br> <br>
        A dropdown will be displayed, in which you can select the required variation values. <br> <br>
      </p>
      <figure class="my-5">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/variationvalues-800x381.png" alt="">
      </figure>
      <p class="my-4 text-base text-gray-700"> <strong>NOTE: </strong> This option is available only in POS version 5 and
        above.</p>
      <h2 class="text-5xl text-brand font-bold my-5">Assigning/remove locations of multiple products at once:</h2>
      <p class="my-4 text-base text-gray-700">Go to List Products and refer to this screenshot.</p>
      <figure class="my-5">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/multiple-Products-location.png" alt="">
      </figure>
      <h2 class="text-5xl text-brand font-bold my-5">Deactivating & Activating Product:</h2>
      <p class="my-4 text-base text-gray-700">Refer to the screenshot.</p>
      <figure class="my-5">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/activate-deactivate-product-600x214.png" alt="">
      </figure>
      <h3 class="text-4xl text-brand font-bold my-5">Using Product barcode:</h3>
      <p class="my-4 text-base text-gray-700">
        <strong> Question: </strong>
        <br> <br>
        How can we use the product’s barcode instead of creating and printing new for every product?
        How can we use the brand’s barcode of the product instead of creating and printing new for every product?
        <br> <br>

        <strong>Answer:</strong>

        When creating a product, in the SKU field enter the barcode number of the product. This barcode will be used to
        identify the product in all screens like POS, Sales, purchases, reports, and others.
      </p>
      <h3 class="text-4xl text-brand font-bold my-5">How to add a product that already has a Barcode?</h3>
      <p class="my-4 text-base text-gray-700">
        Adding products that already have a barcode, follow the same steps as adding any other products.
      </p>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Go to add products
        </li>
        <li class="my-4 text-base text-gray-700">
          Fill in all the product details
        </li>
        <li class="my-4 text-base text-gray-700">
          <strong>IMPORTANT:</strong> in the SKU field scan or enter the barcode of the product
        </li>
      </ul>
      <h2 class="text-4xl text-brand font-bold my-5">Adding product quantity or adding product stock</h2>
      <p class="my-4 text-base text-gray-700">
        For systematically managing your business, product quantities can be added in 3 ways:
      </p>
      <ul class="list-decimal px-8 ">
        <li class="my-4 text-base text-gray-700">
          Adding Opening stock
        </li>
        <li class="my-4 text-base text-gray-700">
          Adding purchases
        </li>
        <li class="my-4 text-base text-gray-700">
          Manufacturing product: Useful for manufacturers, required manufacturing module.
        </li>

      </ul>
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