import ProxyHTTPService from "../utils/proxyHttpService";

class ClientController {
  async create(request, response){
    console.log(request.body);
    const {name} = request.body;
    try {
      const proxyService = new ProxyHTTPService();
      const apiResponse = await proxyService.createData({name})
      response.status(200).json(apiResponse)
    } catch (error) {
      console.log({error});
      return response.status(500).json(error)
    }
  }

  async retrieve(_, response){
    try {
      const proxyService = new ProxyHTTPService();
      const apiResponse = await proxyService.retrieveData()

      response.status(200).json(apiResponse)
    } catch (error) {
      return response.status(500).json(error)
    }
  }
}

export default new ClientController();