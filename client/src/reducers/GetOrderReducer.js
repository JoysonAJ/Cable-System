export const getUserOrderReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case 'USER_ORDER_REQUEST':
            return ({
                loading: true
            })
        case 'USER_ORDER_SUCCESS':

            return ({
                loading: false,
                success: true,
                orders: action.payload
            })
        case 'USER_ORDER_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default :
            return state
    }
}


//all order display
export const getAllOrderReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case 'ALL_ORDER_REQUEST':
            return ({
                loading: true
            })
        case 'ALL_ORDER_SUCCESS':
            return ({
                loading: false,
                success: true,
                orders: action.payload
            })
        case 'ALL_ORDER_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default :
            return state
    }
}