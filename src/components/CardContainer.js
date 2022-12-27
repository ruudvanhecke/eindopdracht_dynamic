import { Card } from "react-bootstrap";

export function CardContainer(props){

    const { url } = props;

    return  <Card.Img variant="top" src={url} />


}