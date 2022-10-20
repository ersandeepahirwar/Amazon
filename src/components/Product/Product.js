import Image from "next/image";

import Currency from "react-currency-formatter";

import { useState } from "react";

import { StarIcon } from "@heroicons/react/solid";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const [ratings] = useState(Math.ceil(rating.rate));
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative z-30 mx-auto flex w-[90vw] origin-bottom scale-100 transform flex-col justify-end space-y-2 bg-white p-5 transition-transform duration-300 hover:scale-95 sm:w-auto">
      <p className="absolute top-2 right-3 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="p-5 text-center">
        <Image
          src={image}
          alt="Product Image"
          width={150}
          height={150}
          objectFit="contain"
        />
      </div>
      <p className="text-center text-sm">{title}</p>
      <div className="flex justify-center">
        {Array(ratings)
          .fill()
          .map((_, index) => (
            <StarIcon key={index} className="h-4 text-yellow-500" />
          ))}
      </div>
      <p className="text-center text-xs line-clamp-2">{description}</p>
      <div className="text-center">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime === Boolean(hasPrime) && (
        <div className="flex items-center justify-center space-x-2">
          <img
            loading="lazy"
            src="https://i.ibb.co/MkhcHW6/Prime.png"
            alt="Prime Image"
            className="w-12"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="rounded-sm border border-yellow-300 bg-gradient-to-b from-yellow-200 to-yellow-400 p-1 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500 active:from-yellow-500">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
