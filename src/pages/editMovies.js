
import {Section} from "../components/Section";
import Card from "react-bootstrap/Card";
import {MyButton} from "../components/MyButton";
import {MdEdit, MdEditOff} from "react-icons/md";
import {useState} from "react";


function Movie(props) {
    const { movie } = props;
    const [editMode , setEditMode] = useState(false);




    return <>
        <Card style={{width: '18rem'}} className={"m-3 shadow-lg"}>
            <Card.Img variant="top" src={"./images/img.png"}/>
            <Card.Body>
                <MyButton onClick={() => setEditMode(!editMode)}>{editMode ? <MdEditOff/> : <MdEdit/>}</MyButton>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.description}
                </Card.Text>
                <Card.Text>
                    Director:
                    <strong>{movie.director}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    </>
}

export function EditMovies(props) {
    const { movies } = props
    if (!movies) return;
    return (
        <Section title={"Movies"}>
            {movies.map((n,i) =>
                <Movie movie={n} key={i} />)
            }
        </Section>
    );
}
