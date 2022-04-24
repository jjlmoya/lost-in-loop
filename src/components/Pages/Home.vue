<template>
    <LayoutDefault>
        <div class="home">
            <div class="home__container">
                <div class="home__button" @click="resumeGame">
                    {{ $t('home.button.start') }}
                </div>
            </div>
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
            const resumeGame = () => {
                router.push({ name: 'selection' })
            }

            return {
                resumeGame
            }
        }
    }
</script>
<style lang="postcss">
.home {
  width: 100vw;
  height: 100vh;

  &__container {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__button {
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow:
      1px  1px     #fff,
      -1px  1px     #fff,
      1px -1px     #fff,
      -1px -1px     #fff,
      1px  1px 10px #555;
  }
}
</style>
