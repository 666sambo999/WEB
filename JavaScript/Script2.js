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
    let bacdelay = document.getElementById("btnDelay");
    console.log(bacdelay.style);
    let delay = bacdelay.value;
    console.log(document.body.style);
    document.body.style.transition = `background-color ${delay / 1000}s, color ${delay / 1000}s`;
    document.getElementById("background_switch").style.transition = `background - image ${delay / 1000}s`;
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
    let image = document.getElementById("image")
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
    let delay = document.getElementById("numDelay").value;
    setTimeout(imageVisability(), 500);
}

document.write("<div id='anime'> Елки - палки :-).........(-: </div>");
let text = document.querySelector("#anime").innerHTML;
let size = text.length;
let i = 0;

window.addEventListener("load", animText);

function animText() {
    if (i >= size) return;
    let id = document.querySelector("#anime");
    id.innerHTML = text.substring(0, i++)

    setTimeout(animText,100);
}

/////////////////////////////////////////////////////////////////////
//let date = new Date();
//let result = "Полная дата и время <br>";
//result += `Полная дата и время: ${date}<br>`;
//result += `Полная дата: ${date.getFullYear()}.${chekNumber(date.getMonth() + 1)}.${(chekNumber(date.getDate()))} <br>`;
//result += `Дата: ${date.getDay()}<br>`;
//result += `Только время: ${date.toTimeString()}<br>`;
//document.getElementById("DateTime").innerHTML = result;
//document.write(date);

function chekNumber(i) {
    return i < 10 ? "0"+ 1 : i; 
}
document.body.onload = function tic_timer()
{
    let time = new Date();
    let hh = chekNumber(time.getHours());
    let mm = chekNumber(time.getMinutes());
    let ss = chekNumber(time.getSeconds());
    document.getElementById("timer").innerHTML = `${hh}:${mm}:${ss}`;

    let chBoxD = document.getElementById("checBoxDate").checked;
    if (chBoxD == true) {
        let yyyy = time.getFullYear();
        let MM = chekNumber(time.getMonth() + 1);
        let dd = chekNumber(time.getDate());
        document.getElementById("date_dis").innerHTML = `${yyyy}/${MM}/${dd}`;
    }
    else {
       document.getElementById("date_dis").innerHTML = "";
    }
    setTimeout(tic_timer, 1000);
}

////////////////////////////////////////////////////////////////////////
//Обратный отчет
////////////////////////////////////////////////////////////////////////
document.getElementById("btnStart").onclick = function startCountdown()
{
    //DOM =document object model
    let date = document.getElementById("target_date").valueAsDate;
    let time = document.getElementById("target_time").valueAsDate;
    
    let element = document.getElementById("count_timer");
    let p_date = document.createElement("p");
    let p_time = document.createElement("p");
    p_date.append(document.createTextNode(date));
    p_time.append(document.createTextNode(time));
    element.append(p_date);
    element.append(p_time);
}
