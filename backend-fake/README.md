Criar app node  --> npm init -y
Add package     --> npm i --save json-server@0.13.0 -E
criar arquivo "nome.json"


## Available Scripts

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.<br>
Choose your door (In this exemple is 3001)

- First, alter the file "package.json"
  "scripts": {
    "start": "json-server --watch dbcliente.json --port 3001"
  }

OR execute in prompt command
json-server --watch dbcliente.json --port 3001

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

In this prompt command, will appear the information of the routes created to access the json data
Exemple:
GET - http://localhost:3001/clientes
GET - http://localhost:3001/clientesid
GET - http://localhost:3001/pedidos