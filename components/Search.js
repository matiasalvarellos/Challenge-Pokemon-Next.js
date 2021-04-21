function Search(){
  return(
    <div className="search-container">
      <div className="input-group rounded">
        <input type="text" className="form-control rounded" placeholder="Buscar Pokémon" aria-label="Search"
          aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  )
}

export default Search;