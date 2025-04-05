import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../actions/userAction";
import {Link, useNavigate} from "react-router-dom";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";


function RegisterScreen(props) {
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [cnfrmPassword, setCnfrmPassword] = useState("");

    //Dispatch all data to backend..........................................
    const dispatch = useDispatch();

    //text for registration successful..........................................
    const registerUserState = useSelector(state => state.registerUserReducer);
    const {loading, success, error} = registerUserState;

    const navigate = useNavigate();

    const HandleRegister = () => {
        if((name ==="") &&(userId ==="") && (password ==="") && (email === "") && (cnfrmPassword =="")){
            alert("All fields are required")
        }else if(password.length < 8){
            alert("Password Length should be 8")
        }

        else if (password !== cnfrmPassword) {
            alert("Password and Confirmed Password should match")
        }
        else {
            const userInfo = {
                name, email, userId, password
            }
            console.log(userInfo);
            dispatch(registerUser(userInfo));
        }
    }

    return (
        <>
            <div>
                <div className={""}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-5 text-left"}>
                            <div className={"form-group card p-4 border-primary"}>
                                {loading && <Loading/>}
                                {success &&
                                    navigate("/Login")
                                    // < Success success={"Registration Completed........."}/>

                                }
                                {error && <Error error={error}/>}
                                <input type={"text"} placeholder={"Enter the Full Name"}
                                       className={"form-control loginInput border-success p-2"}
                                       required
                                       value={name}
                                       onChange={
                                           (e) => {
                                               setName(e.target.value)
                                           }
                                       }
                                />

                                <input type={"text"} placeholder={"Enter the Email"}
                                       className={"form-control loginInput border-success p-2"}
                                       required
                                       value={email}
                                       onChange={
                                           (e) => {
                                               setEmail(e.target.value)
                                           }
                                       }
                                />
                                <input type={"text"} placeholder={"Enter the user id "}
                                       className={"form-control loginInput border-success  p-2"}
                                       required
                                       value={userId}
                                       onChange={
                                           (e) => {
                                               setUserId(e.target.value)
                                           }
                                       }
                                />
                                <input type={"password"} placeholder={"Password"}
                                       className={"form-control loginInput border-success  p-2"}
                                       value={password}
                                       required
                                       onChange={
                                           (e) => {
                                               setPassword(e.target.value)
                                           }
                                       }
                                />
                                <input type={"password"} placeholder={"Confirm password"}
                                       className={"form-control loginInput border-success  p-2"}
                                       required
                                       value={cnfrmPassword}
                                       onChange={
                                           (e) => {
                                               setCnfrmPassword(e.target.value)
                                           }
                                       }
                                />
                                <button
                                    className={"btn btn-danger mt-4 mb-0  p-3 btn-register btn-block justify-content-center mb-4"}
                                    onClick={HandleRegister}
                                >
                                    Register Now....
                                </button>
                                <div>
                                    <div className="text-center mt-4">
                                        <p>Already a member? </p>
                                        <p><Link to="/login">{"Click Here".toUpperCase()}</Link></p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>

    );
}

export default RegisterScreen;