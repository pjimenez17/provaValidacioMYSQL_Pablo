var mysql = require('mysql2');

module.exports = {
    getPreguntes,
    insertPregunta,
    insertResposta,
    getRespostes
}

var dbConfig = {
    host: "dam.inspedralbes.cat",
    user: "a22pabjimpri_usuari",
    password: "Dam2023+++",
    database: "a22pabjimpri_provavalidaciopablo"
};

function conectDB() {
    let con = mysql.createConnection(dbConfig)
    con.connect(function (err) {
        if (err) {
            console.log("No conexio");
        } else {
            console.log("Conectado");
        }
    })
    return con
}

function disconnectDB(con) {
    con.end(function (err) {
        if (err) {
            return console.log("error: " + err.message);
        }
    })
}

function getPreguntes(){
    return new Promise((resolve, reject) => {
        let con = conectDB()
        var sql = "SELECT * FROM preguntas";
        con.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        })
        disconnectDB(con);
    })
}

function insertPregunta(pregunta){
    return new Promise((resolve, reject) => {
        let con = conectDB();
        var sql = "INSERT INTO preguntas (pregunta) VALUES ('"+pregunta+"')";
        con.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        })
        disconnectDB(con);
    })
}

function insertResposta(id, respuesta){
    return new Promise((resolve, reject) => {
        let con = conectDB();
        var sql = "INSERT INTO respuestas (respuesta, id) VALUES ('"+respuesta+"', "+id+")";
        con.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        })
        disconnectDB(con);
    })
}

function getRespostes(){
    return new Promise((resolve, reject) => {
        let con = conectDB()
        var sql = "SELECT * FROM respuestas";
        con.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result);
            }
        })
        disconnectDB(con);
    })
}
