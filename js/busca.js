// Busca de Pokemon

async function fetchPokemonDetailsByName(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    if(response.ok){
        const data = await response.json();
        return data;
    } else {
        throw new Error('Pokemon não capturado! Busque novamente')
    }
}

async function displayPokemon(name){
    const pokemonContainer = document.getElementById('search-pokemon');
    pokemonContainer.innerHTML = ''; // limpa o container antes de exibir um novo card

    try{
        const details = await fetchPokemonDetailsByName(name);
        const types = details.types.map(typeInfo => typeInfo.type.name).join(', ');
        const abilities = details.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');
        const image = details.sprites.front_default;

        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'card-item';

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
            case 'stell':
                pokemonCard.style.backgroundColor = "#B7B7CE";
                break;
            case 'fairy':
                pokemonCard.style.backgroundColor = "#D685AD";
                break;
            default:
                pokemonCard.style.backgroundColor = "rgb(238, 177, 9)";
                break;
        }

        pokemonCard.innerHTML = `
            <h2>${details.name}</h2>
            <img src="${image}" alt="${details.name}">
            <p>#${details.id}</p>
            <p>Tipo: ${types}</p>
            <p>Peso: ${details.weight / 10} kg</p>
            <p>Altura: ${details.height / 10} m</p>
            <p>Habilidades: ${abilities}</p>
        `;
        pokemonContainer.appendChild(pokemonCard);
    } catch (error) {
        pokemonContainer.innerHTML = `<p>Pokemon não encontrado</p>`;
    }
}

document.getElementById('search-button').addEventListener("click", () => {
    const searchInputElement = document.getElementById('search-input');
    const searchInputValue = searchInputElement.value;
    
    if (searchInputValue) {
        displayPokemon(searchInputValue);
    }

    searchInputElement.value = ""; 
});

