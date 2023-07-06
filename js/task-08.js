const form = document.querySelector(".login-form")
form.addEventListener("submit", clickSubmit)
function clickSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;  
    if (email.value === "" || password.value === "") {
      return alert("todos los espacios deben ser rellenados.") 
    }  
    console.log(`email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }