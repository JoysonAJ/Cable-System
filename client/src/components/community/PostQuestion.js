import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {communityQuestionActiom} from "../../actions/communityAction";

function PostQuestion(props) {
    const [communityQuestion, setCommunityQuestion] = useState("");
    // const [userType, setUserType] = useState("");
    let userType;
    const dispatch = useDispatch();
    const takeQuestion = () => {
        // const users = localStorage.setItem('currentUser', JSON.stringify());


        const items = JSON.parse(localStorage.getItem('currentUser'));
        console.log(items)
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
        const questionObj = {
            name: name,
            userType: userType,
            question: communityQuestion
        }
        dispatch(communityQuestionActiom(questionObj));

    }

    return (
        <>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Text>
                            <Form.Control as="textarea" aria-label="With textarea"
                                          value={communityQuestion}
                                          onChange={
                                              (e) => {
                                                  setCommunityQuestion(e.target.value)
                                              }
                                          }
                                          placeholder={"Enter the Question here....."}

                            />

                        </Card.Text>
                        <Button variant="primary"
                                className={"justify-content-end"}
                                onClick={takeQuestion}
                        >Post Question</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default PostQuestion;