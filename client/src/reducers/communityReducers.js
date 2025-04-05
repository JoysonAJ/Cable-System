import {communityQuestionActiom} from "../actions/communityAction";

export const communityQuestionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_QUESTION_REQUEST':
            return ({
                loading: true
            });
        case 'USER_QUESTION_SUCCESS':
            return ({
                loading: false,
                success: true
            })
        case 'USER_QUESTION_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export const getCommunityQuestionReducer = (state = {question: []}, action) => {
    switch (action.type) {
        case 'GET_QUESTION_REQUEST':
            return ({
                loading: true
            })
        case 'GET_QUESTION_SUCCESS':
            return ({
                loading: false,
                question: action.payload

            })
        case 'GET_QUESTION_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default :
            return state
    }
}

export const communityResponseReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_RESPONSE_REQUEST':
            return ({
                loading: true
            });
        case 'USER_RESPONSE_SUCCESS':
            return ({
                loading: false,
                success: true
            })
        case 'USER_RESPONSE_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default:
            return state;
    }
}