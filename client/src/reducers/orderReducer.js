export const rechargeOrderReducer =(state={},action)=>{
    switch (action.type){
        case 'RECHARGE_ORDER_REQUEST':
            return({
                loading:true
            })
        case 'RECHARGE_ORDER_SUCCESS':
            return ({
                loading: false,
                success:true
            })
        case 'RECHARGE_ORDER_FAILED':
            return ({
                loading: false,
                error:action.payload
            })
        default :
            return state
    }
}

