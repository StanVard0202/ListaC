const requestURL_jogos = "https://raw.githubusercontent.com/StanVard0202/ListaC/Database/jogos.json"
const requestURL_equipas = "https://raw.githubusercontent.com/StanVard0202/ListaC/Database/equipas.json"
const request_jogos = new Request(requestURL_jogos)
const request_equipas = new Request(requestURL_equipas)

const div = document.querySelector("#equipas")
const table = document.querySelector("#table")
const width = window.innerWidth

let handler = 0

window.addEventListener("load", get_data())

if(handler >= 2){
    setTimeout(get_data(),300000)
}


function get_data(){
    fetch(request_jogos).then((response) => response.json()).then((data) => print_data(data))
    fetch(request_equipas).then((response) => response.json()).then((data) => print_equipas(data))
    handler++
}

function print_data(d){
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

function print_equipas(g){
    var html = ""
    for(var i=0;i<g.length;i++){
        html+="<div class='geral _" + i + "'>"
        html+="<p class='titulo'>"+ g[i].name +"</p>"
        html+="<p class='ano'>Ano/Turma: "+ g[i].ano +"</p>"
        html+="<ul>"
        for(var a = 0;a<g[i].participantes.length;a++){
            html+="<li>"+ g[i].participantes[a] +"</li>"
        }
        html+="</ul></div>"
    }
    div.innerHTML = html
}