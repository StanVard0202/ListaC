const requestURL_jogos = "https://raw.githubusercontent.com/StanVard0202/ListaC/Database/jogos.json"
const requestURL_equipas = "https://raw.githubusercontent.com/StanVard0202/ListaC/Database/equipas.json"
const request_jogos = new Request(requestURL_jogos)
const request_equipas = new Request(requestURL_equipas)

const div = document.querySelector("#equipas")
const table = document.querySelector("#table")
const alert_div = document.querySelector(".alert")
const width = window.innerWidth

let handler = 0

window.addEventListener("load", get_data)
window.addEventListener("resize", resize)

if(handler >= 2){
    setTimeout(get_data(),1000)
}

function resize(){
    if(width <= 650){
        alert_div.innerHTML = "Para ver mais informações vire o dispositivo"
    }else{
        alert_div.innerHTML = ""
    }
}


function get_data(){
    resize()
    fetch(request_jogos).then((response) => response.json()).then((data) => print_data(data))
    fetch(request_equipas).then((response) => response.json()).then((data) => print_equipas(data))
    handler++
}

function print_data(d){
    var html = ""
    for(var i=0;i<d.length;i++){
        html+="<tr>"
        html+="<td class='name'>"+ d[i]["name"] +"</td>"
        html+="<td class='vitoria'>"+ d[i]["vitorias"] +"</td>"
        html+="<td class='empate'>"+ d[i]["empates"] +"</td>"
        html+="<td class='derrota'>"+ d[i]["derrotas"] +"</td>"
        html+="<td class='pontos'>"+ pontos(d[i]) +"</td>"
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