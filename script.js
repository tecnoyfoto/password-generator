function configurarOpciones() {
    var tipo = document.getElementById("tipo-servicio").value;
    var config = {
        "critico": { longitud: 20, mayusculas: true, minusculas: true, numeros: true, simbolos: true },
        "alta":    { longitud: 16, mayusculas: true, minusculas: true, numeros: true, simbolos: true },
        "media":   { longitud: 12, mayusculas: true, minusculas: true, numeros: true, simbolos: false },
        "basica":  { longitud: 10, mayusculas: true, minusculas: true, numeros: true, simbolos: false }
    };

    var opciones = config[tipo];
    document.getElementById("longitud").value = opciones.longitud;
    document.getElementById("mayusculas").checked = opciones.mayusculas;
    document.getElementById("minusculas").checked = opciones.minusculas;
    document.getElementById("numeros").checked = opciones.numeros;
    document.getElementById("simbolos").checked = opciones.simbolos;
}

function toggleAdvanced() {
    var advancedDiv = document.getElementById("advanced-options");
    if (advancedDiv.style.display === "none") {
        advancedDiv.style.display = "block";
    } else {
        advancedDiv.style.display = "none";
    }
}

function generarContraseña() {
    var longitud = parseInt(document.getElementById("longitud").value);
    var incluirMayusculas = document.getElementById("mayusculas").checked;
    var incluirMinusculas = document.getElementById("minusculas").checked;
    var incluirNumeros = document.getElementById("numeros").checked;
    var incluirSimbolos = document.getElementById("simbolos").checked;
    var caracteres = "";
    var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var minusculas = "abcdefghijklmnopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolos = "!@#$%^&*()-_=+<>?";

    if (incluirMayusculas) caracteres += mayusculas;
    if (incluirMinusculas) caracteres += minusculas;
    if (incluirNumeros) caracteres += numeros;
    if (incluirSimbolos) caracteres += simbolos;

    var contraseña = "";
    for (var i = 0; i < longitud; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[randomIndex];
    }

    document.getElementById("resultado").value = contraseña;
}

function copiarContraseña() {
    var campoTexto = document.getElementById("resultado");
    campoTexto.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles");
}
