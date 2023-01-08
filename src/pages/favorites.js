import {Section} from "../components/Section";
import { MovieCard } from "../components/MovieCard";
import { FavoriteContext } from "../App";

export function Favorites() {
        console.log(FavoriteContext.Consumer.value)
    return (
        <Section title={"My Favorites"}>
            <FavoriteContext.Consumer>
            {value => JSON.parse(value) ? JSON.parse(value).map((n,i) =>
                <MovieCard id={n.id} data={n} key={i} />) : <div> No favorites assigned</div>
            }
            </FavoriteContext.Consumer>

        </Section>
    )
}