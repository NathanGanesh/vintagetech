// helper functions
export function featuredProducts(data) {
	return data.filter((item) => {
		return item.featured === true;
	});
}

export function flattenProducts(data) {
	return data.map((item) => {
		// cloudinary
		let image = (item.image && item.image.url) || null;
		// console.log(image);
		// console.log(item);
		// local setup no deployment
		// let image = `${url}${item.image.url}`;
		return { ...item, image };
	});
}
export function paginate(products) {
	const itemsPerPage = 4;
	const numberOfPages = Math.ceil(products.length / itemsPerPage);
	// const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
	//   return products.splice(0, itemsPerPage);
	// });
	const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
		const start = index * itemsPerPage;
		return products.slice(start, start + itemsPerPage);
	});
	return newProducts;
}
