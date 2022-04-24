<template>
    <LayoutDefault>
        <div class="splash">
            Splash
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
            setTimeout(() =>{
                router.push({name: 'home'})
            }, 3000)
        }
    }
</script>



<style lang="postcss">
  .splash {
    width: 100vw;
    height: 100vh;
    background-color: blue;
  }
</style>
