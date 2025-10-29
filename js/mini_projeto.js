function inserirnota(){
    var nota, tipo
    
    nota=document.getElementById("nota").value.trim()
    document.getElementById("urgentes").innerHTML = nota
    tipo= document.querySelector('input[name="urgencia"]:checked').value


    if(tipo === "sim_urgente"){
        document.getElementById("urgentes").appendChild(item)
    } 
    else {
        document.getElementById("nao_urgentes").appendChild(item)
    }

    document.getElementById("nota").value = ""

}


