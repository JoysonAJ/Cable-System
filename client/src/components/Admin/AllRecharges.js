import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllOrder} from "../../actions/oderAction";
import {getAllOrderReducer} from "../../reducers/GetOrderReducer";
import Loading from "../Loading";
import error from "../Error";
import Error from "../Error";
import {Table} from "react-bootstrap";

function AllRecharges(props) {
    // const [numValue, setNumValue] = useState(initState);
    const allRechargeState = useSelector(state => state.getAllOrderReducer);
    const {loading, orders, success} = allRechargeState
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrder())
    }, [dispatch]);

    let numberSerial = 0
    return (
        <>

            {loading && <Loading/>}
            {/*{error && <Error error={"Failed fecth data"}/>}*/}
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>user_id</th>
                    <th>pack name</th>
                    <th>Duration</th>
                    <th>Transaction Id</th>
                    <th>recharge Amount</th>
                    <th>total amount</th>
                </tr>
                </thead>
                <tbody>
                {orders &&

                    orders.map(order => {
                        let orderPlan
                        {
                            orderPlan = order.order_Items
                            // console.log(orderPlan[0].planTime)
                        }
                        return (
                            <tr key={order._id}>
                                <td>
                                    {++numberSerial}
                                </td>

                                <td>
                                    {order.userId}
                                </td>

                                <td>
                                    {
                                        orderPlan.map(details => {
                                            return (
                                                <>
                                                    <p>
                                                        {details.name}
                                                    </p>
                                                </>
                                            )
                                        })

                                    }

                                </td>

                                <td>
                                    {
                                        orderPlan.map(details => {
                                            return (
                                                <>
                                                    <p>
                                                        {details.planTime}
                                                    </p>
                                                </>
                                            )
                                        })

                                    }
                                </td>

                                <td>
                                    {order.transcation_Id}
                                </td>

                                <td>
                                    {/*total_amt*/}
                                    {
                                        orderPlan.map(details => {
                                            return (
                                                <>
                                                    <p>
                                                        {details.total_amt}
                                                    </p>
                                                </>
                                            )
                                        })

                                    }
                                </td>
                                {order.orderAmount}
                                <td>

                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </Table>


        </>
    );
}

export default AllRecharges;