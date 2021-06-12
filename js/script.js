let params = new URLSearchParams(location.search);
let foodItem = params.get("name");
let infoContainer = document.getElementById(`info-container`);
let rest;
	
function calculateNutrients(){	
	fetch(`https://calorieninjas.p.rapidapi.com/v1/nutrition?query=${foodItem}`, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "098605edd0mshbc92827b73a027ap180926jsn14f96c802181",
				"x-rapidapi-host": "calorieninjas.p.rapidapi.com"
			}
		})
	.then((response) => response.json())
	.then((response) => {
		if(response.items.length > 0)
		{
		({...rest} = response.items[0]);
		infoContainer.innerHTML = `
		<table class="nutrient-table">
			<thead>
				<tr>
					<th>
						Nutrient
					</th>
					<th>
						Value
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						Name
					</td>
					<td>
						${rest.name.charAt(0).toUpperCase()+rest.name.slice(1)}
					</td>
				</tr>
				<tr>
					<td>
						Calories
					</td>
					<td>
						${rest.calories}
					</td>
				</tr>
				<tr>
					<td>
						Carbohydrates(grams)
					</td>
					<td>
						${rest.carbohydrates_total_g}
					</td>
				</tr>
				<tr>
					<td>
						Cholestrol(milligrams)
					</td>
					<td>
						${rest.cholesterol_mg}
					</td>
				</tr>
				<tr>
					<td>
						Saturated Fat(grams)
					</td>
					<td>
						${rest.fat_saturated_g}
					</td>
				</tr>
				<tr>
					<td>
						Total Fat(grams)
					</td>
					<td>
						${rest.fat_total_g}
					</td>
				</tr>
				<tr>
					<td>
						Fiber(grams)
					</td>
					<td>
						${rest.fiber_g}
					</td>
				</tr>
				<tr>
					<td>
						Protein(grams)
					</td>
					<td>
						${rest.protein_g}
					</td>
				</tr>
				<tr>
					<td>
						Serving Size(grams)
					</td>
					<td>
						${rest.serving_size_g}
					</td>
				</tr>
				<tr>
					<td>
						Sodium(milligrams)
					</td>
					<td>
						${rest.sodium_mg}
					</td>
				</tr>
				<tr>
					<td>
						Sugar(grams)
					</td>
					<td>
						${rest.sugar_g}
					</td>
				</tr>
			</tbody>
		</table>`
	}
	else{
		infoContainer.innerHTML = `No data available for ${foodItem}`
	}
	})
	.catch(err => {
		console.error(err);
	});
	}

calculateNutrients();
