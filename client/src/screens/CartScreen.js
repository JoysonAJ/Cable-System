import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CartReducer} from "../reducers/cartReducer";
import {addToCart, deleteFromCart} from "../actions/cartAction";
import CheckOut from "../components/CheckOut";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Success from "../components/Success";
import EmptyCart from "./EmptyCart";

function CartScreen(props) {

    // const orderState = useSelector(state => state.rechargeOrderReducer)
    // const {success,error, loading} = orderState
    const cartState = useSelector(state => state.CartReducer);
    const cartItem = cartState.cartItem;
    console.log(cartItem.length)
    const dispatch = useDispatch()

    let totalAmount = cartItem.reduce(
        (x, item) => x + item.total_amt, 0
    )

    return (
        <>
            {/*{loading && (<Loading/>)}*/}
            {/*{error && (<Error error={"Not done payment"}/>)}*/}
            {/*{success && <Success success={"Payment Completed plan will activate "}/>}*/}
            {(cartItem.length) == 0 ? (<>
                    <EmptyCart />
                </>
                ):(

            <div>
                <div className={""}>
                    <div className={"cart-heading"}>
                        <h1 className={"d-flex justify-content-center"}>
                            Cart Screen.......
                        </h1>
                    </div>
                </div>

                <div className={"row justify-content-center"}>
                    <div className={"col-md-6"}>
                        <h2>
                            My Orders
                        </h2>
                        {cartItem.map(item => {
                            return (
                                <div className={"flex-container m-3 p-2 "}>
                                    {/*Order Details*/}
                                    <div className={"text-left m-1 w-100"}>
                                        <h1 className={"cart-text"}>
                                            {item.name}
                                        </h1>
                                        <h1 className={"cart-text"}>
                                            {/*cartAction,js refer*/}
                                            Price :
                                            {item.planTime} month * {item.price[0][item.planType]} = {item.total_amt}
                                        </h1>

                                        <h1 className={"cart-text d-inline "}>
                                            Months

                                            <i className="fa fa-minus m-2" aria-hidden="true"
                                               onClick={() => {
                                                   dispatch(addToCart(
                                                       item, (Number(item.planTime) - 1), item.planType
                                                   ))
                                               }}
                                            ></i>
                                            <b>
                                                {item.planTime}
                                            </b>
                                            <i className="fa  fa-plus m-2" aria-hidden="true" onClick={() => {
                                                dispatch(addToCart(
                                                    item, (Number(item.planTime) + 1), item.planType
                                                ))
                                            }}></i>

                                        </h1>

                                        <hr/>
                                    </div>
                                    {/*Image to display about the pack*/}

                                    <div className={"m-1 w-100"}>
                                        <img src={item.image} className={"cart-image"}/>
                                    </div>
                                    {/*Remove button*/}
                                    <div className={"m-1 w-100"}>
                                        <i className="fa  fa-trash mt-5 w-25 " aria-hidden="true"
                                           onClick={() => {
                                               // alert(`${item.name} Removed From Cart`)
                                               dispatch(deleteFromCart(item))
                                           }
                                           }></i>
                                    </div>
                                </div>

                            )
                        })}
                    </div>

                    <div className={"col-md-4"}>
                        <h3>
                            Total Amount :
                            ₹ {totalAmount} /-
                        </h3>
                       <CheckOut totalAmount={totalAmount}/>
                    </div>

                </div>
            </div>
                )}
        </>
    );
}

export default CartScreen;