import axios from "axios";

export const getAllChannel = () => async dispatch => {
    // dispatch({type:'GET_PIZZAS_REQUEST'})

    dispatch({type: 'GET_CHANNEL_REQUEST'});

    try {
        // const response = await axios.get("/api/channel/getallchannel");
        //path from backend to front end...... half a day wasted

        const response = await axios.get("api/channel/channelbasic");

        dispatch({type: 'GET_PIZZAS_SUCCESS', payload: response.data})

    } catch (e) {
        console.log(e);
        dispatch({type: 'GET_PIZZAS_FAILED', payload: e});
    }
}


