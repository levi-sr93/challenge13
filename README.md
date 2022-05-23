## Upstart challenge

### With docker-compose:

open the terminal and run in the project root path the following:

```bash
docker-compose up --build
```

- Go to testing step

### without docker-compose

### Question 1 and 2 in a React App (Vite)

- In ./frontend install the dependencies with command:

```bash
  yarn
```

or

```bash
  npm i
```

### Question 3

- in ./backend/proxy_server install the dependencies with the above command (npm i)
- start the server with command

```bash
  npm run dev
```

or

```bash
  yarn dev
```

- repeat the above steps inside ./backend/target_server

### testing the frontend

open browser in http://localhost:3000

### TEsting the proxy_server

- GET request in http://localhost:3333/api/retrieve
- POST request in http://localhost:3333/api/create body:{"name": "John doe"}

body:

```
  {
    "name": "John doe"
  }
```
