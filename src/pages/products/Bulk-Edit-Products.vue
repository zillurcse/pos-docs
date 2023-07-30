<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2>Bulk Edit Products</h2>
            <p>
                Bulk edit helps you to edit multiple products at once and saves your time. <br><br>

                To edit multiple products follow the steps:
            </p>
            <ul>
                <li>
                    Go to Products -> List Products
                </li>
                <li>
                    Select the products you want to edit by clicking on the checkbox present in each product row.
                </li>
                <li>
                    Scroll down you will find the Bulk Edit option, click on it and you can edit the selected products.
                </li>
                <li>
                    Also, in the bulk edit screen you can add any other products to edit them.
                </li>
            </ul>
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