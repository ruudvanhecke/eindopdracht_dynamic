import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home} from "./pages/home";

import {
    Route, Routes
} from "react-router-dom";
import {MoviesFromDb} from "./pages/moviesFromDb";
import {EditMoviesFromDb} from "./pages/editMoviesFromDb";

function App() {
    return (
        <>
            <Routes>
                {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
                <Route path="/home" element={<Home/>}/>

                <Route path="/" element={<Home/>}/>
                {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
                <Route path="/movies" element={<MoviesFromDb/>}/>

                <Route path="/editMovies" element={<EditMoviesFromDb/>}/>
            </Routes>
        </>

    );
}

export default App;
