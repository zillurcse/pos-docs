<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Customer & Supplier Ledger</h2>
            <p class="my-8 text-base text-gray-700">To view customer or supplier ledger</p>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Go to Contacts -> Supplier/Customer and click on actions button
                </li>
                <li class="my-4 text-base text-gray-700">
                    In that you will be able to see Ledger for the customer or supplier.
                </li>
                <li class="my-4 text-base text-gray-700">
                    You can select a date-range and use the checkbox filters to show/hide certain transaction type.
                </li>
            </ul>
            <figure>
                <img src="../../assets/img/supplier.png" alt="">
            </figure>
            <h2 class="text-5xl text-brand font-bold my-8">Adding Discount for Customer/Supplier on Balance due:</h2>
            <p class="my-4 text-base text-gray-700">Discount for balance due amount can be added for customer/supplier.
                <br> <br>
                Click the add discount button on the customer/supplier ledger screen
            </p>
            <figure class="my-6">
                <img src="../../assets/img/ledgeradddiscount.png" alt="">
            </figure>
            <p class="my-4 text-base text-gray-700">On clicking the button it shows a popup, enter the details and click
                save.
                <br> <br>
                The discounted amount will be accounted for in their ledger.
            </p>
            <figure class="my-6">
                <img src="../../assets/img/ledgerdiscountdetails-600x334.png" alt="">
            </figure>
            <p class="my-4 text-base text-gray-700"><strong>NOTE:</strong> This discount can only be added by the admin and
                not by other users.</p>
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