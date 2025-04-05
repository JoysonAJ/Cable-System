import axios from "axios";
import swal from 'sweetalert';

export const getChannelById = (PlanID) => async (dispatch) => {
    dispatch({type: 'GET_CHANNEL_BY_ID_REQUEST'});
    try {
        console.log(PlanID)
        const response = await axios.post("/api/admin/getChannelbyID", {PlanID})
        dispatch({type: 'GET_CHANNEL_BY_ID_SUCCESS', payload: response.data})

    } catch (e) {
        console.log(e);
        dispatch({type: 'GET_CHANNEL_BY_ID_FAILED', payload: e});
    }
}

export const updateChannelPack = (updatedPlan) => async (dispatch) => {
    dispatch({type: 'UPDATE_CHANNEL_REQUEST'});
    try {
        console.log(updatedPlan)
        const response = await axios.post("/api/admin/updatechannelpack", {updatedPlan})
        dispatch({type: 'UPDATE_CHANNEL_SUCCESS', payload: response.data})
        // window.location.href="/admin/allrecharge";

    } catch (e) {
        console.log(e);
        dispatch({type: 'UPDATE_CHANNEL_FAILED', payload: e});
    }
}

export const deleteChannel = (PlanID) => async (dispatch) => {
    try {
        const responseDelete = await axios.post("/api/admin/deleteChannel", {PlanID})
        swal("Subscrption plan deleted", "success");
        window.location.href = "/admin/pacllist";
        // console.log(responseDelete)
    } catch (e) {
        swal(`Eror while deleting packs \n ${e}`);
    }
}