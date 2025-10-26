import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const CartIcon = () => {
  const [{ basket }] = useStateValue(); // get basket from context

  return (
    <div className="relative">
      <Link
        to="/Checkout"
        className="text-black hover:text-red-600 relative"
      >
        <GiShoppingBag className="text-2xl" />
      </Link>

      {basket?.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {basket.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
