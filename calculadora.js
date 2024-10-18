try {
    var vetor = []
    var lerMostrador = document.getElementById('mostrador')
    var resultadoMostrado = false


    function leitura(event) {
        var valorClique = event.target.value

        if (resultadoMostrado && !isNaN(valorClique)) {
            vetor.length = 0
            lerMostrador.innerHTML = ''
        }

        if (valorClique == '/100') {
            lerMostrador.innerHTML += '%'
        }
        else {
            lerMostrador.innerHTML += valorClique
        }
        
        vetor.push(valorClique)
        resultadoMostrado = false
    }

    function calculo(){
        try {
            debugger
            var expressao = vetor.join('')
            var resultado = eval(expressao)
            lerMostrador.innerHTML = resultado
            vetor.length = 0
            vetor.push(resultado)
            resultadoMostrado = true
        } catch (error) {
            alert(error.toString())
        }
    }

    function limpar(){
        vetor.length = 0
        lerMostrador.innerHTML = ''
        resultadoMostrado = false
    }
} catch (error) {
    alert(error.toString())
}


