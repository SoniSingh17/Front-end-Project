const result = document.getElementById('result');
const roll = document.getElementById('roll');
const max = 6;
const min = 1;
let randomNum;
roll.onclick=function(){
       randomNum = Math.floor((Math.random()*max))+1;
       result.textContent=randomNum;
}
