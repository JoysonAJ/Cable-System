export const getAllChannelReducers = (state = {channelBasic: []}, action) => {
 // const getAllChannelReducers = (state = {channelBasic: []}, action) => {

    switch (action.type) {
        case 'GET_CHANNEL_REQUEST':

            return {

                loading: true,
                ...state
            }
        case 'GET_PIZZAS_SUCCESS':

            return {

                loading: false,
                channelBasic: action.payload
            }
        case 'GET_PIZZAS_FAILED':
            console.log("Something went wrong.....")
            return {

                error: action.payload,
                loading: false
            }
        default :
            return state;

    }
}
// module.exports = {getAllChannelReducers}

// module.exports = getAllChannelReducers
{/*
    empty array is requires for data filled came from mongoDB
    loading: true is request sent
    loading:false request is false

*/
}
