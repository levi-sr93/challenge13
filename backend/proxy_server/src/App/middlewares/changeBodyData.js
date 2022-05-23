export function changeBodyData (request, response, next){
  const {name} = request.body;

  const newName = "Janny Doe";

  request.body = {name: newName}

  next();
}