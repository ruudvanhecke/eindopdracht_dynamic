import {useState} from "react";
import {Card} from "react-bootstrap";

export function DirectorsCard({ data, id }){
    const [director, setDirector] = useState(data.director);


    return <>

        <Card.Body>
            <Card.Text><strong>Director:</strong> {director}</Card.Text>
        </Card.Body>

    </>
}
