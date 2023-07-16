<template>
  <div>
    <h2 class="text-5xl text-brand font-bold">Selling Price Groups (Sell in different prices: wholesale/retail or for different prices for different locations)</h2>
    <strong>With UltimatePOS we aim to make it “One in All” POS/Stock Management Application.</strong>
    <p class="my-8 text-base text-gray-700">Selling price groups allow you to add different prices for a product.</p>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Sell at different prices: wholesale/retail
      </li>
      <li class="my-4 text-base text-gray-700">
        Different prices for different locations.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Adding Selling Price Groups:</h3>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Go to <strong>products -> Selling Price Group</strong>
      </li>
      <li class="my-4 text-base text-gray-700">
        Click on “Add” button to add a new price group. For example Retail price or WholeSale price or Bulk Purchase price or Location 1 price etc as per your wish.
      </li>
      <li class="my-4 text-base text-gray-700">
        You can view a list of selling prices in “Selling Price Group” screen.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Adding Selling Price as either Fixed or Percentage:</h3>

    <p class="my-8 text-base text-gray-700">The selling price can be given as a whole number (fixed) or in percentage.</p>
    <p class="my-8 text-base text-gray-700"><strong>Fixed:</strong> The value given will be the selling price for that group.</p>
    <p class="my-8 text-base text-gray-700"><strong>Percentage:</strong> The value given will be taken as a percentage, and that percentage of the actual selling price will be taken as the selling price for that group.</p>

    <img src="https://ultimatefosters.com/wp-content/uploads/2018/09/sellingprice-700x350.png" alt="">

    <h3 class="text-4xl text-brand font-bold">Adding price for different price groups:</h3>

    <img src="https://ultimatefosters.com/wp-content/uploads/2018/09/Selling-Price-Group-ultimatepos-1024x501.png" alt="">

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Go to <strong>Products -> Update Price.</strong>
      </li>
      <li class="my-4 text-base text-gray-700">
        First, download the Excel file by clicking on the “Export Product Prices” button. There will be a separate column for group price.
      </li>
      <li class="my-4 text-base text-gray-700">
        In the downloaded file change the price for the selling price group of the products.
        <ul class="list-decimal px-8 ">
          <li class="my-4 text-base text-gray-700">Only selling price group prices of the product will be updated, not the SKU or name.</li>
          <li class="my-4 text-base text-gray-700">Any blank price will be skipped.</li>
        </ul>
      </li>

      <li class="my-4 text-base text-gray-700">Then import the file.</li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Selling at a particular price group:</h3>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Go to POS.
      </li>
      <li class="my-4 text-base text-gray-700">
        In the top, you will see the list of selling price groups. Select the one as per your requirement.
        <br><br> &nbsp;&nbsp;&nbsp;&nbsp;Note: This will not be visible if there are no selling price groups or if a user is assigned only one particular price group only.

      </li>
      <li class="my-4 text-base text-gray-700">
        Select the prie group & the selling prices for the product will be as per the price group.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Assigning a user to a particular price group:</h3>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Sometime you may want to assign a particular or few selected price group to a user. In that case, create a role with the desired permission & price group assigned.
      </li>
      <li class="my-4 text-base text-gray-700">
        You must assign at least one price group for a role if that role has permission to sell.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Assigning a customer to a particular price group:</h3>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Customers can’t be directly assigned to the selling price group.
      </li>
      <li class="my-4 text-base text-gray-700">
        You must assign the price group to the customer group that has the customer.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">Assigning a price group to a Business Location</h3>

    <ul class="list-decimal px-8 ">
      <li class="my-4 text-base text-gray-700">
        Helps selling same product at a different price in different business location
      </li>
      <li class="my-4 text-base text-gray-700">
        Go to Add/Edit Business Location and select the <strong>Default Selling Price Group</strong>, if not selected then products default price will be used.
      </li>
    </ul>

    <h3 class="text-4xl text-brand font-bold">FAQ?</h3>

    <h3 class="text-4xl text-brand font-bold">1. How to hide the Selling Price Group in POS window to all cashiers</h3>

    <p class="my-8 text-base text-gray-700">In add/edit roles you can set which all selling price groups will be visible to that role. So in the cashier role, you can uncheck/remove permission for all other selling price groups except the one you want to show or use for the cashier.</p>

    <h3 class="text-4xl text-brand font-bold">Video Demonstration</h3>

    <video src="https://www.youtube.com/watch?v=nktyhG-MTqc&ab_channel=UltimateFosters" autoplay></video>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>