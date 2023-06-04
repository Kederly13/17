import axios, { AxiosResponse } from 'axios';  

const url = 'https://api.tvmaze.com/search/shows?q=';

const MoviesAPI = {
    async getCategory(category: string): Promise<AxiosResponse> {
        return await axios.get(`${url}${category}`)
    },
    async getSingle(id: string): Promise<AxiosResponse> {
        return await axios.get(`${url}/shows/${id}`)
    },
};

export { MoviesAPI };