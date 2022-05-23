class ClientController {
  async create(request, response){
    const {name} = request.body;



    return response.status(200).json({
      success: `Created ${name}`
    })
  }

  async retrieve(request, response){
    return response.status(200).json({
      success: "Getting"
    })
  }
}

export default new ClientController();