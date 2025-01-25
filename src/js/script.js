const inputs = document.querySelectorAll(".input");
const alerts = document.querySelectorAll(".alert")

const submit = document.getElementById("btn")

submit.addEventListener("click", function (event) {
   event.preventDefault()
   inputs.forEach((input, index) => {
     let alert = alerts[index]
     if (input.value.trim() === "") {
        input.classList.add("blank")
        alert.classList.add("opacity")
     } else {
        input.classList.remove("blank")
        alert.classList.remove("opacity")
        input.classList.add("content")
     }
   })
 }) 
