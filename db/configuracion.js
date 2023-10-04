const postgres = require("postgres");

function conectar(){
    return postgres({
        host: process.env.URL_HOST,
        user: process.env.USER,     
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: 5432,
        ssl: true
    })
}

function mostrarColores(){
    return new Promise(async callback => {
        const conexion = conectar();
        let colores = await conexion `SELECT * FROM colores`;
        conexion.end();
        callback(colores)
    })
}

function crear(color){
    return new Promise(async callback => {
        const conexion = conectar();
        let respuesta = await conexion `INSET INTO colores (color) VLAUES (${color}) RETURNING id`;
        conexion.end();
        callback(respuesta);
    }) 
}


module.exports = {conectar, mostrarColores, crear};

