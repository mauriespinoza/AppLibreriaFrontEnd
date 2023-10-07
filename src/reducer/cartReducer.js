export const cartInitialState = JSON.parse(localStorage.getItem("cartItems")) || []

export const cartReducer = (state, action) => {

    const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_ITEMS_CART":{
      const { _id, valor, cantidad, count } = actionPayload;
      console.log("actionPayload: " + JSON.stringify(actionPayload))
      console.log("ADD_ITEMS_CART_idPayload: " + _id)
      console.log("ADD_ITEMS_CART.cantidad: " + cantidad)
      console.log("ADD_ITEMS_CART.count: " + count)
      const existItem = state.find((item) => item._id === _id);
      //const stockProduct = state.find((prod) => prod._id === _id);
      console.log("stockProduct: " + cantidad);
      console.log("existItem: " + existItem)
      if (existItem) {
        return state.map((item) => {
          if (item._id === _id) {
            return {
              ...item,
              cantidad: item.cantidad + 1,
              total: (item.cantidad + 1) * item.valor,
            };
          }
          return item;
        });
      } else {
        return [...state, { ...actionPayload, cantidad: count, total: valor }];
      }
    }
    case "ADD_QTY_CART":{
      const { _id, valor, cantidad, count, setCount } = actionPayload;
      console.log("actionPayload: " + JSON.stringify(actionPayload))
      console.log("ADD_QTY_CART: " + _id)
      console.log("ADD_QTY_CART.cantidad: " + cantidad)
      console.log("ADD_QTY_CART.count: " + count)
      const existItem = state.find((item) => item._id === _id);
      //const stockProduct = state.find((prod) => prod._id === _id);
      console.log("stockProduct: " + cantidad);
      console.log("existItem: " + existItem)
      if (existItem) {
        return state.map((item) => {
          if (item._id === _id) {
            return {
              ...item,
              cantidad: item.cantidad + count,
              total: (item.cantidad + count) * item.valor,
            };
          }
          setCount(1);
          return item;
        });
      } else {
        return [...state, { ...actionPayload, cantidad: count, total: valor }];
      }
    }
    // return {
    //     ...globalState,
    //     newProducts: action.payload
    // }
    case "REMOVE_ITEMS_CART":{
      const { _id, valor, cantidad } = actionPayload;
      console.log("_idPayload: " + _id)
      const existItem = state.find((item) => item._id === _id);
      //const stockProduct = state.find((prod) => prod._id === _id);
      console.log("stockProduct: " + cantidad);
      console.log("existItem: " + existItem)
      if (existItem) {
        if(existItem.cantidad === 1){
          return state.filter((item) => item._id !== _id);
        } else{
          return state.map((item) => {
            if (item._id === _id) {
              return {
                ...item,
                cantidad: item.cantidad - 1,
                total: (item.cantidad - 1) * item.valor,
              };
            }
            return item;
          });
        }
        
      } 
      return state;
    }
    default:
      return state;
  }
};
