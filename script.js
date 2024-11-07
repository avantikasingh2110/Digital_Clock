function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} <span class="am-pm">${amPm}</span>`;

    document.getElementById('clock').innerHTML = timeString;
}

updateClock();

setInterval(updateClock, 1000);