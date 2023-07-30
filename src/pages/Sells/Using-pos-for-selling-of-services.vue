<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <h2>Using Ultimate POS for Selling of Services</h2>
      <br>
      <p> POS can be used:</p>
      <br>
      <ul>
        <li>Exclusively for Services or</li>
        <li>Exclusively for Product Selling (trading) Or</li>
        <li>Combination of Services & selling of Products.</li>
      </ul>
    <br>
      <p class="border-l-2 border-blue-500 p-2">
        Services are Intangible products. <br>
<br>
        Example: Repairing, Salon & Spa services, Web Development, Accounting, banking, cleaning, consultancy, education,
        insurance, expertise, medical treatment, transportation and a lot more
      </p>
    <br>
      <ul>
        <li>To add service <strong>Go to Add New Products.</strong></li>
        <li>Add the name of your Service, Like Computer Repair, Accounting, E-Commerce Development, Consulting, Plumber,
          Saving, Hair Cutting, etc.</li>
        <li>While adding service-based products uncheck the <strong> “Manage Stock?“</strong> option. When Manage stock is
          unchecked or disabled the stock for such products is not managed, because such a product doesn’t have a stock
          count with it.</li>
        <li>If you want to add a description for such service like for example in computer repair you want to describe the
          problem for such service then <strong>check</strong> the <strong>“Enable Product description, IMEI or Serial
            Number”</strong> checkbox.
          <p>Now to create invoice or receipt for such service</p>
          <br>
          <ul>
            <li>Go to Add Sales or POS screen.</li>
            <li>Enter the name of the service.</li>
            <li> If you have enabled <strong>“Enable Product description, IMEI or Serial Number”</strong>, then it will
              show you a popup to add a description. If you haven’t enabled description you can click on the button as
              shown the image below</li>
            <li>
              To print the description in the invoice, go to <strong>Setting -> Invoice Settings -> Invoice
                Layout</strong>. And click on the layout you’re using. Enable “<strong>Show sale description“</strong>.
              And Click on “Update” to update the invoice layout.
              Now it will display the Description you entered on the invoice or receipt.
            </li>
          </ul>
        </li>
  
      </ul>
    <h3>Video demo</h3>
      <br>
      <iframe width="600" height="360" src="https://www.youtube.com/embed/wriOx60G6pc" title="Selling of services in UltimatePOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <!-- <video src="https://www.youtube.com/watch?v=nktyhG-MTqc&ab_channel=UltimateFosters" autoplay></video> -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style></style>