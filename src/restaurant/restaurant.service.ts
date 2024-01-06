import RestaurantModel from './restaurant.model'
import {Restaurant, Specific} from "./restaraunt.type";

export const getSortedRestaurants = async () => {
	const restaurants: Restaurant[] = await RestaurantModel.find({})
	const sortedRestaurants = [
		{sortTitle: 'Featured', sortDescription: 'Paid placements for our partners', data: [] as Restaurant[]},
		{sortTitle: 'Top sellers', sortDescription: 'The most ordered restaurants', data: [] as Restaurant[]},
		{sortTitle: 'Best rated', sortDescription: 'The most rated restaurants', data: [] as Restaurant[]},
	]

	for (let i = 0; i < restaurants.length; i++) {
		const restaurant = restaurants[i]

		switch (restaurant.sort) {
			case 'Featured':
				sortedRestaurants[0].data.push(restaurant)
				break
			case 'Top sellers':
				sortedRestaurants[1].data.push(restaurant)
				break
			case 'Best rated':
				sortedRestaurants[2].data.push(restaurant)
				break
		}
	}

	return sortedRestaurants
}

export const getSearchedRestaurants = async (specific: Specific) => {
	let restaurants

	if (specific.title) {
		const restaurantTitle = specific.title

		const safeTitle = restaurantTitle.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
		const regex = new RegExp(safeTitle, 'i')
		restaurants = await RestaurantModel.find({title: regex})
	} else if (specific.category) {
		let restaurantCategory = specific.category

		if (restaurantCategory === 'Pizza') {
			restaurantCategory = 'Italian'
		} else if (restaurantCategory === 'Sushi') {
			restaurantCategory = 'Asian'
		}

		restaurants = await RestaurantModel.find({category: restaurantCategory})
	}

	return restaurants
}
