async function getAllPokemons(){

  try{
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0")
    const {results} = await res.json();
  
    const allPokemons = results.map((result, i)=>{
  
      const id = i+1;
      const imageUrl =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  
      return {
        name: result.name,
        url: result.url,
        imageUrl,
        id,
      }
    })
  
    return {
      props:{allPokemons}
    }

  }catch(error){
    console.log(error)
  }

}
export default getAllPokemons;
