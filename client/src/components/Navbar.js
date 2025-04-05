import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CartReducer} from "../reducers/cartReducer";
import {loginUser, logoutUser} from "../actions/userAction";



export default function Navbar() {
    const userState = useSelector(state => state.loginUserReducer)
    const {currentUser} = userState;
    const dispatch = useDispatch();

    const cartState = useSelector(state => state.CartReducer);
    return (
        <>
            <div className={"navbar-font col sticky-top"}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-5 bg-dark ">
                    <div className="container">
                        {/* Navbar brand */}
                        <Link className="navbar-brand" to="/">
                            <img id="MDB-logo"
                                 src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                                 alt="MDB Logo" draggable="false" height={30}/></Link>
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"/>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-3 ">
                                <li className="nav-item me-3">
                                    <Link className="nav-link d-flex align-items-end" to="/">Home</Link>
                                </li>
                                {currentUser ?
                                    (
                                        <>
                                            {   (currentUser.isAdmin || currentUser.isReceptionist) &&
                                                <li className="nav-item me-3">
                                                    <Link className="nav-link d-flex align-items-end" to="/admin">Admin Panel </Link>
                                                </li>
                                            }
                                            {(!currentUser.isAdmin && !currentUser.isReceptionist) &&
                                                <li className="nav-item">
                                                    {/* <li class="nav-item" style="width: 65px;"> */}
                                                    <Link className="nav-link d-flex align-items-center" to="/">
                                                        Plans
                                                    </Link>
                                                </li>
                                            }

                                            <li className="nav-item">
                                                {(!currentUser.isAdmin && !currentUser.isReceptionist) &&

                                                    <Link className="nav-link d-flex align-items-center" to="/cart">
                                                        Cart {cartState.cartItem.length}
                                                    </Link>
                                                }
                                            </li>
                                        </>
                                    ):(
                                        <>

                                        </>
                                    )}

                                {currentUser ?
                                    (
                                        <li className="nav-item dropdown p-md-0 ">
                                            <a className="nav-link dropdown-toggle" href="/" role="button"
                                               data-bs-toggle="dropdown" aria-expanded="false">
                                                {currentUser.name}
                                            </a>
                                            <ul className="dropdown-menu  text-light bg-dark border border-warning user-drop-down">
                                                { (!currentUser.isAdmin && !currentUser.isReceptionist) &&
                                                <li className={"drop-down-login-details"}>
                                                    <Link className="dropdown-item text-light " to="/mystatus">..My
                                                        status
                                                    </Link>
                                                </li>
                                                }
                                                <li className={"drop-down-login-details"}>
                                                    <Link className="dropdown-item text-light " to="/communitypage">Community</Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-primary btn-sm btn-logout"
                                                            onClick={() => {
                                                                dispatch(logoutUser())
                                                            }
                                                            }
                                                    >
                                                        Sign Out
                                                    </button>
                                                </li>
                                            </ul>
                                        </li>
                                    ) :

                                    (
                                        <li className="nav-item">
                                            <Link className="nav-link d-flex align-items-center me-3" to="/Login">
                                                <i className="fas fa-bookmark pe-2"/>Sign In
                                            </Link>
                                        </li>
                                    )}
                            </ul>
                        </div>
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Container wrapper */}
                </nav>
            </div>
        </>
    );
}

// export default Navbar;