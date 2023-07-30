<template>
    <nav class="fixed w-full top-0 z-10 bg-[#eff0f2]" style="box-shadow: 0 2px 5px #0000004d;">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between py-4">
                <div class="flex items-center">
                    <a href="#" class="text-black text-lg font-semibold">
                        <img src="../assets/img/logo.png" alt="">
                    </a>
                    <button class="text-black focus:outline-none ml-8 lg:hidden">
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex">

                    <router-link to="/" class="text-black mx-4">
                        Home
                    </router-link>
                    <a href="#" class="text-black mx-4">About</a>
                    <a href="#" class="text-black mx-4">Services</a>
                    <a href="#" class="text-black mx-4">Contact</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-exact-active {
    border-bottom: 1px solid #2E2D4D;
}
</style>