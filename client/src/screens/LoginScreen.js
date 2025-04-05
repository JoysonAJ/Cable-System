import React, {useEffect, useState} from 'react';
import {Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../actions/userAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

function LoginScreen(props) {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    //Login status
    const logInUserState = useSelector(state => state.loginUserReducer);
    const{loading,error,currentUser} = logInUserState;



    const dispatch = useDispatch();
    // console.log(currentUser)
    useEffect(() => {
        if(localStorage.getItem("currentUser") ){
           window.location.href = "/";
       }
    }, []);
    
    const HandleLogIn = () => {
        const user = {
            userId, password
        };
        dispatch(loginUser(user))
    }
    return (
        <>
            <div className={"login-container "}>

                <div className={"card loginCard shadow-lg p-3 mb-5 bg-white rounded border border-danger "}>
                    {loading && (<Loading />)}
                    {/*{   console.log(error)*/}

                    { error && (<Error error={error}/>)}


                    <div className=" mb-4 p-2  ">
                        <input type="text"
                               className="form-control p-2 mt-4 shadow-lg p-3 bg-white rounded border border-info"
                               placeholder={"Enter the user Id"}
                               value={userId}
                               onChange={
                                   (e) => {
                                       setUserId(e.target.value)
                                   }
                               }
                        />

                    </div>

                    <div className="form-outline mb-4 p-2">
                        <input type="password"
                               className="form-control p-2 shadow-lg p-3  bg-white rounded order border-info"
                               placeholder={"Enter the password"}
                               value={password}
                               onChange={
                                   (e) => {
                                       setPassword(e.target.value)
                                   }
                               }
                        />

                    </div>

                    <div className={"btn-login"}>
                        <button type="button"
                                className="btn btn-warning btn-block justify-content-center mb-4 w-75 "

                                onClick={HandleLogIn}
                        >
                            Sign in
                        </button>
                    </div>

                    {/* Register buttons */}
                    <div>
                        <div className="text-center">
                            <p className={"font-weight-bold"}>Not a member? <Link to="/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginScreen;