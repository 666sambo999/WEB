// JavaScript source code
const Dark = "#323232";
const Ligth = "#D8D8D8";

//body.onload = function () { document.body.style.background = Ligth }
background_switch.onclick = function ()
{
    let switch_image = document.getElementById("background_switch");

    //let filename = switch_image.currentSrc.split('/');
    //console.log(filename);
    //if (filename[filename.length - 1] === 'moon.png')
    //{
    //    switch_image.src = 'img/sun.png';
    //    document.body.className = "dark";
    //    //document.body.style.backgroundColor = Ligth;
    //    //document.body.style.color = Dark;
    //}
    //else {
    //    switch_image.src = 'img/moon.png';
    //    document.body.className = "ligth";

    //    //document.body.style.backgroundColor = Dark;
    //    //document.body.style.color = Ligth;
    //}
    document.body.className = document.body.className === "ligth" ? "dark" : "ligth";
}

document.addEventListener("mousemove", function (event) {
    //let x = event.clientX;
    //let y = event.clientY;
    //let c = document.querySelector("#coord");
    //c.textContent = `X = ${x}, Y = ${y};`;
    document.querySelector("#coord").textContent = `X = ${event.clientX}, Y = ${event.clientY};`;
}

);

function imageVisability() {
    document.getElementById("image")
    let button = document.getElementById("btnShow");
    if (button.innerHTML === "Скрыть") {
        image.src = "img/transparent.png";
        button.innerHTML = "Показать";
    }
    else {
        image.src = "img/DrunkMonkey.jpg";
        button.innerHTML = "Скрыть";
    }
}
function ImageVisabDelay() {
    setTimeout(imageVisability(), 500);
}
document.write("<div id='anime'> Елки - палки :-) </div>");
let text = document.querySelector("anime").innerHTML;
let size = text.length;

window.addEventListener("load", );

function animText() {
    if (i >= size) return;
    let id = document.querySelector("anime");
    id.innerHTML = text.substring(0,i++)

    setTimeout(addEventListener);








}