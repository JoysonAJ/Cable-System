import React, {useEffect} from 'react';
import {getUserOrder} from "../actions/oderAction";
import {useDispatch, useSelector} from "react-redux";
import {getUserOrderReducer} from "../reducers/GetOrderReducer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Col, Row, Table} from "react-bootstrap";

function OrderScreen(props) {
    let i=0
    const orderState = useSelector(state => state.getUserOrderReducer)
    const {loading, orders, error} = orderState;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserOrder())
    }, [dispatch]);

    return (

        <>
            {console.log(orders)}
            <div>
                <h1>
                    Orders Screen.......................
                </h1>
                {loading && <Loading/>}
                {error && (<Error error={"Something went wromg"}/>)}
                <Table striped bordered hover variant="dark" className={"p-5"}>
                    <thead>
                    <tr className={"p-5 m-2"}>
                        <th>#</th>
                        <th>Pack Name</th>
                        <th>Duration</th>
                        <th>Payment  ID</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                {
                    orders && orders.map(item => (
                        <tr className={"p-4"}>
                            <td>{++i}</td>
                            {/*<td>{item.name}</td>*/}
                            <td>{item.transcation_Id}</td>
                           {item.order_Items.map(packDetails => (
                                                <>
                                                        <td>
                                                             {`${packDetails.name}`.toUpperCase()}
                                                        </td>

                                                        <td>
                                                             { `${packDetails.planTime} months`.toUpperCase() }
                                                        </td>
                                                    </>

                                            )
                                        )
                                        }
                        {/*</td>*/}

                            <td>{item.orderAmount}</td>
                        </tr>

                        // <Row>
                        //     <Col md={5}>
                        //         <h3>
                        //             {item.name}
                        //         </h3>
                        //         <h2>
                        //             {item.transcation_Id}
                        //         </h2>
                        //     </Col>
                        //     <Col md={5}>
                        //         {item.order_Items.map(packDetails => (
                        //                 <>
                        //                     <h2>
                        //                         pack name : {packDetails.name}
                        //                     </h2>
                        //
                        //                     <h2>
                        //                         Duration {packDetails.planTime}
                        //                     </h2>
                        //                 </>
                        //
                        //             )
                        //         )
                        //         }
                        //         <h2>
                        //             {item.orderAmount}
                        //         </h2>
                        //
                        //     </Col>
                        //
                        // </Row>

                    ))


                }


                    {/*<tr>*/}
                    {/*    <td>2</td>*/}
                    {/*    <td>Jacob</td>*/}
                    {/*    <td>Thornton</td>*/}
                    {/*    <td>@fat</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <td>3</td>*/}
                    {/*    <td colSpan={2}>Larry the Bird</td>*/}
                    {/*    <td>@twitter</td>*/}
                    {/*</tr>*/}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default OrderScreen;

// <div>
//     <h2>
//         {item.name}
//
//     </h2>
//     <h2>
//         {item.order_Items.map(packDetails => (
//             <>
//                 <h2>
//                     pack name : {packDetails.name}
//                 </h2>
//                 <h2>
//                     Duration {packDetails.planTime}
//                 </h2> <h2>
//                 Total amount {packDetails.total_amt}
//             </h2>