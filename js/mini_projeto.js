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
        if (contador >= colors.length) {
        contador = 0;
        }
    }

function apagartudo() {
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

            container.removeChild(container.lastElementChild)
        
    }
