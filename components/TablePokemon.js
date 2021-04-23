function TablePokemon({name, id, height, weight, types, abilities}){

  return (
    <div className="card-pokemon">
      <div className="pokemon-container">

        <div className="imageTable">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
        </div>

        <div className="tablePokemon">
          <div className="dataTable">
            <div className="titleTable">
              <h2>
                {name}
              </h2>
            </div>

            <div className="informationPokemon">
              <div className="data-top">

                <p className="data">Height</p>
                <p>{height*10} cm</p>

              </div>

              <div className="data-top">

                <p className="data">Weight</p>
                <p>{weight/10} Kg</p>

              </div>

              <div className="data-bottom">

                <p className="data">Type</p>
                {types.map((type, i) => <p key={i}>{type.type.name}</p>)}

              </div>

              <div className="data-bottom">

                <p className="data">Abilities</p>
                {abilities.map((ability,i)=> <p key={i}>{ability.ability.name}</p>)}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default TablePokemon;