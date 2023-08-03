var message = document.getElementById("alert")
var para = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam voluptatibus dolor saepe pariatur deleniti amet?"
var str = para.split(" ")

var captcha = document.getElementById("captcha-value")
captcha.value = str[Math.round(Math.random()*str.length)]

var inputCaptcha = document.getElementById("input-captcha")

var submit = document.getElementById("submit")
submit.addEventListener("click",()=>{
    if(captcha.value == inputCaptcha.value){
        message.textContent = "Entered captcha is correct"
        message.style.color ="#826afb"
    }
    else{
        message.textContent = "Entered captcha is not correct"
        message.style.color ="#FF2525"
    }
})

