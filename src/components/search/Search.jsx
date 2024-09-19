import React, { useState } from "react";
import "./Search.scss";
import Search1 from "../../assets/svg/search.svg";
import products from "../../api/products";
import Products from "../products/Products";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  return (
    <div className="home-wrap container">
      <div className="home">
        <h1>Все кроссовки</h1>
        <div className="home-div">
          <img src={Search1} alt="" />
          <input
            type="text"
            placeholder="Поиск..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
      </div>
      <Products items={filteredProducts} />
    </div>
  );
}

export default Search;
