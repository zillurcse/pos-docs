<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Sales Return</h2>
      <br>
      <p>There are 2 ways of adding sales return</p>
      <br>
      <h3>First way:</h3>
      <br>
      <p>
        Edit existing invoice for the sales by going to edit the invoice and remove the product or reduce the quantity of
        the product. And save it. The system will automatically add the returned quantity back to stock. This is a simple
        & recommended way of doing.
      </p>
      <br>
      <h3>Second Way:</h3>
      <br>
      <p>Follow the screenshot below:</p>
      <figure class="my-4">
        <img src="https://ultimatefosters.com/wp-content/uploads/2019/04/sales-return-768x374.png" alt="">
      </figure>
      <br>
      <h4>
        Question: Why sell return value not decrease the payment value from the parent invoice?
      </h4>
      <ul>
        <li>UltimatePOS will adjust these values in the Profit & Loss report.</li>
        <li>Regarding payment, users have to add a transaction for receiving payment from the customer and then paying
          them back. This way all the transactions are recorded.</li>


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