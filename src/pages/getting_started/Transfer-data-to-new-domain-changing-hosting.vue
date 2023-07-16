<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold mb-6">Transfer Data to new domain & Changing hosting (Migration)</h2>
            <h2 class="text-5xl text-brand font-bold my-4">Backup</h2>
            <p class="my-8 text-base text-gray-700">Before you start the process, it is advisable to take a backup.</p>
            <ul class="list-disc px-8 ">
                <li class="my-4 text-base text-gray-700">
                    You can either download the backup from the application backup feature
                </li>
                <li class="my-4 text-base text-gray-700">
                    Or take a backup of Database & public/uploads folder.
                </li>
            </ul>
            <h2 class="text-5xl text-brand font-bold my-4">Transferring to new Domain</h2>
            <p class="my-8 text-base text-gray-700">If you want to transfer from domain to another, for example, to transfer
                from example1.com to example2.com, follow these steps:</p>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">Point the new domain (example2.com) to the existing codebase.</li>
                <li class="my-4 text-base text-gray-700">Open the .env file and change the APP_URL to a new domain
                    (example2.com)</li>
            </ul>
            <p class="my-8 text-base text-gray-700">That’s all, now open example2.com and it will work.</p>
            <h2 class="text-5xl text-brand font-bold my-4">Changing hosting or move to a different hosting</h2>
            <p class="my-8 text-base text-gray-700">We recommend that you use one of these hostings:</p>
            <ul class="px-8 list-disc">
                <li class="text-base text-blue-600">Best hosting recommendation </li>
            </ul>
            <p class="my-8 text-base text-gray-700"> To move from one hosting to another, hosting-1 to hosting-2 follow
                these
                steps:</p>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Move the Codebase:
                    <ul class="list-decimal px-8 ">
                        <li class="my-4 text-base text-gray-700">
                            Zip the existing codebase of UltimatePOS from hosting-1
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            Upload it to hosting-2 and unzip it.
                        </li>
                    </ul>
                </li>
                <li class="my-4 text-base text-gray-700">
                    Move the database:
                    <ul class="list-decimal px-8 ">
                        <li class="my-4 text-base text-gray-700">
                            Export the database from hosting-1
                        </li>
                        <li class="my-4 text-base text-gray-700">
                            Import it to a new database in hosting-2
                        </li>
                    </ul>
                </li>
                <li class="my-4 text-base text-gray-700">
                    Point the domain to hosting-2 by changing the NameServer
                </li>
                <li class="my-4 text-base text-gray-700">
                    Open the .env file in hosting-2

                    <ul class="list-decimal px-8 ">
                        <li class="my-4 text-base text-gray-700">
                            Change database details, like <strong>DB_HOST, DB_DATABASE, DB_USERNAME, DB_PASSWORD</strong>
                        </li>

                    </ul>
                </li>
            </ul>
            <p class="my-4 text-base text-gray-700">That’all. If you also want to change the URL then follow the step
                mentioned
                in the first part.</p>
        </div>
    </div>
</template>

<script>
import Lodder from '../../components/Lodder.vue';
export default {
    components: {
        Lodder

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