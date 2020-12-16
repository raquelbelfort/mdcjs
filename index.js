const calculo = (evento) => {
    evento.preventDefault();

let numero1 = document.getElementById('numero1').value;
let numero2 = document.getElementById('numero2').value;
let dividendo, divisor, resto, finish;

    if(numero1 == '' || numero2 == '') {
        finish = 'Não é possível calcular.';
    } 
    
    else {

        if (numero1 > numero2)
        {
          dividendo = numero1;
          divisor = numero2;  
        }
        else
        {
           dividendo = numero2;
           divisor = numero1;  
        }
        while (dividendo % divisor != 0)
        {
            resto = dividendo % divisor;
            dividendo = divisor;
            divisor = resto;
        }
        finish = `Seu MDC resulta em: ${divisor}.`;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = finish;
}
const final = () => {
    document.getElementById('calcular').addEventListener('click', calculo);
};

document.addEventListener('DOMContentLoaded', final);