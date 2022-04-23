import axios from 'axios'
import pkg from '../../../package.json'

export default axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT) || 0,
    headers: {
        'X-Requested-With': `${ pkg.businessName }-${ pkg.version }`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
