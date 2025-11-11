var contador = 0
<<<<<<< HEAD
var colors = ['#007bff', '#00ff80', '#7c44ff']

function inserirnota() {
    var nota = document.getElementById("nota").value.trim()
    if (!nota) {
        alert("Digite uma nota antes de inserir.")
        return
    }
=======

function inserirnota() {
    var nota = document.getElementById("nota").value.trim()    
>>>>>>> 9f026f118495eb93da8bd43553c42b8945aecbfa

    var tipo = document.querySelector('input[name="urgencia"]:checked').value

    var guardar = document.createElement("div")
    guardar.className = "nota"
    guardar.textContent = nota

    guardar.style.color = colors[contador]

<<<<<<< HEAD
    if (tipo === "sim_urgente") {
        document.getElementById("urgentes").appendChild(guardar)
    } else {
        document.getElementById("nao_urgentes").appendChild(guardar)
=======
        if (tipo === "sim_urgente") {
            document.getElementById("urgentes").appendChild(guardar)
        } else {
            document.getElementById("nao_urgentes").appendChild(guardar)
        }

        document.getElementById("nota").value = ""

        contador++
        if (contador >= 3) {
        contador = 0;
        }
>>>>>>> 9f026f118495eb93da8bd43553c42b8945aecbfa
    }

    document.getElementById("nota").value = "";

    contador++
    if (contador >= colors.length) {
        contador = 0
    }
}

function apagartudo() {
<<<<<<< HEAD
    var ur = document.getElementById("urgentes").getElementsByClassName("nota").length
    var nur = document.getElementById("nao_urgentes").getElementsByClassName("nota").length

    if (ur + nur === 0) {
        alert("Não há notas para apagar.")
        return;
=======
    var urgentes = document.getElementById("urgentes");
    var naoUrgentes = document.getElementById("nao_urgentes");

    if (urgentes.childElementCount == 0 && naoUrgentes.childElementCount == 0) {
        alert("Não há nada para apagar");
    } else {
        urgentes.innerHTML = "";
        naoUrgentes.innerHTML = "";
>>>>>>> 9f026f118495eb93da8bd43553c42b8945aecbfa
    }
}

    document.getElementById("urgentes").innerHTML = ""
    document.getElementById("nao_urgentes").innerHTML = ""
}

function apagar() {
    var tipo = document.querySelector('input[name="urgencia"]:checked').value
    var container
    
    if (tipo === "sim_urgente") {
        container = document.getElementById("urgentes")
    } else {
        container = document.getElementById("nao_urgentes")
    }
    var notas = container.getElementsByClassName("nota")

    if (notas.length === 0) {
        alert("Não há notas para apagar nessa categoria")
        return
    }
    container.removeChild(container.lastElementChild);
}