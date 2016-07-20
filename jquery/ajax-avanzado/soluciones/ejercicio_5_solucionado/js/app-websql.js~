// Utlizaremos una función anónima autoejecutable de modo que nuestras variables no sean globales. Más info: http://www.formandome.es/javascript/objetos-variables-funciones-javascript/

(function () {
    /* ---------------------------------- Variables locales ---------------------------------- */
    //var adapter = new WebSqlAdapter();
    //var adapter = new MemoryAdapter();
    //var adapter = new JSONPAdapter();
    var adapter = new LocalStorageAdapter();
    adapter.inicializar().done(function () {
        console.log("Inicializado: Adaptador de datos");
    });

    /* --------------------------------- Registro de eventos -------------------------------- */
    $('#btnBuscar').on('keyup', encontrarPorNombre);
    $('#btnAyuda').on('click', function() {
        alert("Una ayuda nunca viene mal :-)")
    });


    /* ---------------------------------- Funciones locales ---------------------------------- */
    function encontrarPorNombre() {
        adapter.encontrarPorNombre($('#btnBuscar').val()).done(function (futbolistas) {
            var l = futbolistas.length;
            var e;
            $('#lstFutbolistas').empty();
            for (var i = 0; i < l; i++) {
                e = futbolistas[i];
                $('#lstFutbolistas').append('<li><a href="#futbolistas/' + e.id + '">' + e.nombre + ' ' + e.apellido + '</a></li>');
            }
        });
    }

}());
