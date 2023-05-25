async function getPokemons(){
    const res = await fetch("https://pokeapi.co/api/v2/pokemon")
    const resPokemons = await res.json();
    getDetailPokemons(resPokemons.results);
  }
  async function getDetailPokemons(pokemons){
    const pokemonsPromises = pokemons.map(pokemon => fetch(pokemon.url).then(res => res.json()))
    const detailPokemons = await Promise.all(pokemonsPromises);
    console.log(detailPokemons)
  }

  const pokemon = results.map((result) => {
    name: result.name;
    image: result.sprites['front_default'];
    type: result.types.map((type) => type.type.name).join(', ');
    id: result.id})

 // function printcharacters (pokemons) {
 //   for (const pokemon of pokemons) {
 //   const container$$ = document.createElement('div')

 //   container$$.innerHTML= `
    
  // `


getPokemons()