import {useEffect, useState} from "react";
import {collection, onSnapshot, query} from "firebase/firestore";
import {firestoreDB} from "../services/firestore";
import {Directors} from "./directors";

export  function DirectorsFromDb() {
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        const q = query(collection(firestoreDB, 'movies'))
        onSnapshot(q, (querySnapshot) => {
            setDirectors(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])

    if (!directors.length) return;

    return <div><Directors directors={directors}></Directors></div>
}