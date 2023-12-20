const initState = {};

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

    default:
      return state;
  }
};

export default rootReducer;