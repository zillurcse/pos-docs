<template>
    <div>
        <div v-if="loading">
          <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Setting Business Multiple Locations or Ware House or Storefronts</h2>
            <p class="my-8 text-base text-gray-700">
                POS comes with the option to handle multiple business locations or WareHouse or Storefronts for your
                business.
                <br> <br>
                A default location is added to the newly created business. <br><br>


                <strong>Invoice Scheme:</strong> Before creating a new location or storefront, you can define a new Invoice
                scheme or you can use existing invoice schemes. But having different invoice schemes for locations can help
                you to identify them. <br>
                Invoice Scheme is invoice number format.
                <router-link to="/red" class="text-sm  font-semibold  inline-block">( Read more)</router-link>
                <br> <br>
                <strong> Invoice Layout: </strong>If you wish to have a different invoice layout for the location then you
                should create an invoice layout before creating a new location.
                <router-link to="/red" class="text-sm  font-semibold  inline-block">( Read more)</router-link>
                <br><br>
                <strong> Default Selling Price Group: </strong> Select the selling price group that will be used in this
                location.
                <router-link to="/red" class="text-sm  font-semibold  inline-block">( Read more)</router-link>
                <br><br>
                <strong> Payment Options:</strong> <router-link to="/red"
                    class="text-sm  font-semibold  inline-block">Enable/disable payment methods and set default payment
                    methods</router-link> to different payment account.
                <br><br>
                You can always change invoice scheme & Invoice Layout for a Business location anytime.
            </p>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    To create a new Business Location / Storefront or warehouse go to “settings -> Business Locations”
                </li>
                <li class="my-4 text-base text-gray-700">
                    Fill the business details.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Choose an Invoice scheme & Invoice Layout for the location.
                </li>
            </ul>
            <p class="my-4 text-base text-gray-700">– When having multiple locations you will have to select the Location
                while adding purchases or in the pos screen.</p>
            <ul class="list-disc px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Inventory and transactions are managed separately for each location you create so that you can easily
                    track and analyze them for each location.
                </li>
            </ul>
            <br>
            <strong>Disabling Business Location:</strong>
            <br> 
            <p class="my-4 text-base text-gray-700">To disable a business location click on Disable button present in List
                Business Location.</p>

            <p class="my-4 text-base text-gray-700">
                <strong>NOTE 1:</strong> After a business location is disbabled any users assigned to that business location
                must be assigned to other non-disabled business location.
            </p>
        
            <p class="my-4 text-base text-gray-700">
                <strong>NOTE 2: </strong> You must keep atleast 1 business location non-disabled. If all business location is
                disabled then the application will throw errors
            </p>

        </div>
    </div>
</template>

<script>
import lodder from '../../components/Lodder.vue';
export default {
    components: {
        lodder
    },
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