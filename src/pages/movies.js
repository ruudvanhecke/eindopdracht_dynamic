
import {Section} from "../components/Section";
import { MovieCard } from '../components/MovieCard';
import { useState } from "react";
import { MyButton } from "../components/MyButton";
import {MdEdit, MdEditOff} from "react-icons/md";
import { SearchBar } from "../components/SearchBar";

export function Movies(props) {
    const [editMode, setEditMode] = useState(false);
    const [movies, setMovies] = useState(props.movies);

    const initialMovies = [...props.movies];

    function toggleEditMode() {
        setEditMode((prevMode) => {
            return !prevMode;
        })
    }

    function handleSearch(newMovies) {
        setMovies([...newMovies])
    }

    if (!movies) return;
    return (
        <Section title={"Movies"}>
            <div className={"d-flex justify-content-between"}>
            <MyButton variant={"primary"} onClick={() => toggleEditMode()} children={"Edit"}>{editMode ? <MdEditOff/> : <MdEdit/>}</MyButton>
            <SearchBar setMovies={handleSearch} movies={initialMovies} />
            </div>
            {movies.map((n,i) =>
                <MovieCard id={n.id} data={n.data} key={i} enableEditing={editMode} />)
            }
        </Section>
    );
}
