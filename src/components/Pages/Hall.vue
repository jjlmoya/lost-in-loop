<template>
    <LayoutDefault>
        <div class="hall">
            Hall
        </div>
    </LayoutDefault>
</template>

<script>
    import LayoutDefault from '@/components/Layouts/Default.vue'
    import { useRouter } from 'vue-router'

    export default {
        components: {
            LayoutDefault
        },
        setup() {

            const router = useRouter()

            return {
            }

        }
    }
</script>



<style lang="postcss">
  .hall {
    width: 100vw;
    height: 100vh;
    background-color: blue;
  }
</style>
