const myLabel = document.getElementById("clock");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "PM" : "AM";

        //convert the military time to standard time
        hours = (hours % 12) || 12; 

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function formatZeroes(time){

    //converts time to string
    time = time.toString();

    //adds zero to single digit
    return time.length < 2 ? "0" + time : time;
    }

}