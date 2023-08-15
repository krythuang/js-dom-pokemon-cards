let container = document.querySelector('.cards')

function main()
{
	for (let i = 0; i < data.length; i++)
	{
		let nameTemp = data[i].name
		let name = nameTemp.slice(0,1).toUpperCase() + nameTemp.slice(1)
		let hp = data[i].stats[0].base_stat
		let attack = data[i].stats[1].base_stat
		let defense = data[i].stats[2].base_stat
		let specialAttack = data[i].stats[3].base_stat
		let specialDefense = data[i].stats[4].base_stat
		let speed = data[i].stats[5].base_stat
		let image = data[i].sprites.other["official-artwork"].front_default

		let htmlPart =
		`<div class="card">
			<h2 class="card--title">${name}</h2>
				<img width="256" class="card--img" src="${image}"/>
				</br>
			<div class="card--text">
				<div>HP: ${hp}</div>
				</br>
				<div>ATTACK: ${attack}</div>
				</br>
				<div>DEFENSE: ${defense}</div>
				</br>
				<div>SPECIAL-ATTACK: ${specialAttack}</div>
				</br>
				<div>SPECIAL-DEFENSE: ${specialDefense}</div>
				</br>
				<div>SPEED: ${speed}</div>
				</br>
			</div>
		</div>`
		container.innerHTML += htmlPart
	}
}

main()
