import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cartAction";



function ChannelBundel({channel}) {
    const [planTime, setPlanTime] = useState(1);
    const [planType, setPlanType] = useState('Basic');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleClose1 = () => setShow(false);
    // const handleShow = () => setShow(true);

    function AddToCart() {
        // dispatch(addToCart(channel, validity, plan_type))
        //value pass to cart Page
        alert(`${channel.name.toUpperCase()} added to cart`)
        dispatch(addToCart(channel, planTime, planType));
    }

    return (<>
            {/*channel heading*/}
            <div className={"font-imported shadow-lg p-3 mb-5 bg-white"}>
                <div onClick={handleShow} >
                    <h1 className="pack_name m-2 d-flex justify-content-center">
                        {channel.name.toUpperCase()}
                        {/*    Searching bar time */}
                    </h1>
                    {/*Channel Image needs to be chaaged*/}
                    <div className={"d-flex justify-content-center p-1"}>
                        <img src={channel.image} className="img-fluid pack_image d-flex mt-3 "/>
                    </div>
                </div>

                {/* channel type and price selection */}
                <div className="channel-type-selection mt-3">
                    <div className={"w-100 m-2"}>
                        <p>
                            Plan :
                        </p>

                        <select className={"form-control border border-primary rounded"} value={planType}
                                onChange={(e) => {
                                    setPlanType(e.target.value)
                                }}>
                            {channel.type.map(planType => {
                                return (<option value={planType}>
                                        {planType}
                                    </option>)
                            })}

                        </select>
                    </div>

                    <div className={"w-100 m-2"}>
                        <p>
                            Validity
                        </p>
                        {/*Event handling for plan type*/}
                        <select className={"form-control border border-dark     "} value={planTime} onChange={(e) => {
                            setPlanTime(e.target.value)
                        }}>
                            {[...Array(12).keys()].map((x, i) => {
                                return (<option value={i + 1}>
                                        {i + 1}
                                    </option>)
                            })}

                        </select>
                    </div>
                </div>

                <div className="channel-type-selection mt-3">
                    <div className={"w-100 m-2"}>
                        <h3 className={"pack_name p-3"}>
                            Price : {channel.price[0][planType] * planTime}
                        </h3>
                    </div>

                    <div className={"w-100 m-2"}>
                        <button className={"btn btn-danger cart-btn p-3"} onClick={AddToCart}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {channel.name.toUpperCase()}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className={"m-3"}>
                        <p className={"channel-pack-popUp"}>
                            {/*Channel Image needs to be chaaged*/}
                            <img src={channel.image} className="img-fluid  "/>
                        </p>
                        {channel.Description[0][planType]}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </>

    );
}

export default ChannelBundel;