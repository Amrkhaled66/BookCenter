import cartImg from "src/assets/cart.svg";
import { Link } from "react-router-dom";

import useCart from "src/hooks/useCart";

const CartIcon = ({ className=" " }) => {
  const { cartLength } = useCart();

  return (
    <Link
      to={"cart"}
      className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:drop-shadow-xl ${className}`}
    >
      <div
        className={`absolute -top-1 font-cairo text-lg ${
          cartLength > 9 ? "left-[13px]" : "left-1/2"
        } font-bold`}
      >
        {cartLength}
      </div>
      <img className="h-full w-full" src={cartImg} alt="cart" />
    </Link>
  );
};

export default CartIcon;
