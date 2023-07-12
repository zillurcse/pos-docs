<template>
    <div>
        <div v-if="loading">
            <div class="cui-loader cui-loader--content">
                <div class="cui-loader__page">



                    <div class="cui-loader__row">
                        <div class="cui-loader__row-img"></div>
                        <div class="cui-loader__row-items">
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                        </div>
                    </div>

                    <div class="cui-loader__row">
                        <div class="cui-loader__row-img"></div>
                        <div class="cui-loader__row-items">
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                        </div>
                    </div>

                    <div class="cui-loader__row">
                        <div class="cui-loader__row-img"></div>
                        <div class="cui-loader__row-items">
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                        </div>
                    </div>

                </div>
                <div class="cui-loader__page">



                    <div class="cui-loader__row">
                        <div class="cui-loader__row-img"></div>
                        <div class="cui-loader__row-items">
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                        </div>
                    </div>

                    <div class="cui-loader__row">
                        <div class="cui-loader__row-img"></div>
                        <div class="cui-loader__row-items">
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                        </div>
                    </div>

                    <div class="cui-loader__row">
                        <div class="cui-loader__row-img"></div>
                        <div class="cui-loader__row-items">
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                            <div class="cui-loader__row-item"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold mb-6">Resetting data, Deleting all data or transactions</h2>
            <h2 class="text-5xl text-brand font-bold mb-6">Deleting Products, Sales, Purchase, or any other transactions:
            </h2>
            <p class="my-4 text-base text-gray-700">
                To delete all transactions – check the list of that transaction (for example List Products), <br> in actions
                there
                will be an option to Delete it.
                <br><br>
                Use that to delete any such transactions
            </p>
            <h2 class="text-5xl text-brand font-bold mb-6">
                Reset all data
            </h2>
            <p class="my-4 text-base text-gray-700">
                The best way to reset all the business data is to use your existing <br> business as a test/dummy business
                and
                register a new business.
                <br><br>
                By registering a new business it will give a fresh start to your business data.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    components: {

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