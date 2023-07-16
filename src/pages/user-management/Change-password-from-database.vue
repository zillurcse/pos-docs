<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Change Username or Password from Database</h2>
            <p class="my-8 text-base text-gray-700">To reset password or change password from database, do this:</p>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Open PHPMyAdmin
                </li>
                <li class="my-4 text-base text-gray-700">
                    Go to POS database
                </li>
                <li class="my-4 text-base text-gray-700">
                    Open <strong>users table</strong>
                </li>
                <li class="my-4 text-base text-gray-700">
                    For the user for which you want to change the password, <strong>in the password field put</strong>
                    <br>
                    $2y$10$3YV4RYxkYC1pBLQt8NKY4eYnhQmC0Fhk7vnMNd8Y.BIM1WwC5E7dK
                </li>
                <li class="my-4 text-base text-gray-700">
                    The password will get changed to <strong>123456</strong>
                </li>
            </ul>
            <h3 class="text-3xl text-brand font-bold my-8">Changing Username:</h3>
            <p class="my-4 text-base text-gray-700">
                Username once added can’t be edited from the interface.
                <br> <br>
                However, you can change it from the users’ table in the database.
                <br> <br>
                Search for the needed user name in the table and change it to required.
                <br> <br>
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