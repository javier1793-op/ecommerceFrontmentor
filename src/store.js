import { createStore } from 'redux';

const initialState = {
    data: {
      company: "",
      title: "",
      description:
        "",
      price: 0,
      discount: 0,
      count:0,
    }
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer);
  
  export default store;