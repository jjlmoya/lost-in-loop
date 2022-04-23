import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    persist: true,
    state: () => ({
        user: undefined
    }),
    getters: {
        user: state => !!state.user
    },
    actions: {
        get () {
            console.log('get')
            return this.user || {}
        },
        isSetted () {
            return !!this.user?.id
        },
        setUser (user) {
            this.user = user
        }
    },
})
