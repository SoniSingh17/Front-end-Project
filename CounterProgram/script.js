const b1 = document.getElementById("but1");
const b2 = document.getElementById("but2");
const b3 = document.getElementById("but3");
const result = document.getElementById("countLabel1");
let count = 0;
b1.onclick = function(){
    count++;
    result.textContent = count;

}
b2.onclick = function(){
    count=0;
    result.textContent = count;

}
b3.onclick = function(){
    count--;
    result.textContent = count;

}








