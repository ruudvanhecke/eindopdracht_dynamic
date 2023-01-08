import { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../services/firestore";
import {MyButton} from "./MyButton";
import { CardContainer } from "./CardContainer";
import {BsHeart, BsHeartFill} from "react-icons/bs";
import { ViewCard } from "./ViewCard";

export function MovieCard({ data, id, enableEditing }) {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [director, setDirector] = useState(data.director);
    const [favoriteMovies, setFavoriteMovies] = useState(JSON.parse(localStorage.getItem("favoriteMovies")) ?? []);
    
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

    const isFavorite = () => {
        return favoriteMovies.filter((movie) => movie.title === data.title)?.length > 0
    }


    const setFavorite = (movie) => {
        const currentFavoriteMovies = getFavorites();
        currentFavoriteMovies.push(movie);
        localStorage.setItem('favoriteMovies', JSON.stringify(currentFavoriteMovies));
        setFavoriteMovies(currentFavoriteMovies);
    }

    const removeFavorite = (movie) => {
        const currentFavoriteMovies = getFavorites();
        const newFavoriteList = currentFavoriteMovies.filter((mv) => mv.title !== movie.title);
        localStorage.setItem('favoriteMovies', JSON.stringify(newFavoriteList));
        setFavoriteMovies(newFavoriteList);
    }

    const getFavorites = () => {
        return JSON.parse(localStorage.getItem('favoriteMovies')) ?? [];
    }

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
                        <Card.Text>
                            {  isFavorite() ? (
                            <Card.Text>
                            <MyButton variant={"light"} onClick={() => removeFavorite(data)} children={"Remove from favorite"}><BsHeart/></MyButton>
                             </Card.Text>
                            ) : 
                            <Card.Text>
                            <MyButton variant={"light"} onClick={() => setFavorite(data)} children={"Favorite"}><BsHeartFill/></MyButton>
                             </Card.Text>
                            }
                        </Card.Text>

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