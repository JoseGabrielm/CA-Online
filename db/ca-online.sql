create database caonline;
use caonline;

create table registros(  
    id int primary key AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    cpf varchar(255),
    nivel_acesso int default 0,
    created_at  date,
    updated_at  date
);
create table aplicadores(
    id int primary key AUTO_INCREMENT,
    id_posto int, 
 	id_registro int,
    endereco varchar(255),
    foreign key(id_registro) references  registros(id)

);


create table postos(
    id int PRIMARY KEY AUTO_INCREMENT,
    cidade varchar(255),
    endereco varchar(255),
    estado varchar(255)
);

create table vacinas(
    id_vacina int PRIMARY KEY AUTO_INCREMENT,
  	lote int,
    tipo int,
    data_de_validade date,
    created_at  date,
    updated_at  date
);

create table historico_vacinas(
    id_vacina int,
 	id_registro int,
    id_aplicador int,
    created_at  date,
    updated_at  date,


    foreign key(id_registro) references  registros(id),  
    foreign key(id_aplicador) references aplicadores(id)
);