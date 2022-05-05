import React from "react";
import Product from "../components/Product";

function ProductFeed({ products }) {
  return (
    <div>
      <h1>Product here ... </h1>
      {products.map(({ id, title, price, description, catergory, image }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          catergory={catergory}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
