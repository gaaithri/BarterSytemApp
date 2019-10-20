export const createProduct =(product) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product,
            reqFirstName: 'Paula',
            reqLastName: 'Rita',
            reqId:12345,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PRODUCT',product });
        }).catch((err) =>{
            dispatch({type: 'CREATE_ITEM_ERROR',err});

        })
        
    }
};