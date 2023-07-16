<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Registering your Business in POS</h2>
            <h2 class="text-5xl text-brand font-bold my-8">Registering a new business</h2>
            <ul class="list-decimal px-8 py-8">
                <li class="my-4 text-base text-gray-700">
                    Click on register business link on the welcome page.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Registering business involves multiple steps; Business Details, Tax details, and Owner details
                </li>
                <li class="my-4 text-base text-gray-700">
                    Business Details: Fill out the relevant fields; select the appropriate currency & Time zone; click on
                    Next. Time Zone & Currency can be different for different registered businesses.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Tax Details: You should fill out at least one Tax name and Tax number. Tax is like GST/VAT which varies
                    for different countries. Fill details & click on next.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Owner Details: Provide asked details. Username & Password are used to login so make sure you remember
                    them.
                </li>
                <li class="my-4 text-base text-gray-700">
                    The owner created during this registration will be admin of the business. More admin can be
                    added/edited/deleted from user management section.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Click on the register button and after successful registration, it will get redirected to login screen.
                    Login with owner username/password created.
                </li>

            </ul>
            <p class="my-4 text-base text-gray-700"><strong>Note:</strong> You can change any of the above details in the
                business settings section.</p>

            <h2 class="text-5xl text-brand font-bold my-8">Removing/Disabling register link:</h2>
            <p class="my-6 text-base text-gray-700">
                POS allows you to add multiple businesses. But many times you don’t want to allow external visitors to
                register there business. So you can disable registration by following these steps.
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