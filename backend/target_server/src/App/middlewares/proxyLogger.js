export function proxyLogger (request, response, next){
  console.log(request.url)
  next();
}