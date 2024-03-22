let resultado = document.getElementById('resultado');


    function asignar(valor){
        resultado.value += valor;
    }


    function calcular(){
        resultado.value = eval(resultado.value);
    }


    function limpiar(){
        resultado.value = "";
    }


    function cuadrado() {
        const valor = document.getElementById('resultado').value;
        const resultado = Math.pow(parseFloat(valor), 2);
        document.getElementById('resultado').value = resultado;
    }
    
    function logaritmo() {
        const valor = document.getElementById('resultado').value;
        document.getElementById('resultado').value = Math.log10(parseFloat(valor));
    }

    function pi() {
        document.getElementById('resultado').value += Math.PI;
    }
    
    function raiz() {
        const valor = document.getElementById('resultado').value;
        document.getElementById('resultado').value = Math.sqrt(parseFloat(valor));
    }