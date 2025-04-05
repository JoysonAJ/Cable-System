import React, {useEffect, useState} from 'react';
import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";
import {Button, Col, Form, Row} from "react-bootstrap";
import loading from "../Loading";
import error from "../Error";
import success from "../Success";
import {Route, Routes, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChannelById, updateChannelPack} from "../../actions/editChPackAction";
import {UpdateChannelReducer} from "../../reducers/editChannelReducer";
import PackList from "./PackList";

function EditchannelComponent(props) {

    const [Name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const updatePackState = useSelector(state => state.UpdateChannelReducer);
    const {updateLoading, updateSuccess, updateError} = updatePackState

    const navigate = useNavigate();

    const parms = useParams();
    const channelId = parms.channelId;

    const getChannelPackById = useSelector(state => state.editChannelByIdReducer);
    const {loading, channel, error} = getChannelPackById;

    // console.log(parms.channelId)
    console.log(channel)
    const dispatch = useDispatch();
    useEffect(() => {
        if (channel) {
            setName(channel.name);
            setType(channel.type);
            setPrice(channel.price[0]["Basic"])
            setImage(channel.image)
            setDescription(channel.Description[0][channel.type[0]])
        } else {
            dispatch(getChannelById(channelId))
        }
    }, [channel, dispatch]);

    const editPack = (e) => {
        e.preventDefault();
        const updatePack = {
            _id: parms.channelId,
            Name,
            type,
            price,
            image,
            description
        }
        dispatch(updateChannelPack(updatePack))
    }
    return (
        <>

            {updateLoading && <Loading/>}
            {updateError && <Error error={"Something went Wrong new Pack is not added"}/>}
            {/*{updateError && <Success success={"Updated Sucessfully"}/>}*/}
            {/*{updateSuccess && <Success success={"New Plans added"}/>}*/}
            {updateSuccess && <Success success={"Updated Sucessfully..........."}/>}
            <div>
                <Form>
                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Pack Name"
                                value={Name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Row className={"mb-3"}>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={type}
                                onChange={e => setType(e.target.value)}
                            >
                                <option value="Basic"> Bundle</option>
                                <option value="Basic"> Individual</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Enter the Price</Form.Label>
                            <Form.Control placeholder="Price"
                                          value={price}
                                          onChange={e => setPrice(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Image of Pack</Form.Label>
                            <Form.Control placeholder={"Enter url of image"}
                                          value={image}
                                          onChange={e => setImage(e.target.value)}
                            />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Description</Form.Label>
                            <Form.Control placeholder={"Enter Discription of Channel"}
                                          value={description}
                                          onChange={e => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit" onClick={editPack}>
                        UPDATE PACK
                    </Button>
                </Form>


            </div>

            <div>
                <Routes>
                    <Route exact path={"/admin/pacllist"} element={<PackList/>}/>
                </Routes>
            </div>
        </>
    );
}

export default EditchannelComponent;