import axios from 'axios';
//axios faz a ligação frontEnd com o backEnd

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;