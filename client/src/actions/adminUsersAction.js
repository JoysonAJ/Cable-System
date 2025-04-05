import axios from "axios";
import swal from "sweetalert";

export const getallUsers = () => async (dispatch) => {
    //register request dispatched from here............
    dispatch({type: 'GET_ALL_USER_REQUEST'})

    try {
        const response = await axios.get('/api/admin/getalluserdetails');
        // console.log(response);
        dispatch({type: 'GET_ALL_USER_SUCCESS', payload: response.data});
    } catch (e) {
        console.log("error ocured.....");
        console.log(e);
        dispatch({type: 'GET_ALL_USER_FAILED', payload: e});
    }
}

export const deleteUser = (userId) => async (dispatch) => {
    try {
        const responseDelete = await axios.post("/api/admin/deleteusers", {userId})
        swal("Subscrption plan deleted", "success");
        window.location.reload();
        // console.log(responseDelete)
    } catch (e) {
        swal(`Eror while deleting users \n ${e}`);
    }
}