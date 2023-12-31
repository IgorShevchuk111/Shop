import React from "react";
import "./Basket.css";
import { useSelector } from "react-redux";
import ShoppingItemsSummary from "./shopping-summary/ShoppingItemsSummary";
import BasketItems from "./basketItems/BasketItems";
import Logo from "../Logo/Logo";

function Basket() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const selectedBasketItems = useSelector((state) => state.selectedBasketItems);
  return (
    <>
      <div className={`basket-logo ${isDarkMode ? "dark" : ""}`}>
        <Logo />
      </div>
      {selectedBasketItems.length > 0 ? (
        <div className="basket-container">
          <BasketItems />
          <ShoppingItemsSummary />
        </div>
      ) : (
        <div className="min-height-100vh">
          <h5 className="text-center margin-top-20">
            There's nothing in your Basket
          </h5>
        </div>
      )}
    </>
  );
}

export default Basket;
