function soma(){
    var num1=document.getElementById('n1')
    var numero1=Number(num1.value)
    var num2=document.getElementById('n2')
    var numero2=Number(num2.value)
    var oper=document.getElementById('operador').value

    if (oper=='+'){
        var resultado = numero1+numero2
    }
    else if (oper=='-'){
        var resultado = numero1-numero2
    }
    else if (oper=='x'){
        var resultado = numero1*numero2
    }
    else {
        var resultado = numero1/numero2
    }
    
    var getResult= document.getElementById('result')
    getResult.innerHTML=resultado

}