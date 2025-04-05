import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllChannelReducers} from "./reducers/chBasicReducers";
import {CartReducer} from "./reducers/cartReducer";
import {loginUserReducer, registerUserReducer} from "./reducers/userReducer";
import {rechargeOrderReducer} from "./reducers/orderReducer";
import {getAllOrderReducer, getUserOrderReducer} from "./reducers/GetOrderReducer";
import {AddNewPackReducer} from "./reducers/addNewPackReducer";
import {editChannelByIdReducer, UpdateChannelReducer} from "./reducers/editChannelReducer";
import {getAllusersReducers} from "./reducers/adminUserReducers";
import {
    communityQuestionReducer,
    communityResponseReducer,
    getCommunityQuestionReducer
} from "./reducers/communityReducers";


const finalReducer = combineReducers({
    getAllChannelReducers: getAllChannelReducers,
    CartReducer: CartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    rechargeOrderReducer: rechargeOrderReducer,
    getUserOrderReducer: getUserOrderReducer,
    AddNewPackReducer: AddNewPackReducer,
    editChannelByIdReducer: editChannelByIdReducer,
    UpdateChannelReducer: UpdateChannelReducer,
    getAllOrderReducer:getAllOrderReducer,
    getAllusersReducers:getAllusersReducers,
    communityQuestionReducer:communityQuestionReducer,
    getCommunityQuestionReducer:getCommunityQuestionReducer,
    communityResponseReducer:communityResponseReducer
})

const cartItem = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
//    cart local storage ......
    CartReducer: {
        cartItem: cartItem
    },
    loginUserReducer: {
        currentUser: currentUser
    },
    rechargeOrderReducer: {
        cartItem: cartItem,
        currentUser: currentUser
    }

}

const composeEnhancer = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)));


export default store;
