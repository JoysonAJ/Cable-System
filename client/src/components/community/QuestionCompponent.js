import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import PostResponse from "./PostResponse";
import ResponseAnswer from "./ResponseAnswer";

function QuestionCompponent({theQuestion}) {
    const [userColor, setUserColor] = useState("text-dark");
    // console.log(theQuestion)

    const [responseComponent, setResponseComponent] = useState(false);
    const resopundeHandel = () =>{
       setResponseComponent(true)

    }

    const resopundeCanel = () =>{
        setResponseComponent(false)
    }
    // if(theQuestion.userType === 'Admin' || theQuestion.userType == "Receptionist"){
    //     setUserColor("card text-white bg-danger mb-3")
    // }
    return (
        <>

           <div>
               <Card border="primary" className={"card text-dark bg-light mb-3"}>
                   <Card.Header className={`${userColor}`}>{theQuestion.name}</Card.Header>
                   <Card.Body>
                       <blockquote className="blockquote mb-0">
                           <p>
                               {`${theQuestion.question} ?`}
                           </p>

                       </blockquote>
                   </Card.Body>

                   <Card.Footer className="text-muted bg-transparent">
                       <div className={"text-end"}>

                           <Button variant="danger"
                                   className={"m-2"}
                                   onClick={resopundeCanel}
                           >Cancel</Button>

                           <Button variant="primary"
                                   className={"ml-auto"}
                                   onClick={resopundeHandel}
                           >Answer</Button>
                       </div>
                   </Card.Footer>
               </Card>
           </div>

            <div>
                {
                    responseComponent &&
                        <PostResponse responseID ={theQuestion._id}/>
                }
            </div>

            <div>
                {
                    theQuestion.response.length>0 &&
                    <ResponseAnswer answer = {theQuestion.response}/>
                }
            </div>


        </>
    );
}

export default QuestionCompponent;