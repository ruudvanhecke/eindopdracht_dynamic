import {collection } from "firebase/firestore";
import {firestoreDB} from "../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {EditMovies} from "./editMovies";

export  function EditMoviesFromDb() {
    const collectionRef = collection(firestoreDB, "movies");
    const [values] = useCollectionData(collectionRef);
    console.log(values)

    if (!values) return;

    return <div><EditMovies movies={values}></EditMovies></div>
}