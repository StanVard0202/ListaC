const table = document.querySelector("#table")
const width = window.innerWidth

const requestURL = "https://raw.githubusercontent.com/StanVard0202/ListaC/Database/jogos.json"
const request = new Request(requestURL)

window.addEventListener("load", get_data(true))

setTimeout(get_data(),300000)

function get_data(){
    fetch(request).then((response) => response.json()).then((data) => print_data(data))
}

function print_data(d){
    console.log(d)
    db = d
    var html = ""
    for(var i=0;i<d.length;i++){
        html+="<tr>"
        html+="<td>"+ d[i]["name"] +"</td>"
        html+="<td>"+ d[i]["vitorias"] +"</td>"
        html+="<td>"+ d[i]["empates"] +"</td>"
        html+="<td>"+ d[i]["derrotas"] +"</td>"
        html+="<td>"+ pontos(d[i]) +"</td>"
        html+="<tr>"
    }
    table.innerHTML = html
}

function pontos(team){
    var pontos = (team["vitorias"] * 3) + team["empates"]
    return pontos;
}