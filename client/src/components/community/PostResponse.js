import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {communityResponseActiom} from "../../actions/communityAction";

function PostResponse({responseID}) {
    const dispatch = useDispatch();
    const [communityResponse, setCommunityResponse] = useState("");
    let userType;
    // console.log(`the result is ${responseID}`)
    const takeResponse = () =>{
        const items = JSON.parse(localStorage.getItem('currentUser'));
        // console.log(items)
        const name = items.name
        if (items.isAdmin) {
            // setUserType("Admin")
            userType = "Admin"
        } else if (items.isReceptionist) {
            userType = "Receptionist"
            // setUserType("Receptionist")
        } else {
            userType = "Customer"
            // setUserType("Customer")
        }

        const responseObj = {
            upadteId :responseID,
            name: name,
            userType: userType,
            response: communityResponse
        }

        console.log(responseObj)
        dispatch(communityResponseActiom(responseObj))
    }

    return (
        <>
            <div className={"mx-5 mt-2"}>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <Form.Control as="textarea" aria-label="With textarea"
                                          value={communityResponse}
                                          onChange={
                                              (e) => {
                                                  setCommunityResponse(e.target.value)
                                              }
                                          }
                                          placeholder={"Enter the Question here....."}

                            />

                        </Card.Text>
                        <Button variant="primary"
                                className={"justify-content-end"}
                                onClick={takeResponse}
                        >Reply</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default PostResponse;
