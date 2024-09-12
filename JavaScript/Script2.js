// JavaScript source code
const Dark = "#323232";
const Ligth = "#D8D8D8";

//body.onload = function () { document.body.style.background = Ligth }
background_switch.onclick = function ()
{
    let switch_image = document.getElementById("background_switch");

    let filename = switch_image.currentSrc.split('/');
    console.log(filename);
    if (filename[filename.length - 1] === 'moon.png')
    {
        switch_image.src = 'img/sun.png';
        document.body.className = "dark";
        //document.body.style.backgroundColor = Ligth;
        //document.body.style.color = Dark;
    }
    else {
        switch_image.src = 'img/moon.png';
        document.body.className = "ligth";

        //document.body.style.backgroundColor = Dark;
        //document.body.style.color = Ligth;
    }
    //document.body.className = document.body.className === "ligth" ? "dark" : "ligth";
}
