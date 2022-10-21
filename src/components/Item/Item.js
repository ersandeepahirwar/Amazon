import Image from "next/image";

import { useDispatch } from "react-redux";

import Currency from "react-currency-formatter";

import { StarIcon } from "@heroicons/react/solid";

import { addToCart, removeFromCart } from "../../slices/cartSlice";

const Item = ({
  id,
  title,
  price,
  description,
  category,
  image,
  ratings,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      ratings,
      hasPrime,
    };

    dispatch(addToCart(product));
  };

  const removeProductFromCart = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex flex-col space-y-3 bg-white p-5 shadow-md lg:flex-row lg:items-center lg:justify-evenly lg:space-x-5 lg:space-y-0">
      <div className="p-5 text-center lg:p-0">
        <Image
          src={image}
          alt="Item Thumbnail"
          width={150}
          height={150}
          objectFit="contain"
        />
      </div>
      <div className="space-y-2 lg:max-w-[350px]">
        <p className="text-center text-sm">{title}</p>
        <div className="flex justify-center">
          {Array(ratings)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className="h-4 text-yellow-500" />
            ))}
        </div>
        <p className="text-center text-xs line-clamp-3">{description}</p>
        <div className="text-center">
          <Currency quantity={price} currency="GBP" />
        </div>
        {hasPrime && (
          <div className="flex items-center justify-center space-x-2">
            <img
              loading="lazy"
              src="https://i.ibb.co/dWmVqy3/Prime.png"
              alt="Prime Image"
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 lg:min-w-[150px]">
        <button
          className="rounded-sm border border-yellow-300 bg-gradient-to-b from-yellow-200 to-yellow-400 p-1 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
          onClick={addProductToCart}
        >
          Add To Cart
        </button>
        <button
          className="rounded-sm border border-yellow-300 bg-gradient-to-b from-yellow-200 to-yellow-400 p-1 text-xs focus:outline-none focus:ring-1 focus:ring-yellow-500"
          onClick={removeProductFromCart}
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default Item;
