import axios from "axios";

export default class PostService {
    static async getAll(page = 1, perPage = 25) {
        const responce = await axios.get('https://api.punkapi.com/v2/beers', {
            params: {
                page: page,
                per_page: perPage
            }
        })
        return responce
    }

    static async getById(id) {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
        return data[0];
      }

}