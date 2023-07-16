<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Adding opening balance & payment</h2>
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