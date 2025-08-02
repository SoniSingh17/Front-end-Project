FetchData();
async function FetchData(){
    try{
        const pokemonName = document.getElementById("pokemon_name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Error processing the data");
            
        }
        const data = await response.json();
        // console.log(data);
        const pokemonImg = data.sprites.front_default;
        const ImgElement = document.getElementById("pokeImg");
        ImgElement.src=pokemonImg;
        ImgElement.style.display="block";

    }
    catch(error){
        console.log(error);


    }
}