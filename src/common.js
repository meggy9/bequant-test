import axiosModule from 'axios'

export const axios = axiosModule.create({
    baseURL: 'https://api.coincap.io/v2'
})