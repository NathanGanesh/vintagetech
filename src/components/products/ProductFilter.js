import React, { useContext } from 'react';
import { ProductContext } from '../../context/Products';

export default function ProductFilter() {
	const { filters: { search, category, shipping, price }, updateFilters, sorted } = useContext(ProductContext);

	return (
		<section>
			<form className="filter-section">
				<div className="filter-wrapper">
					<div className="inputWrapper">
						<label htmlFor="search">Search Term</label>
						<input name="search" onChange={updateFilters} value={search} />
					</div>
					<div className="inputWrapper">
						<label htmlFor="category">Category</label>
						<select onChange={updateFilters} value={category} name="category">
							<option value="all">all</option>
							<option value="phone">phone</option>
							<option value="computer">computer</option>
							<option value="radio">radio</option>
						</select>
					</div>
					<div>
						<input type="checkbox" name="shipping" checked={shipping} onChange={updateFilters} />
						<label htmlFor="shipping">Free Shipping</label>
					</div>
				</div>
				<div className="price-group">
					<p>price</p>

					<label>
						<input
							type="radio"
							name="price"
							id="all"
							value="all"
							onChange={updateFilters}
							checked={price === 'all'}
						/>
						all
					</label>
					<label>
						<input type="radio" name="price" value="0" checked={price === 0} onChange={updateFilters} />
						$0 - $300
					</label>
					<label>
						<input type="radio" name="price" value="300" onChange={updateFilters} checked={price === 300} />
						$300 - $650
					</label>
					<label>
						<input type="radio" name="price" value="650" onChange={updateFilters} checked={price === 650} />
						Over $650
					</label>
				</div>
			</form>
		</section>
	);
}
