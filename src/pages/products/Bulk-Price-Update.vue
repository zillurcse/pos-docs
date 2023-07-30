<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2>Bulk Price Update</h2>
            <p>
                Prices of products can be edited in bulk using this feature. <br><br>

                Go to Products > Update Price, and download the Excel file. <br><br>

                The Excel file contains the list of product names, SKUs, existing prices of products and selling group
                price(if
                available). <br><br>

                Update the prices of required products and upload the file and click submit. <br><br>

                <strong>NOTE: </strong>Make sure not change any product name, sku & headers <br><br>
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