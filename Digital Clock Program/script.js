// clock Program
function Time(){
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,"0");
    const min = now.getMinutes().toString().padStart(2,"0");
    const sec = now.getSeconds().toString().padStart(2,"0");
    const setTime = `${hour}:${min}:${sec}`;
    document.getElementById("clock").textContent = setTime;
}

Time();
setInterval(Time,1000);