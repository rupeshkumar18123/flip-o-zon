import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useSelector } from "react-redux"; // Import Redux state
import "./Head.css";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); // Calculate total items

  return (
    <div className="relative">
      <AiOutlineShoppingCart size={30} className="text-white cursor-pointer" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
