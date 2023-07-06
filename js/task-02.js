const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
let food = document.querySelector("#ingredients")
let listFood = ingredients.map((value)=>{
    console.log(value)
  const li = document.createElement("li");
    li.textContent = value
    li.classList.add("item")
    return li
})
food.append(...listFood)