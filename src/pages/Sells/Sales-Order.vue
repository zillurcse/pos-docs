<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Sales Order</h2><br> <br>
      <h3>What is a Sales Order?</h3>
      <br>
      <p>
        Sales Order is a document given by the supplier to the buyer against a Purchase Order by the buyer. <br><br>

        A sales order contains the buyer invoicing details, delivery details, products, quantities, pricing, tax,
        discounts, payment terms, payment details, shipping charges if any, and other notes. <br><br>

        Once the buyer agrees on the sales order, goods are shipped by the supplier. <br><br>

        Sale order has multiple statuses: Ordered, Partial, Completed
      </p>
      <br><br>
      <h3>Enabling Sales Order</h3>
      <br><br>
      <p>
        To enable Sales Order, follow the below steps:
      </p>
      <br>
      <ul>
        <li>Go to Settings -> Business Settings</li>
        <li>Sales tab -> Enable Sales Order</li>
        <li>Save it</li>

      </ul>
      <br>
      <h3>Using Sales Order in POS</h3>
      <br><br>
      <h4>Creating sales order</h4>
      <br><br>
      <p>
        After Enabling sales order, inside Sales you’ll find the Sales-Order menu. <br><br>

        Go to add sales order, fill in all the details and save it. <br><br>

        Stocks are not deducted for sales orders. <br><br>

        Once a sales order is created you can print it and send it to the buyer for approval.
      </p>
      <br><br>
      <h4>Converting Sales Order to Sales</h4>
      <br><br>
      <p>On approval of sales orders, you can create sales from the sales order.</p>
      <br><br>
      <ul>
        <li>Go to Sales -> Add sales, select the business location & Customer.</li>
        <li>On Selecting it will populate the list of all sales orders related to the customer on the “Sales Order”
          dropdown
        </li>
        <li>Select the Sales Order and it will auto load the products for that order with the product’s price, tax,
          discounts applied automatically as the sales order.
        </li>
        <li>You can increase or decrease the quantity. </li>


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