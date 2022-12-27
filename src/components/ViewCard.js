import { Card } from "react-bootstrap";

export function ViewCard(props){


    const {title , description, director} = props;


return <>
                        <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <Card.Text><strong>Director:</strong> {director}</Card.Text>
                            </Card.Body>

</>

}