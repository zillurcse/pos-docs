<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2> Tender Change or Change Return</h2>
      <br>
      <p>
        Suppose during POS the total payment amount by a customer is $250, but the customer pays $300 cash. <br>

        In this case, the cashier needs to return $50 cash to the customer. <br>

        So, enter all these details in the system, follow the below steps:
      </p>
      <br>
      <ul>
        <li>Click on the <strong>“Multiple Pay”</strong> button. It will open a popup</li>
        <li>Enter the paid amount by the customer ($300 here)</li>
        <li>On the right side, it will show a “Change Return” Amount. This amount needs to be returned to the customer
        </li>
        <li>Click on finalize button to save the sales.</li>
      </ul>
      <br>
      <p>
        The change amount is shown in the invoice. To create a custom label for change return
        <br> <strong>Go to Settings -> Invoice</strong>
        layout change the ‘change return label’ to a required label and save the changes.
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