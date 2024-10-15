var vetor = []
var lerMostrador = document.getElementById('mostrador')

function leitura(event) {
    var valorClique = event.target.value
    lerMostrador.innerHTML += valorClique
    vetor.push(valorClique)
}

function calculo(){
    var expressao = vetor.join('')
    var resultado = eval(expressao)
    lerMostrador.innerHTML = resultado
    vetor.length = 0
    vetor.push(resultado)
}

function limpar(){
    vetor.length = 0
    lerMostrador.innerHTML = ''
}