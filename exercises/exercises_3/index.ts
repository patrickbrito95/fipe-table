import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})

async function getRicAndMortyCharacters() {
  const charactersToSearch = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"];
  let charactersData = [];

  for (let i = 0; i < charactersToSearch.length; i++) {
    const charData = await api.get('character', {params: { name: charactersToSearch[i]}})
    .then(response => {
      return response.data.results[0];
    })
    .catch(err => console.error(err));

    let charObject = {
      nome: charData.name,
      genero: charData.gender == "Male" ? "Homem" : "Mulher",
      avatar: charData.image,
      especie: charData.species == "Human" ? "Humano" : "",
    }
    charactersData.push(charObject);
  }
  return charactersData;
}

module.exports = getRicAndMortyCharacters;