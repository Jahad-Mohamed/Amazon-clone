import React from "react";
import Product from "../components/Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, catergory, image }) => (
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

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, catergory, image }) => (
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

      {products
        .slice(4, products.length)
        .map(({ id, title, price, description, catergory, image }) => (
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
