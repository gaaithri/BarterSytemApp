const initState = {
    products: [
      
    ]
  }
  
  const productReducer = (state = initState, action) => {
   switch(action.type){
     case 'CREATE_PRODUCT':
       console.log('createdproduct',action.product);
       return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error',action.err);
        return state;
      default:
          return state;
  
  
   }
  
   
  };
  
  export default productReducer;