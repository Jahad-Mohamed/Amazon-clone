import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import CheckoutProducts from "../components/CheckoutProducts";

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Header />

      <main className=" lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div>
          <Image
            className="flex-grow m-5 shadow-sm"
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white shadow-sm">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty."
                : "Your Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProducts
                key={i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                catergory={item.catergory}
                image={item.image}
                hasPrime={item.image}
              />
            ))}
          </div>
        </div>

        {/* right */}
      </main>
    </div>
  );
}

export default Checkout;
