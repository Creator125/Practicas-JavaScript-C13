const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

//Controladores
const {guardarUsuario, mostrarUsuarios, editarUsuario, eliminarUsuario} = require("./controllers/User.controller.js");


const app = express();
const port = 3001;

app.use(morgan("dev"));//Utilizando morgan
app.use(cors());
app.use(express.json());


async function BDconnection() {
    try{
        //Conectando a la base de datos
        await mongoose.connect('mongodb://localhost:27017/primera_api');
        
        console.log("Conectado a la base de datos");
    }catch (error){
        console.log("Erro al conectarse a la base de datos: " + error);
    }
}

BDconnection();

// app.get("/usuarios", (req, res) => res.send("Hola mundo"));
// app.get("/tareas", (req, res) => res.send("Lista de tareas desde el servidor"));

app.post("/usuarios", guardarUsuario);
app.get("/usuarios", mostrarUsuarios);
app.put("/usuarios/:id", editarUsuario);
app.delete("/usuarios/:id", eliminarUsuario);

app.listen(port, () => console.log("Servidor ejecutándose"));