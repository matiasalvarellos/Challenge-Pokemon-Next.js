function Search({searchPokemon}){

  return(
    <div className="search-container">
      <form onSubmit={(e)=> e.preventDefault() } >
        <input onChange={searchPokemon} type="text" className="search-input" placeholder="Buscar Pokémon" />
      </form>
    </div>

  )
}

export default Search;