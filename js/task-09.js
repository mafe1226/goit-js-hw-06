const buttonColor = document.querySelector(".change-color")
const pageColor = document.querySelector(".color")
const backGround = document.querySelector("body")
buttonColor.addEventListener("click", (e)=>{
    const colorBackground = getRandomHexColor ();
    backGround.style.backgroundColor = colorBackground
    pageColor.textContent = colorBackground
});
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}