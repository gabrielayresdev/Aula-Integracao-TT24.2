import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export default api;

export const getAllPokemons = async (limit: number) => {
  try {
    const data = await api.get(`pokemon?limit=${limit}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemon = async (id: number) => {
  try {
    const data = await api.get(`pokemon/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
