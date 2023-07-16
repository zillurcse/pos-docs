<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Adding superadmin user</h2>
            <h3 class="text-3xl text-brand font-bold my-8">Creating Superadmin user:</h3>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Login to the server from Cpanel or DirectAdmin or Plesk or Filezilla (FTP) or similar panels.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Open <strong>.env</strong> file with the file editor. <strong>.env</strong> file is present inside the
                    UltimatePOS directory
                </li>
                <li class="my-4 text-base text-gray-700">
                    Inside the env file, you will find <strong>“ADMINISTRATOR_USERNAMES”</strong> configuration. Add the
                    username <br> of the user which you want to make as superadmin.
                    <br>
                    Example if you want “user1” to be superadmin then add it like below:
                    <br>
                    <strong>ADMINISTRATOR_USERNAMES=”user1″</strong> 
                    <br>
                    <strong>NOTE:</strong> user1 mentioned here is for example only and the username is case sensitive.
                </li>
                <li class="my-4 text-base text-gray-700">
                    You have to add an already existing/signed up username here. <br> To add multiple users as superadmin you can
                    add them comma separated. <br>
                    <strong>ADMINISTRATOR_USERNAMES=”user1,user2,user3″</strong>
                </li>
            </ul>
            <p class="my-4 text-base text-gray-700">NOTE: If super admin user is added, that user can</p>
            <ul class="list-disc px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Access modules tab in side menubar
                </li>
                <li class="my-4 text-base text-gray-700">
                    Can enable backup – <router-link to="/eee" class="text-sm  font-semibold  inline-block">To enable backup using superadmin user</router-link>
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