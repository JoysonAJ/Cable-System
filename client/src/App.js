import './App.css';
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route,Routes, Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Basic_plans from "./screens/BasicPlans";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import EditChannel from "./components/Admin/EditChannel";
import React from "react";
import Community from "./components/Community";

function App() {

    return (
        <>
            <Router>
                <div className={"App"}>
                    <Navbar/>
                </div>

                <Routes>
                    <Route  exact path="/admin/*" element={<AdminScreen/>}/>
                    <Route
                        exact path={"/admin/editpack/:channelId"}
                        element={<EditChannel/>}/>
                    <Route exact path="/" element={<Basic_plans/>}/>
                    <Route exact path="/cart" element={<CartScreen/>}/>
                    <Route exact path="/Login" element={<LoginScreen/>}/>
                    <Route exact path="/register" element={<RegisterScreen/>}/>
                    <Route exact path="/mystatus" element={<OrderScreen/>}/>
                    {/*<Route exact path="/mystatus" element={<OrderScreen/>}/>*/}
                    <Route exact path="/communitypage" element={<Community />}/>

                        {/*<Route exact path="/" element={<Home_layout />} />*/}
                        {/*<Route exact path="/about" element={<About_page />} />*/}
                        {/*<Route exact path="/login" element={<Login />} />*/}
                        {/*<Route exact path="/rigister" element={<Register />} />*/}
                </Routes>
            </Router>


        </>
    );
}

export default App;
