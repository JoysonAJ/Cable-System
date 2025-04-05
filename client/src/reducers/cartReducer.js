export const CartReducer = (state = {cartItem : [] }, action) => {
// const CartReducer = (state = {cartItem : [] }, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            //checking the item present in cart already or not
            const alreadyExist = state.cartItem.find(item =>  item._id === action.payload._id )

            if(alreadyExist){
                return({
                    ...state,
                    cartItem: state.cartItem.map(item=> item._id === action.payload._id ? action.payload:item)
                })

            }
            else {
                return ({
                    ...state,
                    cartItem: [
                        ...state.cartItem,
                        action.payload
                    ]
                })
            }

        case 'DELETE_FROM_CART':
            return ({
                    ...state,
                    cartItem: state.cartItem.filter(item => item._id !== action.payload._id)
                })
        default:
            return (
                state
            )

    }
}

// module.exports = CartReducer