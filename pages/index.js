import Head from "next/head";
import Pokemon from "../components/Pokemon";
import {useState} from "react";
import Search from "../components/Search";
import getAllPokemons from "../utils/getAllPokemons";

export function getStaticProps(context){
  return getAllPokemons()
}


export default function Home({allPokemons}){
  
  let [pokemons, setPokemons] = useState(allPokemons)

  return(
    <div>
      <Head>
        <title>Home -Nexts js- Pokemon</title>
      </Head>
      <Search />
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
      </div>
      
    </div>
  )
}