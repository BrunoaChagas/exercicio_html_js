var form = document.getElementById('form-Comparacao');

    form.addEventListener("submit", function (e){
        e.preventDefault();
        verificar();
    });

    function verificar(){
        var valor1 = document.getElementById('valor-1')
        var num1 = Number(valor1.value)
        var valor2 = document.getElementById('valor-2')
        var num2 = Number(valor2.value)
        var resp  = document.getElementById('res')

        if (num1 > num2){
            resp.innerHTML = `O valor é inválido!`
        } else{
            resp.innerHTML = 'O Segundo valro é maior que o primeiro!'
        }
    }