import React from "react";
import { Container } from "./App";
import { PokemonCard } from "./components/PokemonCard";
import api, { getAllPokemons, getPokemon } from "./services/api";
import axios from "axios";

type Pokemon = {
  order: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
};

function App() {
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png
  const [data, setData] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const requestData = async () => {
      /*  // Fetch 20 Pokémon URLs
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const json = await response.json();

      // Fetch data for each Pokémon
      const promises = json.results.map(async (item: { url: string }) => {
        const response = await fetch(item.url);
        return response.json(); // Resolve the promise to get the Pokémon data
      });

      // Resolve all promises to get the Pokémon data
      const pokemons = await Promise.all(promises);
      setData(pokemons); */

      const json = (await getAllPokemons(20))?.data.results;
      const promises = json.map((item: { name: string }) => {
        return api.get(`pokemon/${item.name}`);
      });
      const data = await axios.all(promises);
      const filtered: Pokemon[] = data.map((item) => item.data);
      setData(filtered);
      console.log(data);
    };

    requestData();
  }, []);

  console.log(data[0]);

  if (data.length === 0) return null;
  return (
    <Container>
      {data.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.order}
            name={pokemon.name}
            imgUrl={pokemon.sprites.other["official-artwork"].front_default}
            number={pokemon.order}
          />
        );
      })}
    </Container>
  );
}

export default App;
