import axios from "axios";

export default class PostService {
    
    static async getPagination(page, perPage) {
        const responce = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
        return responce
    }

    static async getById(id) {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
        return data[0];
      }

      static async getAll(qq='beer_name', num) {
        const allBeer = await axios.get(`https://api.punkapi.com/v2/beers?${qq}=${num}`);
        console.log(allBeer)
        return allBeer;
      }
}

