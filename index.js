const express = require("express");
const {mostrarColores, crear} = require("./db/configuracion.js")

const servidor = express();

servidor.use("/", express.static("./estaticos"))

servidor.get("/colores", async (peticion, respuesta) => {
    let colores = await mostrarColores();
    respuesta.json(colores);
    console.log(colores)
})


servidor.listen(4000)