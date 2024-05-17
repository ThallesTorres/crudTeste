import mysql from "mysql2";

// Criação da conexão
export const db = mysql.createConnection({
    host: process.env.DB_HOST || "servidor-mysql",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "1234",
    database: process.env.DB_NAME || "teste",
    port: process.env.DB_PORT || 3306,
});

// Conexão ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados');
});