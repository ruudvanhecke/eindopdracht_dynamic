import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";

export function Section(props) {


    const {title, children} = props;


    return <div>
        <h2 className={"text-center"}>{title}</h2>
        <Container>
            <Row>

                {children}
            </Row>

        </Container>
    </div>
}