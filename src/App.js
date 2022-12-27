import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Routing} from "./components/Routing";
import  React  from "react";


export const FavoriteContext = React.createContext([])



function App() {
    return (
        <>
        <FavoriteContext.Provider value={localStorage.getItem('favoriteMovies')}>
            <Routing/>
        </FavoriteContext.Provider>
        </>

    );
}

export default App;
