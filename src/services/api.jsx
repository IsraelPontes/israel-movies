import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '660a9575a5b0f97960a740ccbb4b4b3e',
        language: 'pt-br',
        page: 1
    }
})

export default api
