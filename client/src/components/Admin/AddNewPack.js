import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {AddNewChannels} from "../../actions/addChannelAction";
import {useDispatch, useSelector} from "react-redux";
import {AddNewPackReducer} from "../../reducers/addNewPackReducer";
import Loading from "../Loading";
import Error from "../Error";
import Success from "../Success";

function AddNewPack(props) {
    const [Name, setName] = useState("");
    const [type, setType] = useState("Bundle");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const addNewChannelState = useSelector(state => state.AddNewPackReducer)
    const {loading,error,success} = addNewChannelState



    const dispatch = useDispatch();
    const submitChannel = (e) => {
        e.preventDefault();
        // const newChannel ={
        //    name : Name,
        //     type:[type],
        //     price: [{
        //         Bundle :price,
        //         Individual:price
        //     }],
        //     categories : type,
        //     image:image,
        //     Description : description
        // }
        const newChannel = {
            Name,type,price,image,description
        }
        dispatch(AddNewChannels(newChannel));
    }

    return (
        <>
           <div>
               {loading && <Loading/>}
               {error && <Error error={"Something went Wrong new Pack is not added"}/>}
               {success && <Success success={"New Plans added"}/>}
               <Form>
                   <Row className="mb-2">
                       <Form.Group as={Col} controlId="formGridEmail">
                           <Form.Label>Name</Form.Label>
                           <Form.Control
                               type="text"
                               placeholder="Enter Pack Name"
                               value={Name}
                               onChange={e => setName(e.target.value)}
                           />
                       </Form.Group>
                   </Row>

                   <Row className={"mb-3"}>
                       <Form.Group as={Col} controlId="formGridPassword">
                           <Form.Label>Type</Form.Label>
                           <Form.Select
                               aria-label="Default select example"
                               value={type}
                               onChange={e => setType(e.target.value)}
                           >
                               <option value="Basic"> Bundle </option>
                               <option value="Basic"> Individual</option>
                           </Form.Select>
                       </Form.Group>

                       <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                           <Form.Label>Enter the Price</Form.Label>
                           <Form.Control placeholder="Price"
                                         value={price}
                                         onChange={e => setPrice(e.target.value)}
                           />
                       </Form.Group>
                   </Row>

                   <Row>
                       <Form.Group as={Col} controlId="formGridCity">
                           <Form.Label>Image of Pack</Form.Label>
                           <Form.Control placeholder={"Enter url of image"}
                                         value={image}
                                         onChange={e => setImage(e.target.value)}
                           />
                       </Form.Group>
                   </Row>

                   <Row className="mb-3">
                       <Form.Group as={Col} controlId="formGridCity">
                           <Form.Label>Description</Form.Label>
                           <Form.Control placeholder={"Enter Discription of Channel"}
                                         value={description}
                                         onChange={e => setDescription(e.target.value)}
                           />
                       </Form.Group>
                   </Row>
                   <Button variant="primary" type="submit" onClick={submitChannel}>
                       ADD CHANNEL
                   </Button>
               </Form>
           </div>
        </>
    );
}

export default AddNewPack;