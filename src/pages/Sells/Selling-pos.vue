<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Selling (POS Screen), Credit Sales, Draft, Quotations & Suspended Sales.</h2>
      <br><br>
      <h3>Selling Products, Changing Product Price, Tax & Discount, Lot number & Expiry</h3>
      <br><br>
      <p>Go to – Sell -> POS</p>
      <h4>Selecting Customer:</h4>
      <br>
      <p>
        By default, there is “Walk-In Customer”. You can search for a customer by name/customer id or phone number or can
        add new customer by clicking the plus (+) button “Add Customer”.
      </p>
      <br>

      <h4>Searching & Adding Product:</h4>
      <br>

      <p>Enter Product Name Or scan the barcode to search the product. If multiple products are matched then it displays
        the dropdown of products, selects the product from it. Or if there is a single product then it directly gets added
        to cart.</p>
      <br>

      <h4>Changing Product Price, Tax & Discount for a product</h4>
      <br>
      <ul>
        <li>
          After the products get added, click on the product name to modify product price, tax & discounts. <br>
          <strong class="text-red-600">NOTE:</strong> Option for different tax in products will be shown only if
        </li>
        <li>
          Inline tax is enabled. You can enable it from Business <strong>Settings -> Tax</strong> -> Enable Inline Tax in
          purchase and sell
        </li>
      </ul>
      <br>
      <h4>Selecting Lot number for a product</h4>
      <ul>
        <li>
          If lot number is enabled then it will show the option to select lot number. <span
            class="text-blue-500">(Enabling Lot number)</span>
        </li>

      </ul>
      <br>
      <h4>Selecting Expiry for a product</h4>
      <br>
      <ul>
        <li>Expiry Date: If the expiry date is enabled then it will show the option to select lot number. <span
            class="text-blue-600"> (Enabling expiry)</span></li>
      </ul>
      <br>
      <h4>Cancel Sales:</h4>
      <br>
      <p>
        To cancel the sales click on the cancel button. Cancel invoices are not saved in the system, so no stock will de
        deducted.
      </p>
      <br>
      <h5>To finalize the invoice click on Finalize – Add the payment options and save it.</h5>
      <br>
      <p>

        On save it will display an invoice printing option. <br>

        NOTE: For invoice to print correctly – The Margins options should be set to “Default”. <br>

        List of sales can be viewed from Sell -> List Sales. <br>

        List of drafts can be viewed from Sell -> Drafts. <br>

        Both Sell & Drafts can be edited to make any changes. <br>

        <strong>Express Checkout:</strong> Express Checkout means the sale will be marked as Paid and the payment method
        will be cash. No separate payment screen will be displayed. Printing of invoice depends on the business location
        settings.
      </p>
      <figure class="my-8">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/UltimatePOS-pos-screen-buttons-1024x644.png"
          alt="">
      </figure>
      <br>
      <h3>100% Credit Sales</h3>
      <br>
      <ul>

        <li>To sell on credit to the customer you first need to enable this button by going to
          <strong>Settings -> Business Settings -> POS -> Show Credit Sale Button</strong>
        </li>
        <li>
          Then on the POS screen, you will be able to see a button “Credit Sale”, simply click this button to make sales
          on credit.
        </li>
      </ul>
      <br>
      <h3>Half Credit & half payment Sales:</h3>
      <br>
      <p>Suppose invoice amount is $1000, customers pays $700 cash and $300 is credit amount on him, then follow these
        steps:</p>
      <br>
      <ul>
        <li>Click on multiple pay button</li>
        <li>Select the payment method and enter the amount paid by the customer. ($700 in our example)</li>
        <li>Click finalize payment.</li>
        <li>Now, the pending amount is automatically added as credit amount on him (or amount to be taken from the
          customer)
        </li>
      </ul>
      <br>
      <h3>Previous sale amount in Sales:</h3>
      <br>
      <p>
        If a sale is made for the customer for a subsequent time for the same product, the previous amount in which the
        product is sold will be shown for reference in add sale screen.
      </p>
      <br>
      <figure>
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/previousprice-600x354.png" alt="">
      </figure>
      <br>
      <p>
        This feature can also be used for purchase of same products from a supplier.
        <br>
        NOTE: This feature is available in version 4.7.8 and above
      </p>
      <br>

      <h3>Draft & Quotation</h3>
      <br>
      <p>
        This is useful if you want to create a quotation before sales. <br>

        Marking a sales as Draft or Quotations will not deduct the available stock. <br>

        You can view all Quotations & Drafts from List Quotation or List Draft respectively. Existing draft/Quotation can
        be edited to make it as final sales.
      </p>
      <br>
      <h3>Convert Draft/Quotation to Sale invoice</h3>
      <br>
      <p>

        To convert a draft/quotation to sale invoice, follow the steps below <br>

        Go to List draft / List quotation. Click on the action button. <br>

        Select edit in the dropdown. <br>

        Change the status from draft/Quotation to Final and save it.
      </p>
      <br>
      <h4>Copy Quotation</h4>
      <br>
      <p>
        Quotations can be copied or duplicated.

        <strong>Go to Sale > List Quotations > Actions > Copy Quotation</strong>
      </p>
      <figure class="my-4">
        <img src="https://ultimatefosters.com/wp-content/uploads/2018/01/copyquotation-800x339.png" alt="">
      </figure>
      <br>

      <h4>Suspended Sales</h4>
      <br>
      <p>
        Suspend Sales means unfinished sale or hold Sale. <br>
        Suspended sales stock gets deducted from available stock. You can view all suspended sales by clicking on the
        Yellow Color button present in very top right of screen (above the date).
      </p>
      <br>

      <h4>Some Use Case of Suspended sales</h4>
      <br>
      <ul>
        <li>In a grocery store, if you have suspended button, you can suspend particular customers sales and entertain
          another customer, when his comeback you can proceed with his sale
        </li>
        <li>In Restaurant, you can suspend the order of customers if not yet paid, and finish it when they finish eating
          and paid their order, so you can proceed to final sales. You can put Table 1, Table 2, Table 3… so when they
          finish it’s easy to identify table 3 going to pay.
        </li>
        <li>In hotel lots of customers check in stay for 2 nights and order some foods and customers say, just charge to
          room 024. So you can suspend their orders and edit if there is some additional order and suspend again. Until
          final it when they pay their bills. on Hotel, on Reference Number: Room 009, Room 012
        </li>

      </ul>
      <br>
      <h4>Card / Multiple Pay / Cash</h4>
      <br>
      <ul>

        <li><strong>Multiple Pay:</strong> Used when the customer wants to pay with different payment methods like some
          amount by card, some by cash and some other payment methods. This option is also used when the customer doesn’t
          pay the exact tender amount and you need to calculate the Return Change.</li>
        <li><strong>Card:</strong> Used when the customer wants to pay the complete invoice by card.</li>
        <li><strong>Cash:</strong> Used when customer pay the exact amount of invoice by cash. If the customer pays less
          or more amount then the invoice amount then use Multiple Pay to get change return.</li>


      </ul>
      <br>
      <h4>Adding payments from Contact</h4>
      <br>
      <p><strong>Go to contact -> Suppliers.</strong> Click on actions for the supplier and it will show “Pay Due amount”,
        click on it and pay the amount. “Pay Due amount” this option is not displayed if there is no payment due.</p>
      <br>
      <h4>Adding/Editing Payment Method or Pay-Via</h4>
      <br>
      <p>Follow <span class="text-blue-500">Add/Edit Pay-Via / payment method.</span></p>
      <br>
      <h4>Rounding Mechanism for total Sales amount or total payable</h4>
      <br>
      <p>
        Rounding helps to round the total payable to nearest currency exchange available. <br>

        To enable rounding go to <strong>Settings -> Business Settings -> Sales</strong> and choose the Amount rounding
        method
      </p>
      <br>
      <h5>Amount rounding method</h5>
      <br>
      <ul>
        <li>Round to nearest whole number: It will round the paybale value to nearest whole number. For example 1.49 will
          be rounded to 1.00, and 1.51will be rounded to 2.00</li>
        <li>Round to nearest decimal (multiple of 0.05): It will round the paybale value to nearest decimal number which
          is multiple of 0.05. For example 1.49 will be rounded to 1.50, 1.51 will be rounded to 1.50, 1.59 will be
          rounded to 1.60, 1.54 will be rounded to 1.55
          Similary all other round to nearest decimal number works as per the multiplier.</li>
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