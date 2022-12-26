import Card from "react-bootstrap/Card";

export function CustomCard(props){

    const {title, description, director} = props;

    return    <>
    <Card style={{width: '18rem'}} className={"m-3 shadow-lg"}>
        <Card.Img variant="top" src={"./images/img.png"}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Card.Text>
                Director:
                <strong>{director}</strong>
            </Card.Text>
        </Card.Body>
    </Card>
        </>
}