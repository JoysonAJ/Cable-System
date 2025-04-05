// import {cartReducer} from "../reducers/cartReducer";

export const addToCart = (channel, planTime, planType) => (dispatch, getState) => {

    let cartItem = {
        name: channel.name,
        _id: channel._id,
        image: channel.image,
        planTime: planTime,
        planType: planType,
        price: channel.price,
        total_amt: channel.price[0][planType] * planTime
    }
    //
    if (cartItem.planTime > 12) {
        alert("Recharge plan upto 12 Months or 1 Year........")
    } else {
        if (cartItem.planTime < 1) {
            dispatch({
                type: 'DELETE_FROM_CART',
                payload: channel
            })
        } else {
            dispatch({
                type: 'ADD_TO_CART',
                payload: cartItem
            })
        }

    }

    const cartItems = getState().CartReducer.cartItem
    localStorage.setItem('cartItem', JSON.stringify(cartItems))
}

export const deleteFromCart = (channel) => (dispatch, getState) => {
    dispatch({
        type: 'DELETE_FROM_CART',
        payload: channel
    })
    const cartItems = getState().CartReducer.cartItem
    localStorage.setItem('cartItem', JSON.stringify(cartItems))
}
