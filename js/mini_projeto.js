var contador = 0

function inserirnota() {
    var nota = document.getElementById("nota").value.trim()    

    var tipo = document.querySelector('input[name="urgencia"]:checked').value

    var guardar = document.createElement("div")
        guardar.textContent = nota

    var colors = ['#007bff', '#00ff80', '#7c44ff']
    guardar.style.color = colors[contador];

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
    }

function apagartudo() {
    var urgentes = document.getElementById("urgentes");
    var naoUrgentes = document.getElementById("nao_urgentes");

    if (urgentes.childElementCount == 0 && naoUrgentes.childElementCount == 0) {
        alert("Não há nada para apagar");
    } else {
        urgentes.innerHTML = "";
        naoUrgentes.innerHTML = "";
    }
}

function apagar() {
    var tipo = document.querySelector('input[name="urgencia"]:checked').value
    var container

        if (tipo === "sim_urgente") {
            container = document.getElementById("urgentes")
        } else {
            container = document.getElementById("nao_urgentes")
        }

            container.removeChild(container.lastElementChild)
        
    }
