drop database caonline;
create database caonline;
use caonline;

create table registros(  
    id_registro int primary key AUTO_INCREMENT,
    nome varchar(255),
    username varchar(255),
    email varchar(255),
    password varchar(255),
    cpf varchar(255),
    nivel_acesso int not null
);
create table aplicadores(
    id_aplicador int primary key AUTO_INCREMENT,
    id_posto int, 
 	id_registro int,
    endereco varchar(255),
    foreign key(id_registro) references  registros(id_registro)

);
create table usuarios(
    id_usuario int PRIMARY KEY AUTO_INCREMENT,
    id_registro int,
    foreign key(id_registro) references  registros(id_registro)
);
create table admins(
    id_admin int primary key AUTO_INCREMENT,
    id_registro int,

    
    foreign key(id_registro) references  registros(id_registro)
);

create table postos(
    id_posto int PRIMARY KEY AUTO_INCREMENT,
    cidade varchar(255),
    endereco varchar(255),
    estado varchar(255)
);

create table vacinas(
    id_vacina int PRIMARY KEY AUTO_INCREMENT,
  	lote int,
    tipo int,
    data_de_validade date,
    data_adicionado date,
    data_atualizado date
);

create table historico_vacinas(
    id_vacina int,
 	id_usuario int,
    id_aplicador int,
    data_aplicacao date,


    foreign key(id_usuario) references  usuarios(id_usuario),  
    foreign key(id_aplicador) references aplicadores(id_aplicador)
);