import {Section} from "../components/Section";
import { MovieCard } from "../components/MovieCard";
import { FavoriteContext } from "../App";

export function Favorites() {

    return (
        <Section title={"My Favorites"}>
            <FavoriteContext.Consumer>
            {value => JSON.parse(value) ? JSON.parse(value).map((n,i) =>
                <MovieCard id={n.id} data={n.data} key={i} />) : <div> No favorites assigned</div>
            }
            </FavoriteContext.Consumer>

        </Section>
    )
}