import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";





export function Section(props) {


    const {title, children} = props;


    return <div>
        <h1 className={"text-center m-4"}>{title}</h1>
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    </div>
}