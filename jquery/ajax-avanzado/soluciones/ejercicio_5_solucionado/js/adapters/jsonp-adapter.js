var JSONPAdapter = function() {

    this.inicializar = function(data) {
        url = typeof data !== 'undefined' ? data : "http://www.media.formandome.es/phonegap/tutorial/futbolistas.php";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.encontrarPorId = function(id) {
        return $.ajax({url: url + "/" + id, dataType: "jsonp"});
    }

    this.encontrarPorNombre = function(searchKey) {
        return $.ajax({url: url + "?nombre=" + searchKey, dataType: "jsonp"});
    }

    var url;

}
