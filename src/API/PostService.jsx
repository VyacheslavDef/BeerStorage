import axios from "axios";

export default class PostService {
    
    static async getAll(page, perPage) {
        const responce = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
        return responce
    }

    static async getById(id) {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
        return data[0];
      }
}

