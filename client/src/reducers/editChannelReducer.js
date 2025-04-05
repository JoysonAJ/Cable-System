export const editChannelByIdReducer = (state = {}, action) => {


    switch (action.type) {
        case 'GET_CHANNEL_BY_ID_REQUEST':
            console.log("raducer case 1")
            return {
                loading: true,
                ...state
            }
        case 'GET_CHANNEL_BY_ID_SUCCESS':
            console.log("raducer case 2")
            return {
                channel: action.payload,
                loading: false
            }
        case 'GET_CHANNEL_BY_ID_FAILED':
            console.log("Something went wrong.....")
            return {

                loading: false,
                error: action.payload
            }
        default :
            return state;

    }
}

export const UpdateChannelReducer = (state = {}, action) => {


    switch (action.type) {
        case 'UPDATE_CHANNEL_REQUEST':
            console.log("raducer case 1")
            return {
                updateLoading: true,
                ...state
            }
        case 'UPDATE_CHANNEL_SUCCESS':
            console.log("raducer case 2")
            return {
                updateSuccess:true,
                updateLoading: false
            }
        case 'UPDATE_CHANNEL_FAILED':
            console.log("Something went wrong.....")
            return {

                updateLoading: false,
                    updateError: action.payload
            }
        default :
            return state;

    }
}