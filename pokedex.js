let results = [];

async function getPokemons() {
  const resPokemons = await fetch("https://pokeapi.co/api/v2/pokemon/?limit='+numPokemon");
  const data = await resPokemons.json();
  results = data.results;
  getDetailPokemons(results);
}

async function getDetailPokemons(pokemons) {
  const pokemonsPromises = pokemons.map(pokemon =>
    fetch(pokemon.url).then(res => res.json())
  );
  const detailPokemons = await Promise.all(pokemonsPromises);
  createPokemoncard(detailPokemons);
}

function createPokemoncard(pokemons) {
  const pokemonContainer = document.getElementById("pokemon-container");
  
  pokemons.forEach(result => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");
    
    const name = document.createElement("h3");
    name.textContent = result.name;
    
    const image = document.createElement("img");
    image.src = result.sprites?.front_default;
    
    const type = document.createElement("p");
    type.textContent = result.types.map(type => type.type.name).join(", ");
    
    const id = document.createElement("p");
    id.textContent = result.id;
    
    pokemonCard.appendChild(name);
    pokemonCard.appendChild(image);
    pokemonCard.appendChild(type);
    pokemonCard.appendChild(id);
    
    pokemonContainer.appendChild(pokemonCard);
  });
}


getPokemons();
