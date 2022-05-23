import Axios from "axios";

class BaseHttpService {
  constructor(){
    this.BaseURL = process.env.API_URL;
    this.config = {
      headers: {
        Authorization: `API_KEY=${process.env.API_KEY}`
      }
    }
  }

 async get(resource){
    return await Axios.get(`${this.BaseURL}${resource}`, this.config)
  }

  async post(resource, body){
    return await Axios.post(`${this.BaseURL}${resource}`, body, this.config)
  }

  changeHeadersConfig = (headerData) => {
    this.config = headerData;
  }
}

export default BaseHttpService;