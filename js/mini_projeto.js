function inserirnota(){
    var nota, tipo
    
    nota=document.getElementById("nota").value.trim()
    document.getElementById("urgentes").innerHTML = nota
    tipo= document.querySelector('input[name="urgencia"]:checked').value
    var nota = document.getElementById("nota").value.trim()
    if(!nota) return;

    var guardar = document.createElement("div")
    guardar.textContent = nota;

    var tipo = document.querySelector('input[name="urgencia"]:checked').value

    if(tipo === "sim_urgente"){
        document.getElementById("urgentes").appendChild(item)
    } 
    else {
        document.getElementById("nao_urgentes").appendChild(item)
        document.getElementById("urgentes").appendChild(guardar)
    } else {
        document.getElementById("nao_urgentes").appendChild(guardar)
    }

    document.getElementById("nota").value = ""
}



function apagartudo(){
    document.getElementById("urgentes").innerHTML = ""
    document.getElementById("nao_urgentes").innerHTML = ""
}


function apagar(){
    var tipo = document.querySelector('input[name="urgencia"]:checked').value;
    var container;

    if (tipo === "sim_urgente") {
        container = document.getElementById("urgentes");
    } else {
        container = document.getElementById("nao_urgentes");
    }

    if (container && container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}


var colorIndex = 0
var colors = ['#2B6CB0', '#2F855A', '#6B46C1']
   
    colorIndex = (colorIndex + 1) % colors.length

    var tipo = document.querySelector('input[name="urgencia"]:checked').value

    if(tipo === "sim_urgente"){
        document.getElementById("urgentes").appendChild(guardar)
    } else {
        document.getElementById("nao_urgentes").appendChild(guardar)
    }

    document.getElementById("nota").value = ""