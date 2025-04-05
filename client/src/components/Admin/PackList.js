import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";
import {FaEdit} from "react-icons/fa"
import ChannelBundel from "../ChannelBundel";
import {getAllChannel} from "../../actions/chBasicAction";
import AdminChannelPack from "./AdminChannelPack";
import axios from "axios";
import {Table} from "react-bootstrap";
import {TiDelete} from "react-icons/ti";
import {Link} from "react-router-dom";
import {deleteChannel} from "../../actions/editChPackAction";

// async function PackList(props) {
function PackList(props) {

   //  const channelBasic = await axios.get("/api/channel/channelbasic");
    // console.log(channelBasic);

    const dispatch = useDispatch();
    const channelBasicState = useSelector(state => state.getAllChannelReducers);
    const {channelBasic, error, loading} = channelBasicState

    const userStateList = useSelector(state => state.loginUserReducer);

    const {currentUser} = userStateList;

    useEffect(() => {
        //parameter from the file actions/chBasicsAction
        dispatch(getAllChannel());
    }, []);


    let i=0;
    return (
        <>
            <div className="row ">

                {loading ? (<Loading/>) : error ? (<Error error='Something went Wrong'/>
                ) : (
                    //Channel contains data from the data base

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Plan Name</th>
                            <th>Plan Type</th>
                            <th>Prices</th>
                            <th> Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {

                            channelBasic  && channelBasic.map(channel => {
                                console.log(channelBasic)
                            return(
                                <tr>
                                    <td>
                                        {++i}
                                    </td>

                                    <td>
                                        {channel.name}
                                    </td>

                                    <td>
                                        {channel.categories}
                                    </td>

                                    <td>
                                        {}
                                        {channel.price[0]["Basic"]}
                                    </td>

                                    <td className={'icon-channel'}>
                                       <div className={"p-2 w-100 "}>
                                           <Link to={`/admin/editpack/${channel._id}`}>
                                               <FaEdit className={" text-primary icon-channel w-50 "}/>
                                           </Link>
                                           {/*<Link to={}>*/}
                                           {currentUser.isAdmin &&
                                               <TiDelete className={"text-danger icon-delete w-50 "}
                                               onClick={() =>{
                                                    dispatch(deleteChannel(channel._id))
                                                }
                                               }

                                               />
                                           }
                                           {/*</Link>*/}
                                       </div>
                                    </td>


                                </tr>
                            )
                            })
                        }
                        </tbody>
                    </Table>
                )
                }
            </div>
        </>
    );
}

export default PackList;
