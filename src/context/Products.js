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

			setFeatured(featured);
			setProducts(products);
			setLoading(false);
		});
		return () => {};
	}, []);

	React.useLayoutEffect(() => {}, [ filters, products ]);

	return (
		<ProductContext.Provider value={{ loading, products, featured, updateFilters, filters }}>
			{children}
		</ProductContext.Provider>
	);
}
