const randomNum = Math.floor(Math.random()*100)+1;
const guess = document.getElementById('guess');
const message = document.getElementById('message');
const check = document.getElementById('check');

check.onclick = function(){
    const val = Number(guess.value);
    if(!val || val < 1 || val > 100){
        message.textContent="Enter a valid number between 1 to 100.";
        console.log("num is :" + randomNum)
    }
    else if(val == randomNum){
        message.textContent="Congratulations you gessued it right !!";
        console.log("num is :" + randomNum)
    }
    else if(val < randomNum){
        message.textContent = "Too Low ! Try again.";
        console.log("num is :" + randomNum)
    }
    else{
        message.textContent = "Too High ! Try again";
        console.log("num is :" + randomNum)
    }
    guess.value="";
    guess.focus();
}