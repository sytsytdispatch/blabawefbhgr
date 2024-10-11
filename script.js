let militaryTime = true;
let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get system timezone

function updateTime() {
    const now = new Date();
    const options = { 
        timeZone, 
        hour12: !militaryTime, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const formattedTime = formatter.format(now);
    document.getElementById('time').textContent = formattedTime;
}

document.getElementById('toggleFormat').addEventListener('click', () => {
    militaryTime = !militaryTime;
    document.getElementById('toggleFormat').textContent = militaryTime ? 'Switch to AM/PM' : 'Switch to Military Time';
});

document.getElementById('timezoneSelect').addEventListener('change', (event) => {
    timeZone = event.target.value;
});

setInterval(updateTime, 1000); // Update time every second
updateTime(); // Initial call to set time immediately
