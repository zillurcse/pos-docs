<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Adding User & assigning location to a user</h2>
            <h2 class="text-5xl text-brand font-bold my-8">Adding User:</h2>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    User Management -> Users -> Add New
                </li>
                <li class="my-4 text-base text-gray-700">
                    Fill the user details, select user role, give a unique username.
                </li>
                <li class="my-4 text-base text-gray-700">
                    <strong>Sales Commission Percentage (%): Provide the commission % </strong>for this user. This option
                    gets applied if the commission agent feature is enabled. (Not available in UltimatePOS-LITE)
                </li>

                <li class="my-4 text-base text-gray-700">
                    <strong> Is active?:</strong> Activate/Deactivate the user
                </li>
                <li class="my-4 text-base text-gray-700">
                    You can edit/delete a user.
                </li>
            </ul>
            <h2 class="text-5xl text-brand font-bold my-8">Assing locations</h2>
            <p class="my-8 text-base text-gray-700">Refer to the image below</p>
            <h2 class="text-5xl text-brand font-bold my-8">Max sales discount:</h2>
            <p class="my-8 text-base text-gray-700">The maximum discount this user can give during sales in the POS & sales
                screen. If you don’t want to have this restriction then simply keep this value blank.</p>
            <h2 class="text-5xl text-brand font-bold my-8">Disable login</h2>
            <p class="my-8 text-base text-gray-700">Refer to the image below</p>
            <figure>
                <img src="../../assets//img/Edit_user.png" alt="">
            </figure>
        </div>

    </div>
</template>

<script>
const lodder = await import(`../../components/lodder.vue`)

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