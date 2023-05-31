export const initialState={
  cart:[],
  orders:[],
};

// action
// {
//   type:'ADD _PRODUCT_TO_CART',
//   payload:{}
// }
export const reducer=(state=initialState,action)=>{
  switch(action.type){
    case "ADD_TO_CART":{
      const {cart}=state;
      const updatedCart=[...cart,action.payload];
      //some action on state
      return{ //returning the updated state;
          ...state,
          cart:updatedCart,
      }
    }

    case "REMOVE_FROM_CART":{
      const productIdToBeRemove=action.payload.pid;
      const {cart}=state;

      const filteredCart=cart.filter(item => (item.id!==productIdToBeRemove))
      return{
        ...state,
        cart:filteredCart,
      }
    }

    case  "PLACE_ORDER":{
      const {cart,orders}=state;
      const ordersPlaced = {};
      cart.forEach((item)=>{
        ordersPlaced[item.id]=item;
      })
      const updatedOrders=[...orders,ordersPlaced];
      return {
        ...state,
        orders:updatedOrders,
        cart:[],
      }
      
    }
    default:return state;
  }
}