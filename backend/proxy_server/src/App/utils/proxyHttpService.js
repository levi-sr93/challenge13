import BaseHttpService from "./baseHttpService";

class ProxyHTTPService extends BaseHttpService {
  constructor(){
    super();
  }

  async createData(dataInfo){
    const response =  await this.post("/create", dataInfo)
    return response.data;
  }

  async retrieveData(){
    const response =  await this.get("/retrieve")
    return response.data;
  }
}

export default ProxyHTTPService