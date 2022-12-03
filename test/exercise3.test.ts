export const getRicAndMortyCharacters = require("../exercises/exercises_3/index");

test("exercise 3", () => {
  return getRicAndMortyCharacters().then((data) => {
    expect(data).toEqual([
      {
        nome: "Rick Sanchez",
        genero: "Homem",
        avatar: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        especie: "Humano",
      },
      {
        nome: "Morty Smith",
        genero: "Homem",
        avatar: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        especie: "Humano",
      },
      {
        nome: "Summer Smith",
        genero: "Mulher",
        avatar: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
        especie: "Humano",
      },
      {
        nome: "Beth Smith",
        genero: "Mulher",
        avatar: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
        especie: "Humano",
      },
      {
        nome: "Jerry Smith",
        genero: "Homem",
        avatar: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
        especie: "Humano",
      },
    ]);
  });
});