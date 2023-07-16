<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">
                Setup Your Business Details


            </h2>
            <ul class="list-decimal px-5 py-4">
                <li class="my-4 text-base text-gray-700">
                    After login, you will be redirected to the homepage.
                    The first thing you should do it setup your business details so that the system works according to you.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Setup your business by adding below mentioned details:
                    <ul class="list-decimal px-5">
                        <li class="my-4 text-base text-gray-700"> <strong>Brand:</strong> Add all the brands.</li>
                        <li class="my-4 text-base text-gray-700"><strong>Tax Rates:</strong> Setup taxes and tax groups.
                            <router-link to="/red" class="text-sm  font-semibold  inline-block">
                                ( Read more)
                            </router-link>
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            <strong>Units:</strong>
                            Add product units (pieces, meters,Litre etc)
                            <router-link to="/red" class="text-sm  font-semibold  inline-block">
                                ( Read more)
                            </router-link>
                        </li>

                        <li class="my-4 text-base text-gray-700">
                            <strong>Categories: </strong>
                            Add categories & Sub-Categories
                            <router-link to="/red" class="text-sm  font-semibold  inline-block">
                                ( Read more)
                            </router-link>
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            <strong>Business Settings:</strong>
                            Add some more details about
                            your business. The more information you provide the better it will for you.
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            <strong>Business Location:</strong>
                            (Only available in POS-ADVANCE) Add Multiple business locations/ storefront/warehouse
                            <router-link to="/red" class="text-sm  font-semibold  inline-block">
                                ( Read more)
                            </router-link>
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            <strong>Barcode Settings:</strong>
                            Setup the barcode sticker details for printing labels.
                            <router-link to="/red" class="text-sm  font-semibold  inline-block">
                                ( Read more)
                            </router-link>
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            <strong>Invoice Settings: </strong>
                            Customise invoice number as per your need. You can customize the invoice number/scheme and also
                            invoice layouts.
                        </li>

                    </ul>
                </li>


            </ul>

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