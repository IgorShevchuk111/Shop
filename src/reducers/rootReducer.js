const initState = {
  selectedBasketItems: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_STATE_MENU_VISIBLE":
      return {
        ...state,
        menuVisible: action.value,
      };
    case "ADD_STATE_SELECTED_MENU":
      return {
        ...state,
        selectedMenuItem: action.value,
      };
    case "ADD_STATE_BASKET_ITEMS":
      return {
        ...state,
        selectedBasketItems: [...state.selectedBasketItems, action.value],
      };
    case "UPDATE_STATE_BASKET_ITEM":
      const updatedItemId = action.item.id;
      const updatedQuantity = action.item.quantity;

      const updatedBasket = state.selectedBasketItems.map((item) =>
        item.id === updatedItemId
          ? { ...item, quantity: updatedQuantity }
          : item
      );
      return {
        ...state,
        selectedBasketItems: updatedBasket,
      };

    case "ADD_STATE_DARK_MODE":
      return {
        ...state,
        isDarkMode: action.value,
      };
    case "DELETE_STATE_BASKET_ITEM":
      const updatedBasketItems = state.selectedBasketItems.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        selectedBasketItems: updatedBasketItems,
      };

    default:
      return state;
  }
};

export default rootReducer;
