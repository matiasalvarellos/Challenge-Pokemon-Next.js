async function getPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const dataPokemon = await res.json();

    return dataPokemon 

  } catch (error) {
    console.log(error)
  }

}
export default getPokemon;