export const getAllusersReducers = (state = {users: []}, action) => {
    switch (action.type) {
        case 'GET_ALL_USER_REQUEST':
            return ({
                loading: true
            })
        case 'GET_ALL_USER_SUCCESS':
            return ({
                loading: false,
                users: action.payload

            })
        case 'GET_ALL_USER_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default :
            return state
    }
}