import {Schema, model} from 'mongoose'
import {Category} from './category.type'

const categorySchema = new Schema<Category>({
	_id: {type: String, required: true},
	title: {type: String, required: true},
	uri: {type: String, required: true},
})

const CategoryModel = model<Category>('Category', categorySchema)

export default CategoryModel
