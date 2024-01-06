import CategoryModel from './category.model'

export const getCategories = async () => {
	const categories = CategoryModel.find({})
	return categories
}
