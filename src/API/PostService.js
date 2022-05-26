import axios from "axios";

export default class PostService{
    static async getAll(){
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
        return response.data;
    }
    static async getById(id){
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles/'+ id)
        return response;
    }
    static async similarPost(){
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles?'+ "&title_contains=space")
        return response;
    }
}