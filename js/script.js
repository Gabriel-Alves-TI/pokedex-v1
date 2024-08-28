// Função para listar os Pokemons

async function fetchPokemonList() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1200');
    const data = await response.json();
    return data.results;
}

// Função para retornar detalhes dos Pokemons

async function fetchPokemonDetails(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Função para criar card de Pokemon

async function displayPokemon(){
    const pokemonContainer = document.getElementById('grid-container');
    const pokemonList = await fetchPokemonList();

    for (const pokemon of pokemonList){
        const details = await fetchPokemonDetails(pokemon.url);
        const types = details.types.map(typeInfo => typeInfo.type.name).join(', ');
        
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'grid-item';
        
        switch(types.split(', ')[0]){
            case 'normal':
                pokemonCard.style.backgroundColor = "#afaf9e"
                break;
            case 'water':
                pokemonCard.style.backgroundColor = "#6390F0";
                break;
            case 'fire':
                pokemonCard.style.backgroundColor = "#EE8130";
                break;
            case 'electric':
                pokemonCard.style.backgroundColor = "#F7D02C";
                break;
            case 'grass':
                pokemonCard.style.backgroundColor = "#7AC74C";
                break;
            case 'ice':
                pokemonCard.style.backgroundColor = "#96D9D6";
                break;
            case 'fighting':
                pokemonCard.style.backgroundColor = "#C22E28";
                break;
            case 'poison':
                pokemonCard.style.backgroundColor = "#A33EA1";
                break;
            case 'ground':
                pokemonCard.style.backgroundColor = "#967f44";
                break;
            case 'flying':
                pokemonCard.style.backgroundColor = "#A98FF3";
                break;
            case 'psychic':
                pokemonCard.style.backgroundColor = "#F95587";
                break;
            case 'bug':
                pokemonCard.style.backgroundColor = "#A6B91A";
                break;
            case 'rock':
                pokemonCard.style.backgroundColor = "#B6A136";
                break;
            case 'ghost':
                pokemonCard.style.backgroundColor = "#735797";
                break;
            case 'dragon':
                pokemonCard.style.backgroundColor = "#6F35FC";
                break;
            case 'dark':
                pokemonCard.style.backgroundColor = "#252525b2";
                break;
            case 'steel':
                pokemonCard.style.backgroundColor = "#B7B7CE";
                break;
            case 'fairy':
                pokemonCard.style.backgroundColor = "#D685AD";
                break;
            default:
                pokemonCard.style.backgroundColor = "rgb(238, 177, 9)";
                break;
        }
        const images = details.sprites.front_default;

        
        pokemonCard.innerHTML = `
            <h2> ${details.name}</h2>
            <img src="${images}" alt="${details.name}">
            <p> # ${details.id}</p>
            <p> Tipo: ${types}</p>
            `;
        pokemonContainer.appendChild(pokemonCard);
    }
}

displayPokemon();



