const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon'
const elePokemonsList = document.querySelector('#pokemons')
const pokemonDetails = []
getPokemons(pokemonApiUrl)

async function getPokemons(url) {
	const response = await fetch(url)
	const data = await response.json()
	console.log(data)
	const pokemons = data.results
	console.log(pokemons)

	// richiedere i dettagli dei singoli pokemon aggingendoli all'array dei pokemonDetails
	for (let i = 0; i < pokemons.length; i++) {
		const pokemon = pokemons[i]
		const response = await fetch(pokemon.url)
		const pokemonData = await response.json()
		pokemonDetails.push(pokemonData)
	}
	console.log(pokemonDetails)

	// stampo i pokemons con i dettagli
	let htmlListContent = ''
	pokemonDetails.forEach((pokemon) => {
		htmlListContent += `<div class="col-4">
					<div class="card">
						<img src="${pokemon.sprites.front_default}" class="card-img-top" alt="${pokemon.name}" />
						<div class="card-body">
							<h5 class="card-title">${pokemon.name}</h5>
							<button href="#" class="btn btn-primary">View</button>
						</div>
					</div>
				</div>`
	})

	elePokemonsList.innerHTML = htmlListContent
}
