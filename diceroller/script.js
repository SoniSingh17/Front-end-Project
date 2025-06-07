function roll(){
    const numOfDice = document.getElementById('input').value; // as its a input element we just want the input...
    const result = document.getElementById('result');
    const diceImages = document.getElementById('images');
    const values =[];
    const images = [];
    for(let i = 0 ; i<numOfDice ; i++){
        const value = Math.floor(Math.random()*6) + 1;
       
        values.push(value);
        images.push(`<img src = "images/${value}.png" alt="Dice ${value}">`)


    }
    result.textContent = `Dice : ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
    
}