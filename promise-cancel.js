async function getPokemonData() {
  await fetch("https://pokeapi.co/api/v2/berry/1")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

getPokemonData();
