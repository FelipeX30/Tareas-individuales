-- Insertar datos en Jugador
INSERT INTO Jugador (id_jugador, Nombre, Nivel) VALUES
(1, 'Ash', 5),
(2, 'Misty', 4),
(3, 'Brock', 6),
(4, 'Gary', 7),
(5, 'Dawn', 5),
(6, 'Paul', 6),
(7, 'Iris', 4),
(8, 'Cilan', 5),
(9, 'Serena', 4),
(10, 'Clemont', 6),
(11, 'Bonnie', 3);

-- Insertar datos en Cartas
INSERT INTO Cartas (id_cartas, Nombre, Energia, Efecto, Descripción_carta) VALUES
(1, 'Pikachu', 50, 'Impactrueno', 'Carta básica de Pikachu'),
(2, 'Squirtle', 40, 'Chorro de Agua', 'Carta básica de Squirtle'),
(3, 'Onix', 60, 'Golpe Roca', 'Carta básica de Onix'),
(4, 'Bulbasaur', 50, 'Látigo Cepa', 'Carta básica de Bulbasaur'),
(5, 'Charmander', 50, 'Ascuas', 'Carta básica de Charmander'),
(6, 'Eevee', 40, 'Ataque Rápido', 'Carta básica de Eevee'),
(7, 'Dragonite', 80, 'Hiperrayo', 'Carta básica de Dragonite'),
(8, 'Umbreon', 70, 'Golpe Umbrío', 'Carta básica de Umbreon'),
(9, 'Sylveon', 60, 'Viento de Hadas', 'Carta básica de Sylveon'),
(10, 'Steelix', 90, 'Cuerpo de Hierro', 'Carta básica de Steelix'),
(11, 'Snorlax', 100, 'Bostezo', 'Carta básica de Snorlax'),
(12, 'Jigglypuff', 40, 'Canto', 'Carta básica de Jigglypuff'),
(13, 'Meowth', 50, 'Rasguño', 'Carta básica de Meowth'),
(14, 'Mewtwo', 80, 'Confusión', 'Carta básica de Mewtwo'),
(15, 'Gengar', 70, 'Rayo Umbrío', 'Carta básica de Gengar');

-- Insertar datos en Mazo
INSERT INTO Mazo (id_mazo, Nombre, Numero_cartas, id_jugador) VALUES
(1, 'Mazo Fuego', 60, 1),
(2, 'Mazo Agua', 60, 2),
(3, 'Mazo Roca', 60, 3),
(4, 'Mazo Planta', 60, 4),
(5, 'Mazo Electrico', 60, 5),
(6, 'Mazo Psíquico', 60, 6),
(7, 'Mazo Dragón', 60, 7),
(8, 'Mazo Oscuro', 60, 8),
(9, 'Mazo Hada', 60, 9),
(10, 'Mazo Metálico', 60, 10),
(11, 'Mazo Normal', 60, 11);

-- Insertar datos en Partida
INSERT INTO Partida (id_partida, Turnos_por_jugador, Tiempo, Cartas_jugadas, id_jugador) VALUES
(1, 5, '00:30:00', 30, 1),
(2, 5, '00:25:00', 28, 2),
(3, 5, '00:35:00', 33, 3),
(4, 5, '00:20:00', 27, 4),
(5, 5, '00:40:00', 35, 5),
(6, 5, '00:33:00', 31, 6),
(7, 5, '00:28:00', 29, 7),
(8, 5, '00:36:00', 32, 8),
(9, 5, '00:39:00', 34, 9),
(10, 5, '00:31:00', 30, 10),
(11, 5, '00:37:00', 33, 11);

-- Insertar datos en Turno
INSERT INTO Turno (id_turno, Cantidad_turnos, Cartas_jugadas, id_partida, id_jugador) VALUES
(1, 5, 6, 1, 1),
(2, 5, 5, 2, 2),
(3, 5, 7, 3, 3),
(4, 5, 6, 4, 4),
(5, 5, 5, 5, 5),
(6, 5, 7, 6, 6),
(7, 5, 6, 7, 7),
(8, 5, 5, 8, 8),
(9, 5, 7, 9, 9),
(10, 5, 6, 10, 10),
(11, 5, 5, 11, 11);

-- Insertar datos en Tablero
INSERT INTO Tablero (id_tablero, id_partida, id_mazo, id_jugador) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4),
(5, 5, 5, 5),
(6, 6, 6, 6),
(7, 7, 7, 7),
(8, 8, 8, 8),
(9, 9, 9, 9),
(10, 10, 10, 10),
(11, 11, 11, 11);

-- Insertar datos en Baraja
INSERT INTO Baraja (id_baraja, id_cartas, id_jugador, id_mazo) VALUES
(1, 1, 1, 1),
(2, 2, 2, 2),
(3, 3, 3, 3),
(4, 4, 4, 4),
(5, 5, 5, 5),
(6, 6, 6, 6),
(7, 7, 7, 7),
(8, 8, 8, 8),
(9, 9, 9, 9),
(10, 10, 10, 10),
(11, 11, 11, 11);
