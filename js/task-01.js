const list = document.querySelector("#categories")
const numberCategories = list.children.length
if (list) {
    console.log(`numero de categorias: ${numberCategories}`)
} else {
    console.log("no existe el elemento")
}
let itemsList = document.querySelectorAll("li.item");
const categoryArray = [];
itemsList.forEach((element) => {
  console.log("Categoria: " + element.firstElementChild.textContent);
  console.log("Elementos:" + element.lastElementChild.children.length);
}); 
