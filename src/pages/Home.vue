<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>

        <div v-else>
            <h2 class="text-4xl text-brand font-bold">{{ $t('Introduction to the POS docs') }}</h2>
            <p class="my-6 text-base text-gray-700 ">
                {{ $t('intro_text')}}
            </p>
            <ul class="list-disc px-6 py-4">
                <li class="my-4 text-base text-gray-700">Check your business data from anywhere, anytime. See live updates
                    in
                    realtime</li>
                <li class="my-4 text-base text-gray-700">No software to install, No hardware dependency. Just open browser &
                    start using</li>
                <li class="my-4 text-base text-gray-700">Manage stock of multiple branches in one place effortlessly &
                    real-tim
                </li>
                <li class="my-4 text-base text-gray-700">Powerful user Role & Permission management to limit employees
                    access to
                    business data</li>
                <li class="my-4 text-base text-gray-700">Manage stocks with from multiple locations, stock expiry, lot
                    number,
                    stock history & much more</li>
                <li class="my-4 text-base text-gray-700">Manage & easily invoice for services. Also dedicated repair service
                    management features to schedule & deliver services on time</li>
                <li class="my-4 text-base text-gray-700">With HR management easily track daily attendance, shift management,
                    leaves, payroll, Holidays, Departments, & Designations</li>


            </ul>
        </div>
    </div>
</template>

<script>
import Lodder from '../components/Lodder.vue';
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