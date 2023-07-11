<template>
    <div>
        <h2 class="text-5xl text-brand font-bold mb-4">
            Disabling registration in POS
        </h2>

        <p class="my-5 text-base text-gray-700">
            POS allows you to create unlimited numbers of businesses or shops. All of them can use the application at once.
            <br>
            <br>
            But sometime you may like to disable the registration to prevent usage of the application by outsiders without
            your knowledge.
        </p>
        <h2 class="text-5xl text-brand font-bold my-4">
            Easy steps if you have superadmin module:
        </h2>
        <p class="my-5 text-base text-gray-700">
            This step applied if you have superadmin module installed.
            <br>
            <br>
            Go to superadmin settings -> Application Settings -> Uncheck the “Allow Registration” checkbox and click on the
            update button.
        </p>

        <div>
            <h2 class="text-5xl text-brand font-bold my-4">Without superadmin modules:</h2>

            <ul class="list-decimal px-5 py-4">
                <li class="my-4 text-base text-gray-700">
                    Open .env (not .env.example) present in your codebase.
                </li>
                <li class="my-4 text-base text-gray-700">
                    Scroll down to the bottom of the file. Here you will find a setting which
                    says"ALLOW_REGISTRATION=true"Change that setting to"ALLOW_REGISTRATION=false"
                </li>
            </ul>
            <p class="my-5 text-base text-gray-700">All done. Now it will not show the registration link and will not even
                open the registration page.</p>
            <p class="my-5 text-base text-gray-700">
                <strong>Note:</strong> To register your own business simply change it to "ALLOW_REGISTRATION=true"
                <br> <br>
                If you’re using cpanel to edit the file then it will not show hidden files (.env is hidden). So in the file
                manager make sure <strong>Show Hidden Files (dotfiles)”</strong> is checked or search for documentation of
                our hosting to
                show hidden files in file manager.
            </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>