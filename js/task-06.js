const form = document.querySelector("#validation-input")
form.addEventListener("blur",( event )=>{ 
   if (event.target.value.length < 6) {
    event.target.style.border = "3px solid #f44336"; 
   } else {
    event.target.style.border = "3px solid #4caf50"; 
   }
});
