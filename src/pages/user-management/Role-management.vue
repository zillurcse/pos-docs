<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Role Management</h2>
            <h2 class="text-5xl text-brand font-bold my-8">Adding Roles: </h2>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Every new business comes with some default roles – <strong>Admin & Cashier.
                        Admin</strong> have all permissions in the application. <strong>Cashier</strong> have permission to
                    only POS section.
                </li>
                <li class="my-4 text-base text-gray-700">
                    You can create a role by clicking on Add button -> Giving a role name and then selecting the appropriate
                    permission for that role.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Sometime you may need to give a user access to a/some particular location(s) only. In this case, select
                    the locations from “Access locations” permission. Select “All Locations” to give permission to access
                    all locations for your business.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Roles permissions can be edited & Deleted.
                </li>

            </ul>
            <p class="my-4 text-base text-gray-700"><strong>Note:</strong> You must update the role of an existing user
                before deleting a role.</p>
        </div>
    </div>
</template>

<script>
import lodder from '../../components/Lodder.vue'
export default {
    components: { lodder },
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