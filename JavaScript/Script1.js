// JavaScript source code
function onLoad() {
    alert("Page loader :::")
}

function factorial() {
    let factorialinput = document.getElementById("factorialNum");
    let n = BigInt(factorialinput.value);
    let f = 1n; // "n" после числовой константы делает ее типа BigInt
    for (let i = 1n; i <= n; i++) {
        f *= i;
    }
    let facRes = document.getElementById("facResult");
    facRes.textContent = f;
}
function setColor() {
    //let page = document.getElementById("colorFon");
    document.bgColor = "Black";
}
function setColorOn() {
    //let page = document.getElementById("colorFon");
    document.bgColor = "Blue";
}
function setBgColor() {
    document.bgColor = document.getElementById("chooseColor").value;
}
//function setFgColor() {
//    //document.getElementsByTagName("h2").style.bgColor = document.getElementById("chooseFgColor").value;
//    let tags = document.getElementsByTagName("h2");
//    for (let i = 0; i < tags.length; i++) {
//        tags[i].style.backgroundColor = document.getElementById("chooseColor").value;
//        tags[i].style.color = document.getElementById("chooseFgColor").value;
//    }

//}
function setFgColor() {
    let element = document.getElementsByClassName("Element");
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor = document.getElementById("chooseColor").value;
        element[i].style.color = document.getElementById("chooseFgColor").value;
    }

    let elements = document.querySelectorAll("h2");
    console.log(elements);
    elements.style.backgroundColor = document.querySelector("chooseFgColor").value;
}

function setImage() {// картинки 
    let image = document.getElementById("fileIm");
    //let filename = image;
    console.log(fileIm.files[0].name);
    document.getElementById("photo").src = fileIm.files[0].name;
}
function setBoald() {
    let boald = document.getElementById("elementBoald");
    console.log(boald);
    let items = document.querySelectorAll("ol > li");
    let notItems = document.querySelectorAll("li > ul");

    for (let i = 0; i < items.length; i++) {
        items[i].style.fontWeight = boald.checked ? 900 : 100;
    }
    for (let i = 0; i < notItems.length; i++) {
        notItems[i].style.fontWeight = 100; 
    }
    
}