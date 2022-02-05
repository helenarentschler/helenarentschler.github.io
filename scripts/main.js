let myImage = document.querySelector('#foto');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/helena.jpeg'){
        myImage.setAttribute('src', 'images/helena2.jpg');
    } else {
        myImage.setAttribute('src', 'images/helena.jpeg');
    }
}
