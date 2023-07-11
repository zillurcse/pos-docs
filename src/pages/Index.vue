<template>
    <div class="container mx-auto">
        <div class="flex justify-between my-14 ">
            <div class="w-[18%] bg-white  rounded-md p-4 h-fit">
                <div>
                    <div class="px-4 py-4  rounded-md flex justify-between items-center" @click="is_open = !is_open">
                        <span class="text-base text-brand font-semibold">Getting Started</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open ? 'rotate-90' : 'rotate-0'" stroke="currentColor" class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                    <div class="overflow-hidden  transition-all duration-500 ease-in px-3"
                        :class="is_open ? 'max-h-[300px]' : 'max-h-0'">
                        <div class=" py-2 ">
                            <router-link to="/businessDetails" class="text-sm text-brand font-semibold px-4">
                                Setup Your Business Details
                            </router-link>
                        </div>

                        <div class=" py-2">
                            <router-link to="/disabling-registration-in-ultimate-pos" class="text-sm text-brand font-semibold px-4">Disabling
                                registration in  POS
                            </router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/removing-public-from-url" class="text-sm text-brand font-semibold px-4">Removing /public from
                                URL</router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Transfer" class="text-sm text-brand font-semibold px-4"> Transfer Data to new
                                domain &
                                Changing hosting (Migration)</router-link>
                        </div>
                        <div class=" py-2">
                            <router-link to="/Resetting" class="text-sm text-brand font-semibold px-4 "> Resetting data,
                                Deleting all
                                data
                                or transactions</router-link>
                        </div>

                    </div>
                    <div class=" px-4 py-4  rounded-md flex justify-between items-center" @click="is_open = !is_open">
                        <span class="text-base text-brand font-semibold">Business Management</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            :class="is_open ? 'rotate-90' : 'rotate-0'" stroke="currentColor" class="w-5 h-5 transition">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                    <div>
                        <div class=" py-2">
                            <router-link to="/exp" class="text-sm text-brand font-semibold px-4"> exp</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[78%] py-5">

                <router-view />


            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_open: false,
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