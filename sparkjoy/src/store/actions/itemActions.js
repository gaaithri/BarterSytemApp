export const createItem =(item) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('items').add({
            ...item,
            donorFirstName: 'Paula',
            donorLastName: 'Rita',
            donorId:12345,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_ITEM',item });
        }).catch((err) =>{
            dispatch({type: 'CREATE_ITEM_ERROR',err});

        })
        
    }
};