let toggleButton =document.querySelector(".toggleBut");
let optionButton =document.querySelector(".option");
let body =document.querySelector("body");

optionButton.addEventListener('click', ()=>{
    optionButton.classList.toggle("dark");
    body.classList.toggle("active")
})