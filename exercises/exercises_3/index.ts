export const { default: axios } = require("axios");

async function getRickAndMortyCharacters() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json();
    const result = data.result;
    let char = [];
    for (let i = 0; i < 4; i++) {
      const { nameChar: nome, genderChar: genero, imageChar: avatar, speciesChar: especie } = result[i];
      char = [...char, {nome, genero, avatar, especie}]
    }
    return char;
  }
  
  module.exports = getRickAndMortyCharacters;