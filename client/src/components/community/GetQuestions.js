import React, {useEffect} from 'react';
import {Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getCommunityQuestionReducer} from "../../reducers/communityReducers";
import {getCommunityQuestion} from "../../actions/communityAction";
import QuestionCompponent from "./QuestionCompponent";
import questionCompponent from "./QuestionCompponent";

function GetQuestions(props) {
    const dispatch = useDispatch();

    const getQuestion = useSelector(state => state.getCommunityQuestionReducer);
    const {loading, success, question} = getQuestion;
    // console.log("from the getQuestion")


    useEffect(() => {
        dispatch(getCommunityQuestion())
    }, [dispatch]);


    return (

        <>
            {console.log(question)}
            <div className={"mx-5 "}>
                {question &&
                    question.map(sendQuestion => {

                        return (
                            <>
                                <div className={"mb-2 p-1 px-2"}>
                                    <div key={sendQuestion._id}>
                                        <QuestionCompponent theQuestion={sendQuestion}/>
                                    </div>
                                </div>

                            </>
                        )
                    })

                }

            </div>
            {/*{question.map(question =>{*/}
            {/*    console.log(question)*/}
            {/*})}*/}
        </>
    );
}

export default GetQuestions;