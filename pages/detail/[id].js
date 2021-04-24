import TablePokemon from "../../components/TablePokemon";
import ArrowButtoms from "../../components/ArrowButtoms"
import getPokemon from "../../utils/getPokemon";
import {useState} from "react";

function Detail(props){

  const [pokemon, setPokemon] = useState(props)

  return(
    <div>
      <ArrowButtoms />
      <TablePokemon
        name={pokemon.name}
        id={pokemon.id}
        weight={pokemon.weight}
        height={pokemon.height}
        types={pokemon.types}
        abilities={pokemon.abilities} 
      />
    </div>
  )
}

Detail.getInitialProps = (context)=>{
  let {query} = context;
  let {id} = query;
  let pokemon = getPokemon(id);
  return pokemon
}


export default Detail;