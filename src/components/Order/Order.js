import moment from "moment";

import Currency from "react-currency-formatter";

const Order = ({
  id,
  amount,
  amountShipping,
  amountDiscount,
  images,
  timestamp,
  products,
}) => {
  return (
    <div>
      <div>
        <div>
          <p>ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("DD MM YYYY")}</p>
        </div>
        <div>
          <p>TOTAL</p>
          <p>
            <Currency quantity={amount} currency="GBP" />
            <span>&nbsp;-&nbsp;Next-Day Delivery&nbsp;</span>
            <Currency quantity={amountShipping} currency="GBP" />
          </p>
        </div>
        <div>
          <p>{products.length} products</p>
          <p>ORDER # {id}</p>
        </div>
      </div>
      <div>
        <div>
          {images.map((image) => (
            <img src={image} alt="Product Thumbnail" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
