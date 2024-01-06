export type Restaurant = {
	_id: string;
	title: string;
	description: string;
	address: string;
	category: string;
	sort: string;
	rating: string;
	uri: string;
	lat: number;
	lon: number;
	dishes: Dishes[];
}

export type Dishes = {
	_id: string;
	name: string;
	description: string;
	price: number;
	uri: string;
}

export type Specific = {
	title?: string;
	category?: string;
}
