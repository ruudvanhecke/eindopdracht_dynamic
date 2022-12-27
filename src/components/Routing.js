import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home";
import {MoviesFromDb} from "../pages/moviesFromDb";
import {DirectorsFromDb} from "../pages/directorsFromDb";

export function Routing () {


    return             <Routes>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/home" element={<Home/>}/>

        <Route path="/" element={<Home/>}/>
        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/movies" element={<MoviesFromDb/>}/>

        <Route path="/directors" element={<DirectorsFromDb/>}/>

    </Routes>
}