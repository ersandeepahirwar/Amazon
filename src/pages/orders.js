import moment from "moment";

import { getSession, useSession } from "next-auth/react";

import database from "../../firebase";

import Header from "../components/Header/Header";
import Order from "../components/Order/Order";

const Orders = ({ orders }) => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />
      <main>
        <p>Your Orders</p>
        {session ? (
          <p>{orders.length} Orders</p>
        ) : (
          <p>Please sign in to see your orders</p>
        )}
        <div>
          {orders?.map(
            ({
              id,
              amount,
              amountShipping,
              amountDiscount,
              images,
              timestamp,
              products,
            }) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                amountDiscount={amountDiscount}
                images={images}
                timestamp={timestamp}
                products={products}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await database
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      amountDiscount: order.data().amount_discount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      products: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };
}
