import React, { useState } from "react";
import Heading from "../../common/Heading";
import ProductItem from "../product/ProductItem";
import { topProducts } from "../../assets/data/data";

const TopProduct = () => {
  const [data, setData] = useState(topProducts);
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);

  const handleFilter = (category) => {
    const newItems = topProducts.filter((item) => item.category === category);
    setData(newItems);

    if (category === "all") {
      setData(topProducts);
      return;
    }
  };

  return (
    <>
      <section className="topproduct">
        <div className="container">
          <div className="head">
            <Heading
              title="Top Selling Products"
              desc="Meet our newbies! The lastest templates uploaded to the marketplace"
            />
            <div className="category">
              {categories.map((category) => (
                <button
                  className="button"
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default TopProduct;
