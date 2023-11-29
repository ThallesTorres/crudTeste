import mysql from "mysql"

// Minha vm
export const db = mysql.createConnection({
    host: "192.168.1.19",
    user: "root",
    password: "11",
    database: "crud"
})

// Meu pc
// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "crud"
// })
