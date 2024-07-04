const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

      case "SET_API_DATA":
      // const featureData = action.payload.filter((curElem) => {
      //   return curElem.featured === true;
      // });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        // featureProducts: featureData,
      };
    case 'ADDTOCART':
      console.log('add to cart ',action.payload);
      
      return {...state,cartData:[...state.cartData,action.payload]}
      break;
    case 'REMOVEFROMCART':
      const newCartData = state.cartData.filter((ele)=>ele.id != action.payload)
      return {...state,cartData:newCartData}

    case "API_ERROR":
      return { ...state, isError: action.payload, loading: false };
    default:
      return state;
  }
};

export default ProductReducer;
