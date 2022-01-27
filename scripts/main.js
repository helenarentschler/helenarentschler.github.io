let myImage = document.querySelector('#foto');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/helena.jpeg'){
        myImage.setAttribute('src', 'images/Rectangle 1.png');
    } else {
        myImage.setAttribute('src', 'images/helena.jpeg');
    }
}

let myButton = document.querySelector('button');
let myMessage = document.querySelector('#top-message');

function setUserName(){
    let myName = prompt('Escreva o seu nome:');
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myMessage.textContent = 'Seja bem vindo(a), ' + myName + '!';
    }
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myMessage.textContent = 'Seja bem vindo(a), ' + storedName + '!';
}

myButton.onclick = function () {
    setUserName ();
}