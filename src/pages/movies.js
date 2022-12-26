
import {Section} from "../components/Section";
import { MovieCard } from '../components/MovieCard';

export function Movies(props) {
    const { movies } = props

    if (!movies) return;
    return (
        <Section title={"Movies"}>
            {movies.map((n,i) =>
                <MovieCard id={n.id} data={n.data} key={i} />)
            }
        </Section>
    );
}
