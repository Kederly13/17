import axios, { AxiosResponse } from 'axios';  

const url = 'https://api.tvmaze.com';

const MoviesAPI = {
    async getCategory(category: string): Promise<AxiosResponse> {
        return await axios.get(`${url}/search/shows?q=${category}`)
    },
    async getSingle(id: string): Promise<AxiosResponse> {
        return await axios.get(`${url}/shows/${id}`)
    },
};

export { MoviesAPI };