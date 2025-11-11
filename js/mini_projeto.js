var contador = 0
var colors = ['#007bff', '#00ff80', '#7c44ff']

function inserirnota() {
    var nota = document.getElementById("nota").value.trim()
    if (!nota) {
        alert("Digite uma nota antes de inserir.")
        return
    }

    var tipo = document.querySelector('input[name="urgencia"]:checked').value

    var guardar = document.createElement("div")
    guardar.className = "nota"
    guardar.textContent = nota

    guardar.style.backgroundColor = colors[contador]

    if (tipo === "sim_urgente") {
        document.getElementById("urgentes").appendChild(guardar)
    } else {
        document.getElementById("nao_urgentes").appendChild(guardar)
    }

    document.getElementById("nota").value = "";

    contador++
    if (contador >= colors.length) {
        contador = 0
    }
}

function apagartudo() {
    var ur = document.getElementById("urgentes").getElementsByClassName("nota").length
    var nur = document.getElementById("nao_urgentes").getElementsByClassName("nota").length

    if (ur + nur === 0) {
        alert("Não há notas para apagar.")
        return;
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