document.addEventListener("DOMContentLoaded", function() {
    cargarComponente("header", "utilitarios/header.html");
    cargarComponente("footer", "utilitarios/footer.html");
});

function cargarComponente(idElemento, rutaComponente) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById(idElemento).innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", rutaComponente, true);
    xhttp.send();
}