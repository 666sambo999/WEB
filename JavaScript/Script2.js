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

document.write("<div id='anime'> Елки - палки go:-).........(-:away </div>");
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
//result += `Полная дата: ${date.getFullYear()}.${checkNumber(date.getMonth() + 1)}.${(checkNumber(date.getDate()))} <br>`;
//result += `Дата: ${date.getDay()}<br>`;
//result += `Только время: ${date.toTimeString()}<br>`;
//document.getElementById("DateTime").innerHTML = result;
//document.write(date);

function checkNumber(i) {
    return i < 10 ? "0"+ 1 : i; 
}
document.body.onload = function tic_timer()
{
    let time = new Date();
    let hh = checkNumber(time.getHours());
    let mm = checkNumber(time.getMinutes());
    let ss = checkNumber(time.getSeconds());
    document.getElementById("timer").innerHTML = `${hh}:${mm}:${ss}`;

    let chBoxD = document.getElementById("checBoxDate").checked;
    if (chBoxD == true) {
        let yyyy = time.getFullYear();
        let MM = checkNumber(time.getMonth() + 1);
        let dd = checkNumber(time.getDate());
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
    let targetDate = document.getElementById("target_date");
    let targetTime = document.getElementById("target_time");
    let btnStart = document.getElementById("btnStart");
    targetDate.disabled = targetTime.disabled = !targetTime.disabled;
    if (btnStart.value == "Start")
    {
        btnStart.value = "Stop";
        tickCountDown();
    }
    else
    {
        btnStart.value = "Start";
    }
    //let date = document.getElementById("target_date").valueAsDate;
    //let time = document.getElementById("target_time").valueAsDate;
    //let result = `Дата: ${date.getFullYear()}.${checkNumber(date.getMonth() + 1)}.${checkNumber(date.getDate())} <br>`;
    //result += `Время: ${checkNumber(time.getHours())}:${checkNumber(time.getMinutes())}:${checkNumber(time.getSeconds())}`;
    //document.getElementById("result").innerHTML = result;

    //let element = document.getElementById("count_timer");
    //let p_date = document.createElement("p");
    //let p_time = document.createElement("p");
    //p_date.append(document.createTextNode(date));
    ////p_date.append(document.createTextNode(`Дата: ${date}`));
    ////p_time.append(document.createTextNode(`Время:${time}`));
    //p_date.append(document.createTextNode(`Дата: ${date.getFullYear()}/${checkNumber(date.getMonth()+1)}/${checkNumber(date.getDate())}`));
    //p_time.append(document.createTextNode(`Время:${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`));//p_time.append(document.createTextNode(time));
    //element.append(p_date);
    //element.append(p_time);
}

function tickCountDown()
{
    if (!document.getElementById("target_time").disabled) return;
    let now = new Date();
    let targetDateControl = document.getElementById("target_date");
    let targetTimeControl = document.getElementById("target_time");
    let targetDate = targetDateControl.valueAsDate;
    let targetTime = targetTimeControl.valueAsDate;
    targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset() / 60);
    document.getElementById("target_date").innerHTML = targetDate.toDateString();
    //targetTime.setDate(now.toDateString());
    targetTime.setFullYear(targetDate.getFullYear());
    targetTime.setMonth(targetDate.getMonth());
    targetTime.setDate(targetDate.getDate());
    targetTime.setHours(targetTime.getHours() + (targetTime.getTimezoneOffset()/60)-1);
    document.getElementById("targetTimeValue").innerHTML = targetTime;
    let duration = targetTime;
    document.getElementById("result").innerHTML = duration + "<br>" + now;
    let timestamp = targetTime - now;
    console.log(timestamp);
    //let time_offset = new Date(timestamp);
    //let time_left = "";
    //if (time_offset.getFullYear() - now.getFullYear() > 0) {
    //    time_left = `${time_offset.getFullYear()} лет,`
    //}
    //if (time_offset.getMonth() > 0) {
    //    time_left += `${checkNumber(time_offset.getMonth())} месяцев,`;
    //}
    //if (time_offset.getDate() > 0) {
    //    time_left += `${checkNumber(time_offset.getDate())} дней,`;
    //}
    //time_left += `${checkNumber(time_offset.getHours())}:${checkNumber(time_offset.getMinutes())}:${checkNumber(time_offset.getSeconds())};`;
    //time_offset.setHours(time_offset.getHours() + time_offset.getTimezoneOffset() / 60);
    //document.getElementById("result").innerHTML = time_left;

    

    timestamp = Math.trunc(timestamp / 1000);
    timestamp *= 1000;

    const DAYS_IN_MONTH = 365 / 12;
    const SECONDS_IN_MONTH = 86400 * DAYS_IN_MONTH;
    const SECONDS_IN_WEEK = 86400 * 7;
    const SECONDS_IN_DAY = 86400;
    const SECONDS_IN_HOUR = 3600;
    const SECONDS_IN_MINUTE = 60;

    //const SECONDS_IN_YEAR = 31557600;//SECO
    const SECONDS_IN_YEAR = SECONDS_IN_DAY * 365 + SECONDS_IN_HOUR * 6;
    console.log(SECONDS_IN_YEAR);

    let timestamp_in_seconds = Math.floor(timestamp / 1000);
    let time_of_day = timestamp_in_seconds % SECONDS_IN_DAY;
    //let timestamp_of_day = time_of_day;
    timestamp_in_seconds = Math.floor(timestamp_in_seconds / SECONDS_IN_DAY);
    timestamp_in_seconds = timestamp_in_seconds * SECONDS_IN_DAY;

    let years = Math.floor(timestamp_in_seconds / SECONDS_IN_YEAR);
    if (years > 0) {
        timestamp_in_seconds = (timestamp_in_seconds % (years * SECONDS_IN_YEAR));
        let years_unit = document.getElementById("years_unit");
        if (years_unit == null) {
            let display = document.getElementById("display");
            display.prepend(createTimeBlock("years", years));
        }
        else years_unit.innerHTML = years;
    }
    else {
        removeTimeBlock("years");
    }

    let month = Math.floor(timestamp_in_seconds / SECONDS_IN_MONTH);
    if (month > 0) {
        let display = document.getElementById("display");
        timestamp_in_seconds = (timestamp_in_seconds % (month * SECONDS_IN_MONTH));
        let month_unit = document.getElementById("month_unit");
        if (month_unit == null) {
            month_block = createTimeBlock("month", month);

            let years_unit = document.getElementById("years_unit");
            if (years_unit != null) {
                let years_block = years_unit.parentElement;
                years_block.after(month_block);
            }
            else {
                let display = document.getElementById("display");
                display.prepend(month_block);
            }
        }
        document.getElementById("month_unit").innerHTML = checkNumber(month);
    }
    else {
        removeTimeBlock("month");
    }

    let weeks = Math.floor(timestamp_in_seconds / SECONDS_IN_WEEK);
    if (weeks > 0) {
        timestamp_in_seconds = (timestamp_in_seconds % (weeks * SECONDS_IN_WEEK));
        let display = document.getElementById("display");
        let week_unit = document.getElementById("weeks_unit");
        if (week_unit == null) {
            let week_block = createTimeBlock("weeks", weeks);

            let month_unit = document.getElementById("month_unit");
            let year_unit = document.getElementById("years_unit");

            if (month_unit != null)
                month_unit.parentElement.after(week_block);
            else if (year_unit != null)
                year_unit.parentElement.after(week_block);
            else
                display.prepend(week_block);
        }
        else week_unit.innerHTML = checkNumber(weeks);
    }
    else {
        removeTimeBlock("weeks");
    }

    let days = Math.floor(timestamp_in_seconds / SECONDS_IN_DAY);
    let days_in_seconds = days * SECONDS_IN_DAY;
    if (days > 0) {
        timestamp_in_seconds = (timestamp_in_seconds % (days * SECONDS_IN_DAY));
        let days_unit = document.getElementById("days_unit");
        if (days_unit == null) {
            let days_block = createTimeBlock("days", days);
            let hours_unit = document.getElementById("hours_unit");
            let hours_block = hours_unit.parentElement;
            hours_block.before(days_block);
        }
        else days_unit.innerHTML = checkNumber(days);
    }
    else
        removeTimeBlock("days");
    //console.log(timestamp_in_seconds % days_in_seconds);

    let hours = Math.floor(time_of_day / 3600);
    if (hours > 0) time_of_day = (time_of_day % (hours * SECONDS_IN_HOUR));

    let minutes = Math.floor(time_of_day / SECONDS_IN_MINUTE);
    if (minutes > 0) time_of_day = (time_of_day % (minutes * 60));

    let seconds = Math.floor(time_of_day);

    //https://planetcalc.com/7741/
    document.getElementById("result").innerHTML = `${years} Years, ${month} Month, ${weeks} Weeks, ${days} Days, ${checkNumber(hours)} Hours, ${checkNumber(minutes)} Minutes, ${checkNumber(seconds)} Seconds;`;
    //document.getElementById("result").innerHTML = `Days: ${days} Hours: ${checkNumber(hours)} Minutes:${checkNumber(minutes)} Seconds:${checkNumber(seconds)}`;
    //document.getElementById("result").innerHTML = timestamp;

    document.getElementById("hours_unit").innerHTML = checkNumber(hours);
    document.getElementById("minutes_unit").innerHTML = checkNumber(minutes);
    document.getElementById("seconds_unit").innerHTML = checkNumber(seconds);

    let today = new Date("Sep 14 2024");
    let difference99 = new Date("Dec 31 2099");
    let difference100 = new Date("Dec 31 2100");
    //https://www.google.com/search?q=%D0%95%D1%81%D1%82%D1%8C+%D0%BB%D0%B8+29+%D1%84%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8F+%D0%B2+2100+%D0%B3%D0%BE%D0%B4%D1%83&rlz=1C1FKPE_enGE1117GE1117&oq=%D0%95%D1%81%D1%82%D1%8C+%D0%BB%D0%B8+29+%D1%84%D0%B5%D0%B2%D1%80%D0%B0%D0%BB%D1%8F+%D0%B2+2100+%D0%B3%D0%BE%D0%B4%D1%83&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCTE1NTg4ajFqN6gCALACAA&sourceid=chrome&ie=UTF-8
    //https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D0%B3%D0%BE%D0%B4#:~:text=1600%20%D0%B8%202000%20%D0%B3%D0%BE%D0%B4%D1%8B%20%E2%80%94%20%D0%B2%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D1%81%D0%BD%D1%8B%D0%B5,%D0%B3%D0%BE%D0%B4%2C%20%D1%81%D0%BB%D0%B5%D0%B4%D1%83%D1%8E%D1%89%D0%B8%D0%BC%20%D0%B1%D1%83%D0%B4%D0%B5%D1%82%202028%20%D0%B3%D0%BE%D0%B4.
    console.log("\n--------------------------------------\n");
    console.log((difference99 - today) / SECONDS_IN_DAY);
    console.log((difference100 - today) / SECONDS_IN_DAY);
    console.log((difference100 - difference99) / SECONDS_IN_DAY);
    console.log("\n--------------------------------------\n");
    console.log(`duration:${duration}`);
    console.log(`timestamp_in_seconds:${timestamp_in_seconds}`);
    console.log(`time_of_day:${time_of_day}`);
    //if (duration > 0)setTimeout(tickCountdown, 1000);
    document.getElementById("TimestampDebug").innerHTML = timestamp;
    if (full_timestamp > 0)
        setTimeout(tickCountdown, 1000);
    else {
        let player = document.getElementById("player");
        player.play();
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function createTimeBlock(name, value) {
    let time_block = document.createElement("div");
    time_block.className = "time_block";

    let unit = document.createElement("div");
    unit.id = `${name}_unit`;
    unit.className = "time_unit";
    unit.innerHTML = checkNumber(value);

    let marker = document.createElement("div");
    marker.id = `${name}_marker`;
    marker.className = "time_marker";
    marker.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);
    //https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

    time_block.prepend(unit);
    time_block.append(marker);

    //let display = document.getElementById("display");
    //display.prepend(time_block);

    return time_block;
}
function removeTimeBlock(name) {
    let unit = document.getElementById(`${name}_unit`);
    if (unit != null) {
        let block = unit.parentElement;
        //document.removeChild(years_time_block);
        let block_parent = block.parentElement;
        block_parent.removeChild(block);
    }
}

document.getElementById("select_file").onchange =
    function getSoundFile() {
        let selected = document.getElementById("selected_file");
        let select = document.getElementById("select_file");
        selected.innerHTML = select.files[0].name;
        let player = document.getElementById("player");
        player.src = `D:/Musik\\${select.files[0].name}`;
    }
//document.getElementById("apply_file").onclick =
//function getSoundFile()
//{
//	let selected = document.getElementById("selected_file");
//    let select = document.getElementById("select_file");
//    selected.innerHTML = select.files[0].name;
//}

function loadFiles() {
    let fs = aqFileSystem.FindFiles("D:/Musik/", "*.*");
}

//let selector = document.getElementById('selector');
//selector.addEventListener("change", function () {
//    let id = this.value;
//    play(+id);
//});

//function play(id) {
//    let audio = new Audio;
//    if (id === 0) audio.pause();
//    else {
//        audio.src = 'D:/Musik' + id + '.mp3';
//        audio.play = true;
//    }
//}