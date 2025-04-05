import axios from "axios";

export const AddNewChannels = (newChannel) => async (dispatch) => {
    dispatch({type: 'ADD_CHANNEL_REQUEST'});
    try {
        console.log(newChannel)
        const response = await axios.post("/api/admin/addchannel",{newChannel})
        dispatch({type: 'ADD_CHANNEL_SUCCESS', payload: response.data})

    } catch (e) {
        console.log(e);
        dispatch({type: 'GET_CHANNEL_FAILED', payload: e});
    }
}