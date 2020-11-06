import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts, flattenProducts, paginate } from '../utils/helpers';

export const ProductContext = React.createContext();

export default function ProductsProvider({ children }) {
	const [ loading, setLoading ] = React.useState(false);
	const [ products, setProducts ] = React.useState([]);
	const [ featured, setFeatured ] = React.useState([]);
	const [ filters, setFilters ] = React.useState({
		search: '',
		category: 'all',
		shipping: false,
		price: 'all'
	});
	const [ sorted, setSorted ] = React.useState([]);
	const [ page, setPage ] = React.useState(0);

	const changePage = (index) => {
		setPage(index);
	};

	const updateFilters = (e) => {
		const type = e.target.type;
		const filter = e.target.name;
		const value = e.target.value;
		let filterValue;

		if (type === 'checkbox') {
			filterValue = e.target.checked;
		} else if (type === 'radio') {
			value === 'all' ? (filterValue = value) : (filterValue = parseInt(value));
		} else {
			filterValue = value;
		}
		setFilters({ ...filters, [filter]: filterValue });
	};

	React.useEffect(() => {
		setLoading(true);
		axios.get(`${url}/products`).then((resp) => {
			const featured = featuredProducts(flattenProducts(resp.data));
			const products = flattenProducts(resp.data);
			setSorted(paginate(products));
			setFeatured(featured);
			setProducts(products);
			setLoading(false);
		});
		return () => {};
	}, []);

	React.useLayoutEffect(
		() => {
			let newProducts = [ ...products ].sort((a, b) => a.price - b.price);
			const { search, category, shipping, price } = filters;
			// console.log(filters);

			//
			if (category !== 'all') {
				newProducts = newProducts.filter((item) => item.category === category);
			}
			if (shipping !== false) {
				newProducts = newProducts.filter((item) => item.free_shipping === shipping);
			}
			if (price !== 'all') {
				newProducts = newProducts.filter((item) => {
					if (price === 0) {
						return item.price < 300;
					} else if (price === 300) {
						return item.price > 300 && item.price < 650;
					} else {
						return item.price > 650;
					}
				});
			}
			if (search !== '') {
				newProducts = newProducts.filter((item) => {
					let title = item.title.toLowerCase().trim();
					return title.startsWith(search) ? item : null;
				});
			}

			setPage(0);

			setSorted(paginate(newProducts));
		},
		[ filters, products ]
	);

	return (
		<ProductContext.Provider
			value={{ loading, products, featured, updateFilters, filters, page, sorted, changePage }}
		>
			{children}
		</ProductContext.Provider>
	);
}
