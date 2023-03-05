
var input = document.getElementById("myInput");

input.addEventListener("focus", function() {
  input.style.transition = "all 0.5s";
  input.style.paddingBottom = "15px";
  input.style.paddingRight = "5px";
});

input.addEventListener("blur", function() {
  input.style.transition = "all 0.5s";
  input.style.paddingBottom = "0px";
  input.style.paddingRight = "0px";
});

let checkboxDOM = document.querySelector("#checkbox")
let labelDOM = document.querySelector("#label")

document.querySelector("#label").addEventListener("click", function () {
    document.querySelector("#checkbox").click()
})

let acoutbuttonDOM = document.querySelector("#acoutbutton")
let buttonsDOM = document.querySelector("#buttons")

document.querySelector("#acoutbutton").addEventListener("click", function () {
    window.location = "https://login.yahoo.com/account/create?.intl=tr&.lang=tr-TR&src=ym&activity=mail-direct&pspid=159600001&.done=https%3A%2F%2Ftr.mail.yahoo.com%2Fd&specId=yidregsimplified&done=https%3A%2F%2Ftr.mail.yahoo.com%2Fd"
})

let createDOM = document.querySelector("#create")

document.querySelector("#buttons").addEventListener("click", function (event) {
    event.preventDefault()
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  
    
    if (validateEmail(input.value)) {
        window.location = "https://login.yahoo.com/account/create?.intl=tr&.lang=tr-TR&src=ym&activity=mail-direct&pspid=159600001&.done=https%3A%2F%2Ftr.mail.yahoo.com%2Fd&specId=yidregsimplified&done=https%3A%2F%2Ftr.mail.yahoo.com%2Fd"
    } else {
        let createEmail = document.createElement('p')
        createEmail.innerHTML = `<p>wrong email</p>`
        createDOM.appendChild(createEmail)
    } 
})