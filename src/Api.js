import axios from 'axios';


const api = axios.create(
    {
        baseURL: 'https://api-json.sandboxappmax.com.br/'
        }
)

export default api;
