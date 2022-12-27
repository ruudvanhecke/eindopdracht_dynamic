import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../services/firestore";
import {MyButton} from "./MyButton";
import { CardContainer } from "./CardContainer";
import { ViewCard } from "./ViewCard";

export function MovieCard({ data, id, enableEditing }) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [director, setDirector] = useState(data.director);

    const handleCancelClick = () => {
        setData();
    };

    const setData = () => {
        setEditMode(false);
        setTitle(data.title);
        setDescription(data.description);
        setDirector(data.director);
    }

    const handleSaveClick = async () => {
        setEditMode(false);
        const taskDocRef = doc(firestoreDB, "movies", id);
        try {
            await updateDoc(taskDocRef, {
                title,
                director,
                description,
            });
        } catch (err) {
            alert(err);
        }
    };

    useEffect(() => {
        setData()
    }, [data])



    return (
        <>
            <Card style={{ width: "18rem" }} className={"m-3 shadow-lg"}>

                <CardContainer url={"./images/img.png"}/>
                <Card.Body>
                    {editMode ? (
                        <Form>
                            <Form.Group controlId="formTitle">
                                <Form.Label><strong>Title</strong></Form.Label>
                                <textarea rows={4} className={"m-3"}
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formDescription">
                                <Form.Label><strong>Description</strong></Form.Label>
                                <textarea rows={25} cols={30}
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formDirector">
                                <Form.Label><strong>Director</strong></Form.Label>
                                <Form.Control
                                    type="text"
                                    value={director}
                                    onChange={(e) => setDirector(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" onClick={handleSaveClick}>
                                Save
                            </Button>
                            <MyButton variant={"secondary"} onClick={handleCancelClick} children={"Cancel"}/>
                        </Form>
                    ) : (
                        <>
                        <ViewCard title={title} description={description} director={director}/>

                            { enableEditing ? (
                                <Card.Text>
                                <MyButton variant={"primary"} onClick={() => setEditMode(true)} children={"Edit"}/>
                                </Card.Text>
                            ) : 
                                <></>
                            }
                        </>
                    )}
                </Card.Body>
            </Card>
        </>
    );
}