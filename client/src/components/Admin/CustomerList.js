import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getallUsers} from "../../actions/adminUsersAction";
import {getAllusersReducers} from "../../reducers/adminUserReducers";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaEdit} from "react-icons/fa";
import {TiDelete, TiUserDelete} from "react-icons/ti";
import {deleteChannel} from "../../actions/editChPackAction";

function CustomerList(props) {
    let userNumber = 0;
    const userState = useSelector(state => state.getAllusersReducers)
    const {loading, success, users} = userState;
    console.log(users)
    const userStateList = useSelector(state => state.loginUserReducer);

    const {currentUser} = userStateList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getallUsers())
    }, [dispatch]);

    return (

        <>


            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>S/No</th>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>user_id</th>
                    <th>Joined date</th>
                    {currentUser.isAdmin &&
                    <th>Remove users</th>
                    }
                </tr>
                </thead>
                <tbody>

                {users &&
                    users.map(userInfo => {

                        return (
                            // {if(userInfo)}
                            <tr key={userInfo._id}>
                                <td>
                                    {++userNumber}
                                </td>

                                <td>
                                    {userInfo.name}
                                </td>

                                <td>
                                    {userInfo.email}
                                </td>

                                <td>
                                    {userInfo.userId}
                                </td>

                                <td>
                                    {userInfo.createdAt.substring(0, 10).split("-").reverse().join("-")}
                                </td>
                                { currentUser.isAdmin &&
                                <td className={'icon-channel'}>
                                    <div className={"p-2 w-100 "}>
                                        {/*<Link to={`/admin/editpack/${channel._id}`}>*/}
                                        {/*</Link>*/}

                                        <TiUserDelete className={"text-danger icon-delete w-75 "}
                                                  onClick={() =>{
                                                      alert(`The customer deleted is  ${userInfo.name}`)
                                                      dispatch(deleteUser(userInfo._id))
                                                  }

                                                  }

                                        />
                                        {/*</Link>*/}
                                    </div>
                                </td>
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    );
}

export default CustomerList;