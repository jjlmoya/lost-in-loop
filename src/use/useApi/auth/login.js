import axios from '@/api/clients/app'
import { useAxios } from '@/use/useAxios'
import { reactive, toRefs, watch } from 'vue'
import { useAuthStore } from '@/stores/auth'

export default () => {
    const state = reactive({
        response: undefined,
        data: undefined,
        error: undefined,
        isLoading: undefined,
        isFinished: undefined
    })

    const { setTokens } = useAuthStore()

    const fetchData = (params) => {
        const { response, data, error, isLoading, isFinished } = useAxios('login', {
            method: 'post',
            data: {
                username: params?.email,
                password: params?.password,
            }
        }, axios)

        state.response = response
        state.data = data
        state.error = error
        state.isLoading = isLoading
        state.isFinished = isFinished
    }

    watch(() => state.data, (res) => {
        setTokens({
            accessToken: res.access_token,
            refreshToken: res.refresh_token
        })
    })

    return {
        ...toRefs(state),
        fetchData
    }
}
