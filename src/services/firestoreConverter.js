export const firestoreConverter = {
    toFirestore: undefined,
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id};
    }
}