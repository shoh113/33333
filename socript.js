let ism = prompt("Ismingizni kiriting");
let a = document.getElementById("title");
a.textContent = " Ismingiz:" + ism;

let yosh = prompt("Yoshingizni kiriting");
let b = document.getElementById("age");
b.textContent = " Yoshingiz:" + yosh;

let ball = prompt("Balingizni kiriting");
let c = document.getElementById("overal");
c.textContent = "Ballingiz:" + ball;


let aaaa = document.getElementById("aaaa")
if( ball > 70) {
 aaaa.textContent = " Siz o'qishga kirdingiz"
}
else{
    aaaa.textContent = "Siz o'qishga kirmadingiz"
}