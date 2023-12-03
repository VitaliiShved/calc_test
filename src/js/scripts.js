window.addEventListener('load', function(){

    let inp1 = document.querySelector('.num1');
    let inp2 = document.querySelector('.num2');
    let option = document.querySelector('.option');
    let btnRun = document.querySelector('.btnRun');
    let result = document.querySelector('.result');

    btnRun.addEventListener('click', function(){
        let total;
        if (option.value === "+"){
            total = parseInt(inp1.value) + parseInt(inp2.value);
        } else if (option.value === "-"){
            total = parseInt(inp1.value) - parseInt(inp2.value);
        } else if (option.value === "*"){
            total = parseInt(inp1.value) * parseInt(inp2.value);
        } else if (option.value === "/") {
            total = parseInt(inp1.value) / parseInt(inp2.value);
        } else {
            result.innerHTML = 'Помилка';
        }
        result.innerHTML = total;
    });
});

