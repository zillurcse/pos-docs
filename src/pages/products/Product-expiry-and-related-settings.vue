<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Product expiry and related settings.</h2>
      <br>
      <h3>Enabling expiry for products</h3>
      <ul>
        <li>
          To enable expiry go to <strong>Settings -> Business Settings -> Product section</strong>. And check the “Enable
          Product Expiry” checkbox.
        </li>
        <li>
          On enabling Product expiry, you can choose either “Add Item Expiry” or “Add manufacturing date & Expiry Period”
          <figure class="m-8">
            <img src="https://ultimatefosters.com/wp-content/uploads/2018/03/product-expiry-settings-700x313.png" alt="">
          </figure>
          <ul>
            <li>
              <strong>“Add Item expiry” </strong>=> Choose this option if you want to directly add the expiry of the item
              to the purchase screen.
            </li>
            <li>
              <strong>“Add manufacturing date & Expiry date”</strong> => Choose this option if you want to add the
              manufacturing date of the item and the expiry period. Based on the manufacturing date and expiry period it
              will auto-calculate the expiry date. And this expiry date can be edited. You will have to add expiry period
              for the product in the “Add or Edit Product” screen. And the manufacturing date in the “Add Purchase”
              screen.
            </li>
          </ul>
        </li>
        <li>
          <strong>“On Product Expiry”</strong> => With this option you can set what the system should do when a product
          expired.
          <ul>
            <li>
              <strong>“Keep Selling” </strong>=> Choose this option if you want the application to keep selling the
              product even after expiry.
            </li>
            <li>
              <strong>“Stop Selling n days before”</strong> => Choose this option to stop selling the item n days before
              the expiry. You will have to specify the value of n (which is the number of days before to stop selling)
            </li>
            <li>
              <strong>“Stock Accounting Method” </strong>=> This feature is used to set the way the product should be
              sold.
              <ul>
                <li><strong>FIFO (First In First Out)</strong> => In this the old stock should be sold first.</li>
                <li><strong>LIFO (Last In First Out) </strong>=> In this the most recent purchase stock should be sold.
                </li>

              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>For an Example:</p>
      <ul>
        <li>
          Purchase 20 pcs of product A on 20 March 2018. Expiry date 10 April 2018
        </li>
        <li>Purchase 20 pcs of the same product A on 23 March 2018. Expiry date 8 April 2018</li>
        <li>Today I sold 22 pcs.
          If the “Stock Accounting Method” is FIFO => Then the Product purchased on 20 March 2018 will be deduced with 20
          pcs and after that product purchase on 23 March 2018 will be deduced with 2 pcs. <br>So in stock, we will have
          products from 23 March 2018 with 18 pcs.
          If the “Stock Accounting Method” is LIFO => The opposite of the above will happen. <br>
          <strong> NOTE:</strong> You must set the required accounting method before selling the item for that accounting
          method to be used.
        </li>



      </ul>
      <h2>Stock Expiry Report:</h2>
      <br>
      <ul>
        <li>Go to Reports => Stock Expiry Reports.</li>
        <li> Here you can filter stock “Category”, Brands, “Stock expiry date”</li>

        <li><strong>Click on “Edit” to modify the stock left and expiry period.</strong></li>
        <li><strong> If stock left is decreased the unit purchase price is adjusted accordingly.</strong></li>

      </ul>
      <h2>Stock Expiry Alert:</h2>
      <p>
        – You can view stock expiry alert in Homepage bottom section. Here it shows a list of products expiring soon. <br>
        – You can set the number of days before which the expiry alter should be shown in the Homepage from
        <strong>“Settings -> Business Settings -> Dashboard Section”</strong> View Stock Expiry Alert For input field.
      </p>
      <h3>
        Displaying product expiry date in the invoice
      </h3>
      <ul>
        <li>Make sure the product expiry feature is enabled as mentioned above.</li>
        <li>Go to invoice layout and enable “Show Product expiry”</li>
        <li>If the product expiry date is added when adding Purchase or Opening stock then when making sales it will
          display the product expiry dropdown. Select the expiry date which you want to sell. Then in the print invoice,
          it will show the expiry date</li>
      </ul>
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