
import Card from 'react-bootstrap/Card';
import {Section} from "../components/Section";

function Movie(props) {
    const { movie } = props;
    return <>
    <Card style={{width: '18rem'}} className={"m-3"}>
        <Card.Img variant="top" src={"./images/img.png"}/>
        <Card.Body>
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

export function Movies(props) {
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
