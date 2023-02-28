
let emailDOM = document.querySelector("#email")
let hrDOM = document.querySelector("#hr")
let sendbuttonDOM = document.querySelector("#sendbutton")

document.querySelector("#sendbutton").addEventListener("click", function (event) {
    event.preventDefault()
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }  
    
    if (validateEmail(emailDOM.value)) {
        console.log(emailDOM.value)
    } else {
        alert("wrong")
    }
})

localStorage.setItem("email", emailDOM.value)