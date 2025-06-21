CREATE DATABASE IF NOT EXISTS teste_db;

USE teste_db;

CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100)
);

INSERT INTO alunos (nome) VALUES ('Ana'), ('Carlos');
