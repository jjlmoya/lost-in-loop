import { defineStore } from 'pinia'
import axios from '@/api/clients/app'

export const useAuthStore = defineStore('auth', {
    persist: true,
    state: () => ({
        accessToken: undefined,
        refreshToken: undefined
    }),
    getters: {
        loggedIn: state => !!state.accessToken
    },
    actions: {
        setTokens ({ accessToken, refreshToken }) {
            this.accessToken = accessToken
            this.refreshToken = refreshToken
            axios.defaults.headers.common.Authorization = `Bearer ${ this.accessToken }`
        },
        clearTokens () {
            this.accessToken = null
            this.refreshToken = null
            this.user = {}
            axios.defaults.headers.common.Authorization = null
        }
    },
})
