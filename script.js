const passwordBox=document.getElementById("Password");
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweCase="abcdefghijklmopqrstuvwxyz";
const numbers="0123456789";
const symbol="!@#$%^&*(){}[]?_-|";
const allChars=upperCase+loweCase+numbers+symbol;
const length=12;


function randomNumber(){
    let Password1='';
    Password1 +=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password1 +=loweCase[Math.floor(Math.random()*loweCase.length)];
    Password1 +=numbers[Math.floor(Math.random()*numbers.length)];
    Password1 +=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>Password1.length){
        Password1 +=allChars[Math.floor(Math.random()*allChars.length)];
    }
     passwordBox.value=Password1;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
    document.getElementById('cop').style.visibility="visible";
   document.querySelector(".cop").innerHTML="Copied!"
   setTimeout(function(){
    document.getElementById('cop').style.visibility="hidden";
   },1000);
}