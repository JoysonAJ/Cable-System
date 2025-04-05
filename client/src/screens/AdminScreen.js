import React, {useEffect} from 'react';
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, useNavigate, Link} from 'react-router-dom';
import CustomerList from "../components/Admin/CustomerList";
import AllRecharges from "../components/Admin/AllRecharges";
import AddNewPack from "../components/Admin/AddNewPack";
import PackList from "../components/Admin/PackList";
import {useDispatch, useSelector} from "react-redux";
import EditChannel from "../components/Admin/EditChannel";

function AdminScreen(props) {
    const navigate = useNavigate();

    //extracting the Admin from the dataBase for the admin route
    const userState = useSelector(state => state.loginUserReducer);

    const {currentUser} = userState;
    useEffect(() => {
        //fist check the user is logged in or not then only allowed they are admin or receptionist
        if (localStorage.getItem("currentUser") === null || (!currentUser.isAdmin && !currentUser.isReceptionist)) {
            navigate("/")
        }
    }, []);

    return (
        <>
            {/*<Router>*/}
            <Container>
                <Row>
                    <h1 className={"adminHeading text-center bg-black text-light p-2"}>
                        Admin Panel
                    </h1>
                    <Col md={2} className={"SideButtonAdmin"}>
                        <ButtonGroup vertical>
                            <Button className={"m-0 p-4 sidebtn "}
                                    onClick={() => {
                                        navigate("admin/customerlist")
                                        // window.location.href = "admin/customerlist";
                                    }
                                    }
                            >
                                ALL CUSTOMERS
                            </Button>

                            <Button className={"m-0 p-4 sidebtn "}
                                    onClick={() => {
                                        navigate("admin/pacllist")
                                        // window.location.href = "admin/pacllist";
                                    }
                                    }
                            >
                                ALL PLANS
                            </Button>
                            {currentUser.isAdmin &&
                            <Button className={"m-0 p-4 sidebtn "}
                                    onClick={() => {
                                            navigate("admin/addpack")
                                        // window.location.href = "admin/addpack";
                                    }
                                    }
                            >
                                ADD NEW PACK
                            </Button>
                            }
                            <Button className={"m-0 p-4 sidebtn "}
                                    onClick={() => {

                                        navigate("admin/allrecharge")
                                        // window.location.href = "admin/allrecharge";

                                    }
                                    }
                            >
                                ALL RECHARGES
                            </Button>

                        </ButtonGroup>
                    </Col>

                    <Col>

                        <Routes>
                            {/*<Route*/}
                            {/*    exact path={"/admin/editpack/:channelId"}*/}
                            {/*    element={<EditChannel/>}/>*/}
                            <Route exact path={"/admin/customerlist"} element={<CustomerList/>}/>
                            <Route exact path={"/admin/allrecharge"} element={<AllRecharges/>}/>

                            <Route exact path={"/admin/addpack"} element={<AddNewPack/>}/>
                            <Route exact path={"/admin/pacllist"} element={<PackList/>}/>
                            {/*<Route exact path={"/pacllist"} element={<PackList/>}/>*/}
                        </Routes>


                    </Col>

                </Row>
            </Container>
            {/*</Router>*/}
        </>
    );
}

export default AdminScreen;

