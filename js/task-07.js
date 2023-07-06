const letter = document.querySelector("#font-size-control")
const size = document.querySelector("#text")
letter.addEventListener("input", ()=>{
    size.style.fontSize = `${letter.value}px`;
});
