import {firestoreDB} from "../services/firestore";
import {Movies} from "./movies";
import {useState, useEffect} from 'react'
import {collection, query, onSnapshot} from "firebase/firestore"

export  function MoviesFromDb() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const q = query(collection(firestoreDB, 'movies'))
        onSnapshot(q, (querySnapshot) => {
            setMovies(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])

    if (!movies.length) return;

    return <div><Movies movies={movies}></Movies></div>
}