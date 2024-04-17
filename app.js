const axios = require('axios');

async function getPokemonData(id) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = response.data;

        console.log(`id: ${pokemon.id}`);
        console.log(`nombre: ${pokemon.name}`);
        console.log(`tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`);
        console.log(`altura: ${pokemon.height}`);
        console.log(`peso: ${pokemon.weight}`);

    } catch (error) {
        console.log("Error al obtener los datos del pokemon, ingresa un id valido.");
    }
}

getPokemonData(56);