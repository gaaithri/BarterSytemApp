const initState = {
    products: [
      {id:'1',name:"Gown for girls aged 10",type:"Dress",image:"images/dress.jpeg"},
      {id:'2',name:"shirt for boys aged 5",type:"Dress",image:"images/giftee2.jpg"},
      {id:'3',name:"Mug White",type:"Houseitems",image:"images/giftee.jpeg"}
      
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