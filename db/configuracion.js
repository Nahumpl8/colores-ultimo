const postgres = require("postgres");

function conectar(){
    return postgres({
        host: 'dpg-cke0li4gonuc738o5t40-a.frankfurt-postgres.render.com',
        user: 'nahumpl8',     
        password: 'Us7MZ3acu0hDyiYEb0q6O76zhhESog7F',
        database: 'estudiantes_yy5d',
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

module.exports = {conectar, mostrarColores};

