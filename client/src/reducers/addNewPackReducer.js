export const AddNewPackReducer = (state = {}, action) => {


    switch (action.type) {
        case 'ADD_CHANNEL_REQUEST':
            console.log("raducer case 1")
            return {
                loading: true,
                ...state
            }
        case 'ADD_CHANNEL_SUCCESS':
            console.log("raducer case 2")
            return {

                success: true,
                channelBasic: action.payload
            }
        case 'GET_CHANNEL_FAILED':
            console.log("Something went wrong.....")
            return {

                error: action.payload,
                loading: false
            }
        default :
            return state;

    }
}