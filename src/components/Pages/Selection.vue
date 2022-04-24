<template>
    <LayoutDefault>
        <div class="selection">
            <div class="selection__list">
                <div
                    v-for="i in 3"
                    :key="i"
                    class="selection__item"
                    @click="onSelect"
                >
                    {{ i }}
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

            const onSelect = () => {
                router.push({ name: 'hall' })
            }

            return {
                onSelect
            }

        }
    }
</script>



<style lang="postcss">
  .selection {
    width: 100vw;
    height: 100vh;
    display: grid;
    align-items: center;
    padding: em(16px);

    &__list {
      display: grid;
      grid-auto-flow: column;
      grid-gap: em(16px);
    }

    &__item {
      background-color: black;
      color: white;
      text-align: center;
      padding: em(32px);
      border-radius: em(8px);
      font-size: 16px;
    }
  }
</style>
