document.querySelector('[data-action="increment"]').addEventListener("click", incremento);
document.querySelector('[data-action="decrement"]').addEventListener("click", decremento);
let counterValue = 0;
function incremento() {
    counterValue ++;
    document.querySelector("#value").innerHTML=counterValue
} 
function decremento() {
    counterValue --;
    document.querySelector("#value").innerHTML=counterValue
} 