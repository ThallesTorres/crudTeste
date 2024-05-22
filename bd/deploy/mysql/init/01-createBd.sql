CREATE DATABASE IF NOT EXISTS teste;
USE teste;
CREATE TABLE
    IF NOT EXISTS usuarios (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        fone BIGINT NOT NULL,
        data_nascimento DATE NOT NULL
    );
INSERT INTO usuarios (nome, email, fone, data_nascimento) VALUES
('Joao Silva', 'joao.silva@example.com', 11987654321, '1990-01-15'),
('Maria Oliveira', 'maria.oliveira@example.com', 21987654321, '1985-03-22'),
('Carlos Souza', 'carlos.souza@example.com', 31987654321, '1978-07-10'),
('Ana Pereira', 'ana.pereira@example.com', 41987654321, '1995-11-30');

-- ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '1234';
-- FLUSH PRIVILEGES;