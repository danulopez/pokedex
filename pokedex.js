async function getPokemons (){
    const res = await fetch ('https://pokeapi.co/api/v2/pokemon');
    const respokemons = await res.json();
    getEachPokemon (respokemons.results);

   async function getEachPokemon (pokemons) {
        const pokemonsPromises = []
        for (const pokemon of pokemons) {
            pokemonsPromises.push(fetch(pokemon.results))
        }
        const resDetailPokemons = await Promise.all(pokemonsPromises);
        const detailPokemons = []
        for (const resDetailPokemon of resDetailPokemons) {
            detailPokemons.push(await resDetailPokemon.json())
        }
        console.log(resDetailPokemons);

    }

}
getPokemons()