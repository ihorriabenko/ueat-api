import { Schema, model } from 'mongoose'
import { Restaurant } from './restaraunt.type'

const restaurantSchema = new Schema<Restaurant>({
	_id: { type: String, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	address: { type: String, required: true },
	category: { type: String, required: true },
	sort: { type: String, required: true, enum: ['Featured', 'Top sellers', 'Best rated'] },
	rating: { type: String, required: true },
	uri: { type: String, required: true },
	lat: { type: Number, required: true },
	lon: { type: Number, required: true },
	dishes: [
		{
			name: { type: String, required: true },
			description: { type: String, required: true },
			price: { type: Number, required: true },
			uri: { type: String, required: true },
		}
	]
})

const RestaurantModel = model<Restaurant>('Restaurant', restaurantSchema);

export default RestaurantModel
