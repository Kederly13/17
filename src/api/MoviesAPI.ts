import axios, { AxiosResponse } from 'axios';  

const url = 'https://api.tvmaze.com/search/shows?q=';

const MoviesAPI = {
    async getGirls(): Promise<AxiosResponse> {
        return await axios.get(`${url}girls`)
    }
}

export { MoviesAPI };