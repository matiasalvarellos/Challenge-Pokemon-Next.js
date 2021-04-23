import Head from "next/head";
import Pokemon from "../components/Pokemon";
import {useState} from "react";
import Search from "../components/Search";
import getAllPokemons from "../utils/getAllPokemons";
import Error from "../components/Error"

export function getStaticProps(context){
  return getAllPokemons()
}


export default function Home({allPokemons}){

  let [pokemons, setPokemons] = useState(allPokemons)
  let [error, setError] = useState(false)
  
  
  const searchPokemon =()=>{
    let dataSearch = document.querySelector(".search-input").value
    let pokemonFilter = allPokemons.filter( pokemon =>{
      return  pokemon.name.indexOf(dataSearch) == 0 ;
    })
    if(pokemonFilter <= 0){
      setError(true)
      setPokemons([])
    }else{
      setError(false)
      setPokemons(pokemonFilter)
    }
  }
  
  
  return(
    <div>
      <Head>
        <title>Home -Nexts js- Pokemon</title>
      </Head>
      <Search searchPokemon={searchPokemon} />
      <div className="box">
        { pokemons.map((pokemon, i)=>
          <Pokemon 
            key={i} 
            name={pokemon.name}
            number={pokemon.id} 
            image={pokemon.imageUrl}
            id={pokemon.id}
          />
        )}
        { error ? <Error /> : ""}
        
      </div>
      
    </div>
  )
}