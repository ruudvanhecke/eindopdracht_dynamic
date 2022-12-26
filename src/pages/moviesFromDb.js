import {collection } from "firebase/firestore";
import {firestoreDB} from "../services/firestore";
import {Movies} from "./movies";
import {useCollectionData} from "react-firebase-hooks/firestore";

export  function MoviesFromDb() {
    const collectionRef = collection(firestoreDB, "movies");
    const [values] = useCollectionData(collectionRef);
    console.log(values)

    if (!values) return;

    return <div><Movies movies={values}></Movies></div>
}