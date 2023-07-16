<template>
    <div class="container mx-auto">
        <div class="flex justify-between my-14 ">
            <div class="w-[20%] bg-white  rounded-md p-4 h-fit">
                <div>
                    <div class="px-4 py-4  rounded-md flex justify-between items-center"
                        @click="is_open_getting_started = !is_open_getting_started">
                        <span class="text-base text-brand font-semibold">Getting Started</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open_getting_started ? 'rotate-90' : 'rotate-0'" stroke="currentColor"
                            class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                    <div class="overflow-hidden  transition-all duration-500 ease-in px-3"
                        :class="is_open_getting_started ? 'max-h-[300px]' : 'max-h-0'">
                        <div class=" py-2 ">
                            <router-link to="/businessDetails"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Setup Your Business Details
                            </router-link>
                        </div>

                        <div class=" py-2">
                            <router-link to="/disabling-registration-in-pos"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">Disabling
                                registration in POS
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/removing-public-from-url"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">Removing
                                /public from
                                URL</router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/transfer-data-to-new-domain-changing-hosting"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent"> Transfer
                                Data to new
                                domain &
                                Changing hosting (Migration)</router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/resetting-data"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Resetting data,Deleting all data or transactions
                            </router-link>
                        </div>

                    </div>
                    <div class=" px-4 py-4  rounded-md flex justify-between items-center"
                        @click="is_open_business_management = !is_open_business_management">
                        <span class="text-base text-brand font-semibold">Business Management</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open_business_management ? 'rotate-90' : 'rotate-0'" stroke="currentColor"
                            class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                    <div class="overflow-hidden  transition-all duration-500 ease-in px-3"
                        :class="is_open_business_management ? 'max-h-[300px]' : 'max-h-0'">
                        <div class=" py-2">
                            <router-link to="/registering-your-business-in-pos"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Registering your Business in POS
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/setting-business-multiple-locations-or-ware-house-or-storefronts"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Setting Business Multiple Locations or Ware House or Storefronts
                            </router-link>
                        </div>
                    </div>
                    <div class=" px-4 py-4  rounded-md flex justify-between items-center"
                        @click="is_open_user_management = !is_open_user_management">
                        <span class="text-base text-brand font-semibold">User Management</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open_user_management ? 'rotate-90' : 'rotate-0'" stroke="currentColor"
                            class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div class="overflow-hidden  transition-all duration-500 ease-in px-3"
                        :class="is_open_user_management ? 'max-h-[300px]' : 'max-h-0'">
                        <div class=" py-2">
                            <router-link to="/adding-user-assigning-location-to-a-user"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Adding User & assigning location to a user
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/role-management"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Role management
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/using-commission-agent-feature"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Using Commission Agent feature
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/adding-superadmin-user"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Adding superadmin user
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/change-password-from-database"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Change Username or Password from Database
                            </router-link>
                        </div>
                    </div>
                    <div class=" px-4 py-4  rounded-md flex justify-between items-center"
                        @click="is_open_contact_management = !is_open_contact_management">
                        <span class="text-base text-brand font-semibold">Contact Management</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open_contact_management ? 'rotate-90' : 'rotate-0'" stroke="currentColor"
                            class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div class="overflow-hidden  transition-all duration-500 ease-in px-3"
                        :class="is_open_contact_management ? 'max-h-[300px]' : 'max-h-0'">
                        <div class=" py-2">
                            <router-link to="/customer-supplier-ledger"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Customer & Supplier Ledger
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/opening-balance-and-payment"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Adding opening balance & payment

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/contacts-management"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Contacts Management (Supplier & Customers)
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/advanced-balance"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Advanced balance

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/opening-balance"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Opening balance
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/customer-groups"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Coustomer groups
                            </router-link>
                        </div>

                    </div>
                    <div class=" px-4 py-4  rounded-md flex justify-between items-center"
                        @click="is_open_products = !is_open_products">
                        <span class="text-base text-brand font-semibold"> Products</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open_products ? 'rotate-90' : 'rotate-0'" stroke="currentColor"
                            class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                    <div class="overflow-hidden  transition-all duration-500 ease-in px-3"
                        :class="is_open_products ? 'max-h-[900px]' : 'max-h-0'">
                        <div class=" py-2">
                            <router-link to="/Products-Management"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Products Management
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Export-Products"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Import/Export Products
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Delete-Product"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Delete Product (Bulk delete)
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Variations"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Variations
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Product-Units"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Product Units

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Product-Category"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Product Category (Categorizing products)
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Product-Stock-History"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Product stock history

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Product-Expiry-Related-Settings"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Product expiry and related settings.
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Lot-number"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Lot number

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Selling-Price-Groups"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Selling Price Groups (Sell in different prices: wholesale/retail or for different prices for
                                different locations)
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Product-Warranty"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Product Warranty

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Printing-Labels"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Printing Labels

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Duplicate-Product"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Duplicate Product
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Correcting-product-stock-mis-match"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Correcting product stock mis-match or incorrect stock in different reports

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Bulk-Edit-Products"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Bulk Edit Products

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Rack-Row-Position-Product"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Rack, Row & Position of product
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Opening-Stock"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Opening Stock

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Enable-bulk-edit"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">

                                Enable bulk edit
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Custom-labels-for-Products"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Custom Labels for Products

                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Bulk-Price-Update"
                                class="text-sm text-brand font-semibold px-4 border-l-[3px] border-transparent">
                                Bulk Price Update

                            </router-link>
                        </div>

                    </div>
                </div>
            </div>
            <div class="w-[75%] py-5">

                <router-view />


            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_open_getting_started: false,
            is_open_business_management: false,
            is_open_user_management: false,
            is_open_contact_management: false,
            is_open_products: false,

            isLoading: true
        }
    },
    updated() {
        // Simulate an asynchronous operation
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);


    }
}
</script>

<style  scoped>
.router-link-exact-active {
    border-left: 3px solid #2E2D4D;
}
</style>