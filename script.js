let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePass=document.querySelector("#valor")
let pass = document.querySelector("#senha")
let coitainerPass= document.querySelector("#containerPass")

let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
let newPass = "";

sizePass.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePass.innerHTML = this.value;
}

function generate(){
    let finalPass=""
    for(let i = 0, n = char.length; i < sliderElement.value; ++i){
        finalPass += char.charAt(Math.floor(Math.random()* n));
    }

    coitainerPass.classList.remove("hide")
    pass.innerHTML = finalPass
    newPass = finalPass

}
function copy(){
    navigator.clipboard.writeText(newPass)
         .then(() => alert("Copied"))
}