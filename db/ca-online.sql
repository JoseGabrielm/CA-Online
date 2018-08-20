create database caonline;
use caonline;

create table registro(  
    id_registro int primary key AUTO_INCREMENT,
    nome varchar(255),
    username varchar(255),
    email varchar(255),
    password varchar(255),
    cpf varchar(255),
    nivel_acesso int not null
);
create table aplicador(
    id_aplicador int primary key AUTO_INCREMENT,
    id_posto int, 
 	id_registro int,
    endereco varchar(255)
);
create table usuario(
    id_usuario int PRIMARY KEY AUTO_INCREMENT,
    id_registro int
);
create table admin(
    id_admin int primary key AUTO_INCREMENT,
    id_posto int,
    id_registro int
);

create table posto(
    id_posto int PRIMARY KEY AUTO_INCREMENT,
    cidade varchar(255),
    endereco varchar(255),
    estado varchar(255)
);

create table vacina(
    id_vacina int PRIMARY KEY AUTO_INCREMENT,
  	lote int,
    tipo int,
    data_de_validade date,
    data_adicionado date,
    data_atualizado date
);

create table historico_vacina(
    id_vacina int,
 	id_usuario int,
    data_aplicacao int  
);