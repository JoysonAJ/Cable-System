import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import CustomerList from "./CustomerList";
import AllRecharges from "./AllRecharges";
import AddNewPack from "./AddNewPack";
import PackList from "./PackList";
import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";
import {getChannelById} from "../../actions/editChPackAction";
import EditchannelComponent from "./editchannelComponent";

function EditChannel(props) {

    const navigate = useNavigate();

    //jugade
    // const updatePackState = useSelector(state => state.UpdateChannelReducer);
    // const {updateLoading, updateSuccess, updateError} = updatePackState

    return (
        <>
            {/*{updateError && <Success success={"Updated Sucessfully"}/>}*/}
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

                            <Button className={"m-0 p-4 sidebtn "}
                                    onClick={() => {
                                        navigate("admin/addpack")
                                        // window.location.href = "admin/addpack";
                                    }
                                    }
                            >
                                ADD NEW PACK
                            </Button>

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
                        <EditchannelComponent />

                        <Routes>
                            {/*<Route*/}
                            {/*    exact path={"/admin/editpack/:channelId"}*/}
                            {/*    element={<EditChannel/>}/>*/}
                            <Route exact path={"/admin/customerlist"} element={<CustomerList/>}/>
                            <Route exact path={"/admin/allrecharge"} element={<AllRecharges/>}/>

                            <Route exact path={"/admin/addpack"} element={<AddNewPack/>}/>
                            <Route exact path={"/admin/pacllist"} element={<PackList/>}/>
                            <Route exact path={"/pacllist"} element={<PackList/>}/>
                        </Routes>


                    </Col>

                </Row>
            </Container>
            {/*</Router>*/}
        </>
    );
}

export default EditChannel;