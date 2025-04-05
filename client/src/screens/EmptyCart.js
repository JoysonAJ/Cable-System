import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function EmptyCart(props) {
    const navigate = useNavigate()

    return (
        <>
            <div className="container-fluid  mt-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">

                            <div className="card-body cart">
                                <div className="col-sm-10 empty-cart-cls text-center">
                                    <img src="https://i.imgur.com/dCdflKN.png" className="img-fluid mb-2 mr-3" width={130} height={170} />
                                    <h3>
                                        <strong>Your Cart is Empty</strong>
                                    </h3>
                                    <h4>
                                        Please Add Plans to cart
                                    </h4>
                                    <Button
                                        variant="danger"
                                    onClick={() =>{
                                        navigate("/")
                                    }
                                    }>{'Recharge Now'.toUpperCase()} </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmptyCart;