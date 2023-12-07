const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon'
const elePokemonsList = document.querySelector('#pokemons')
getPokemons(pokemonApiUrl)

function getPokemons(url) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			// cosa vogliamo fare con i dati
			console.log(data)

			// recuperare la lista dei pokemon dall'oggetto data
			const pokemons = data.results
			console.log(pokemons)

			// ciclare sull'array dei pokemon e per ciascuno creare
			// un li contenente il nome e aggiungerlo in pagina
			let htmlListContent = ''
			pokemons.forEach((pokemon) => {
				// const liPokemon = document.createElement('li')
				// liPokemon.innerHTML = pokemon.name
				// elePokemonsList.appendChild(liPokemon)

				htmlListContent += `<div class="col-4">
					<div class="card">
						<div class="card-body">
							<h5 class="card-title">${pokemon.name}</h5>
							<a href="#" class="btn btn-primary">View</a>
						</div>
					</div>
				</div>`
			})

			elePokemonsList.innerHTML = htmlListContent
		})
}
