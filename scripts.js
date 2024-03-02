const key = "67d11c6dfcc55f86b8fb253fca35d3f9"



function colocarDadosNaTela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}


async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric `).then(response => response.json()) //
    
    colocarDadosNaTela(dados);
}


function procurarCidade(){
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}