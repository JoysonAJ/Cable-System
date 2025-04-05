import axios from "axios";

export const communityQuestionActiom = (questionObj) => async (dispatch) => {
    //register request dispatched from here............
    dispatch({type: 'USER_QUESTION_REQUEST'})

    try {
        console.log(questionObj)

        const response = await axios.post('/api/community/question', questionObj);
        console.log(response);
        dispatch({type: 'USER_QUESTION_SUCCESS', payload: response.data});
    } catch (e) {
        console.log("error ocured.....");
        console.log(e);
        dispatch({type: 'USER_QUESTION_FAILED', payload: e});
    }
}

export const communityResponseActiom = (responseObj) => async (dispatch) => {
    //register request dispatched from here............
    dispatch({type: 'USER_QUESTION_REQUEST'})

    try {
        // console.log(responseObj)

        const response = await axios.post('/api/community/response', responseObj);
        console.log(response);
        dispatch({type: 'USER_QUESTION_SUCCESS', payload: response.data});
    } catch (e) {
        console.log("error ocured.....");
        console.log(e);
        dispatch({type: 'USER_QUESTION_FAILED', payload: e});
    }
}


export const getCommunityQuestion = () => async (dispatch) => {
    dispatch({type: 'GET_QUESTION_REQUEST'})

    try {
        const response = await axios.get('/api/community/getquestion');
        // console.log("reducers")
        // console.log(response)
        // console.log(response);
        dispatch({type: 'GET_QUESTION_SUCCESS', payload: response.data});
    } catch (e) {
        console.log("error ocured.....");
        console.log(e);
        dispatch({type: 'GET_QUESTION_FAILED', payload: e});
    }
}