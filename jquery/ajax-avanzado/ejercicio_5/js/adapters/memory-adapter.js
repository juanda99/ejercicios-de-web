var MemoryAdapter = function() {

    this.inicializar = function() {
        // No hace falta inicializar
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.encontrarPorId = function(id) {
        var deferred = $.Deferred();
        var futbolista = null;
        var l = futbolistas.length;
        for (var i=0; i < l; i++) {
            if (futbolista[i].id === id) {
                futbolista = futbolistas[i];
                break;
            }
        }
        deferred.resolve(futbolista);
        return deferred.promise();
    }

    this.encontrarPorNombre = function(searchKey) {
        var deferred = $.Deferred();
        var resultados = futbolistas.filter(function(element) {
            var nombreCompleto = element.nombre + " " + element.apellido;
            return nombreCompleto.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(resultados);
        return deferred.promise();
    }

    var futbolistas = [
        {"id": 1, "nombre": "Gareth Frank", "apellido": "Bale", "posicion": "Centrocampista", "equipo": "Real Madrid", "dorsal": 11, "desc":"El portentoso jugador galés es la gran apuesta del equipo blanco para esta temporada. Velocidad, técnica y potencia son sus grandes cualidades, por lo que está llamado a formar una de las mejores duplas de ataque junto a Cristiano Ronaldo.", "imagen":"bale.jpg"},
        {"id": 2, "nombre": "Iker", "apellido": "Casillas", "posicion": "Portero", "equipo": "Real Madrid", "dorsal": "1", "desc":"Leyenda viva del Real Madrid y de la selección española, con quienes lo ha conquistado absolutamente todo. El capitán blanco siempre destacó por sus excelentes reflejos y sus paradas imposibles y decisivas. Esta temporada peleará por el puesto de titular con Diego López, quien lo sustituyó con garantías tras sufrir una desafortunada lesión la pasada campaña.", "imagen":"casillas.jpg"},
        {"id": 3, "nombre": "Ángel Fabián", "apellido": "Di María", "posicion": "Centrocampista", "equipo": "Real Madrid", "dorsal": 22, "desc":"El argentino llamó la atención de numerosos clubes europeos en el Benfica, donde ganó un título de liga y llegó a ser considerado el mejor jugador del campeonato. El Real Madrid fue quien se hizo finalmente con sus servicios y durante tres temporadas ha sido un jugador muy importante. Extremo zurdo muy habilidoso, desequilibrante y con gran olfato de gol. Puede jugar por ambas bandas.", "imagen":"dimaria.jpg"},
        {"id": 4, "nombre": "Andrés", "apellido": "Iniesta", "posicion": "Centrocampista", "equipo": "F.C.Barcelona", "dorsal": 8, "desc":"Inteligencia, visión de juego, verticalidad y mucha elegancia son algunas de sus innumerables cualidades. El manchego es uno de los faros que iluminan el alegre juego del Barcelona y de la selección española y uno de los mejores centrocampistas del fútbol mundial.", "imagen":"iniesta.jpg"},
        {"id": 5, "nombre": "Jesé", "apellido": "Rodriguez", "posicion": "Delantero", "equipo": "Real Madrid", "dorsal": 20, "desc":"Una de las grandes joyas de la cantera madridista. La pasada temporada fue uno de los máximos anotadores de la Liga Adelante tras conseguir 22 goles con el Castilla, superando el récord de tantos de Emilio Butragueño con el filial (21). Rápido y muy desequilibrante, puede desempeñarse como extremo o ser referencia en la punta de ataque. En su primera temporada como parte del primer equipo intentará demostrar sus grandes cualidades y ganarse la confianza de Carlo Ancelotti.", "imagen":"jese.jpg"},
        {"id": 6, "nombre": "Marcelo", "apellido": "Vieira da Silva", "posicion": "Defensa", "equipo": "Real Madrid", "dorsal": 12, "desc":"Con apenas 18 años fichó por el Real Madrid y, desde entonces, fue creciendo poco a poco hasta convertirse en uno de los mejores en su puesto. La sombra de su compatriota Roberto Carlos era alargada, pero Marcelo se ganó el cariño de la afición gracias a sus peligrosas subidas, numerosas asistencias y goles y una notable mejoría en el aspecto defensivo.", "imagen":"marcelo.jpg"},
        {"id": 7, "nombre": "Lionel Andrés", "apellido": "Messi", "posicion": "Delantero", "equipo": "F.C.Barcelona", "dorsal": 10, "desc":"Pura fantasía en las botas. Galardonado en cuatro ocasiones con el Balón de Oro, es uno de esos jugadores capaces de decidir cualquier partido gracias a su velocidad, regate, explosividad y efectividad goleadora. Considerado uno de los mejores futbolistas de la historia del fútbol, el argentino intentará seguir agrandando su leyenda junto al recién llegado Neymar.", "imagen":"messi.jpg"},
        {"id": 8, "nombre": "Luka", "apellido": "Modric", "posicion": "Centrocampista", "equipo": "Real Madrid", "dorsal": 19, "desc":"Sus buenas actuaciones con el Dínamo de Zagreb lo llevaron a dar el salto a Inglaterra, donde jugó a un excelente nivel en el Tottenham durante cuatro temporadas. Llegó al Real Madrid en el verano de 2012 y con el paso de los meses fue adquiriendo mayor protagonismo, contando con minutos en 33 partidos de liga en los que anotó tres goles. En esta nueva campaña intentará convencer a Ancelotti de que hay un sitio para él en el centro del campo.", "imagen": "modric.jpg"},
        {"id": 9, "nombre": "Neymar", "apellido": "da Silva", "posicion": "Delantero", "equipo": "F.C.Barcelona", "dorsal": 11, "desc":"La gran estrella del fútbol brasileño y el jugador más deseado en Europa llega a la Liga BBVA. Es un futbolista muy completo: tiene velocidad, regate, disparo y gran efectividad goleadora. Junto a Messi, formarán una de las parejas más temidas del continente. El espectáculo está asegurado.", "imagen":"neymar.jpg"},
        {"id": 10, "nombre": "Pedro", "apellido": "Rodríguez", "posicion": "Delantero", "equipo": "F.C.Barcelona", "dorsal": 7, "desc":"Desde su ascenso al primer equipo de la mano de Guardiola, el canario devolvió la confianza depositada en él con goles y grandes actuaciones. Sus condiciones tampoco pasaron desapercibidas para Vicente del Bosque, que lo reclutó para la selección española y fue parte del equipo campeón del Mundial 2010 y la Eurocopa de 2012.", "imagen":"pedro.jpg"},
        {"id": 11, "nombre": "Gerard", "apellido": "Piqué", "posicion": "Defensa", "equipo": "F.C.Barcelona", "dorsal": 3, "desc":"Tras militar en el Manchester United, en 2008 volvió al club en el que se formó como jugador para convertirse en uno de los mejores centrales del mundo. Su gran estatura lo convierte en un jugador muy poderoso en el juego aéreo. Además, goza de una buena calidad técnica para sacar el balón desde atrás y sumarse al ataque.", "imagen":"pique.jpg"},
        {"id": 12, "nombre": "Carles", "apellido": "Puyol", "posicion": "Defensa", "equipo": "F.C.Barcelona", "dorsal": 5, "desc":"Toda una institución en el club. En sus 14 años defendiendo los colores del Barcelona, el 'gran' capitán lo ha ganado absolutamente todo. La pasada campaña sólo pudo disputar 15 partidos de Liga, pero su fortaleza, seguridad y jerarquía en el eje de la zaga hacen de él un jugador insustituible.", "image": "puyol.jpg"},
        {"id": 13, "nombre": "Cristiano", "apellido": "Ronaldo", "posicion": "Delantero", "equipo": "Real Madrid", "dorsal": 7, "desc":"Futbolista todoterreno, uno de los más completos del mundo. Posee un excelente golpeo con ambas piernas, una enorme superioridad en el juego aéreo y una gran velocidad y regate para superar a cualquier adversario. Tras triunfar en el Manchester United, llegó a la capital española en 2009 en lo que fue el traspaso más caro de la historia del fútbol. Desde entonces, ha sido el emblema del equipo y el gran ídolo de la afición. Sus 146 goles en 135 partidos de liga durante cuatro temporadas hablan por sí solos.", "imagen":"ronaldo.jpg"},
        {"id": 14, "nombre": "Sergio", "apellido": "Ramos", "posicion": "Defensa", "equipo": "Real Madrid", "dorsal": 4, "desc":"Aterrizó en la capital tras brillar con el Sevilla con apenas 19 años. Desde entonces, el futbolista de Camas ha sido un jugador insustituible en la defensa blanca, primero como lateral derecho y posteriormente como central. Fuerte y poderoso por alto, un muro infranqueable con mucho gol.", "imagen":"ramos.jpg"},
       {"id": 15, "nombre": "Victor", "apellido": "Valdés", "posicion": "Portero", "equipo": "F.C.Barcelona", "dorsal": 1, "desc":"El experimentado guardameta volverá a defender la portería azulgrana tras más de diez temporadas en la élite. Galardonado en cinco ocasiones con el Trofeo Zamora al portero menos goleado, destaca por sus enormes reflejos, manejo de los pies y liderazgo en el terreno de juego.", "imagen":"victorvaldes.jpg"},
        {"id": 16, "nombre": "Xabi", "apellido": "Alonso", "posicion": "Centrocampista", "equipo": "Real Madrid", "dorsal": 14, "desc":"Un jugador insustituible durante sus cuatro años en el conjunto blanco. Despuntó muy joven en la Real Sociedad y con 23 años emigró a Inglaterra para crecer en el Liverpool, donde conquistó una Champions. Fichó por el Madrid en 2009 para ser el cerebro del equipo, un rol que continúa desempeñando a la perfección.", "imagen": "xabi.jpg"},
        {"id": 17, "nombre": "Xavi", "apellido": "Hernández", "posicion": "Centrocampista", "equipo": "F.C.Barcelona", "dorsal": 6, "desc":"El cerebro del Barcelona. Todo un director de orquesta: dirige, organiza el juego y siempre encuentra la mejor solución, por complicada que parezca. Afronta su decimosexta temporada en el equipo tras haberlo ganarlo todo con la camiseta blaugrana y de la selección española.", "imagen":"xavi.jpg"}
    ];

}
