
//TODO
export const whiteList = (req, res, next) => {
  const allowedServers = [
    "123456"
  ]

  const apiKey = req.headers.authorization.split("=")[1]

  if(!allowedServers.includes(apiKey)) {
    return res.status(401).send("Unauthorized")
  }

  next();
};