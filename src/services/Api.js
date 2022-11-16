import axios from 'axios';

//https://viacep.com.br/ws/18145320/json

const api =axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

export default api