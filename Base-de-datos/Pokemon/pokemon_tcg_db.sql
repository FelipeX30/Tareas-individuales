	DROP SCHEMA IF EXISTS pokemon_db;
CREATE SCHEMA pokemon_db;
USE pokemon_db;

CREATE TABLE Jugador (
    id_jugador INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Nivel INT
);

CREATE TABLE Cartas (
    id_cartas INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Energia INT,
    Efecto VARCHAR(100),
    Descripción_carta TEXT
);

CREATE TABLE Mazo (
    id_mazo INT PRIMARY KEY,
    Nombre VARCHAR(50),
    Numero_cartas INT,
    id_jugador INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Partida (
    id_partida INT PRIMARY KEY,
    Turnos_por_jugador INT,
    Tiempo TIME,
    Cartas_jugadas INT,
    id_jugador INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Turno (
    id_turno INT PRIMARY KEY,
    Cantidad_turnos INT,
    Cartas_jugadas INT,
    id_partida INT,
    FOREIGN KEY (id_partida) REFERENCES Partida(id_partida),
    id_jugador INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Tablero (
    id_tablero INT PRIMARY KEY,
    id_partida INT,
    FOREIGN KEY (id_partida) REFERENCES Partida(id_partida),
    id_mazo INT,
    FOREIGN KEY (id_mazo) REFERENCES Mazo(id_mazo),
    id_jugador INT,
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador)
);

CREATE TABLE Baraja (
    id_baraja INT PRIMARY KEY,
    id_cartas INT,
    id_jugador INT,
    id_mazo INT,
    FOREIGN KEY (id_cartas) REFERENCES Cartas(id_cartas),
    FOREIGN KEY (id_jugador) REFERENCES Jugador(id_jugador),
    FOREIGN KEY (id_mazo) REFERENCES Mazo(id_mazo)
);
