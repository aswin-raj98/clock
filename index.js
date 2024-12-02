let is24HourFormat = document.getElementById("timeFormatToggle");

setInterval(showLiveTime, 1000);

function showLiveTime() {
    let time = new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let timeFormat = "";

    if (!is24HourFormat.checked) {
        timeFormat = " AM";
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            timeFormat = " PM";
        } else if (hour === 0) {
            hour = 12;
        }
    }

    hour = hour < 10 ? "0" + hour : hour;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let presentTime = hour + ":" + mins + ":" + secs + (is24HourFormat.checked ? "" : timeFormat);
    document.getElementById("clock").innerHTML = presentTime;
}


