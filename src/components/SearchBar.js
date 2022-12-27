import { Form } from "react-bootstrap"

export function SearchBar(props) {

    const movies = [...props.movies]


    const searchTitle = (searchValue) => {
        const newMovies = movies.filter((movie) =>
            movie.data.title.toLowerCase().includes(searchValue.toLowerCase())
        )

        props.setMovies(newMovies)
    }

    const searchDescription = (searchValue) => {
        const newMovies = movies.filter((movie) =>
            movie.data.description.toLowerCase().includes(searchValue.toLowerCase())
        )

        props.setMovies(newMovies)
    }

    const searchDirectory = (searchValue) => {
        const newMovies = movies.filter((movie) =>
            movie.data.director.toLowerCase().includes(searchValue.toLowerCase())
        )

        props.setMovies(newMovies)
    }

    return (
        <div class="form-group row">
        <Form className={"d-flex justify-content-center"} >
              <div class="col-xs-2 m-1">
            <Form.Control onChange={(e) => searchTitle(e.target.value)} placeholder="search movie title"/>
            </div>
            <div class="col-xs-4 m-1">
            <Form.Control  onChange={(e) => searchDescription(e.target.value)} placeholder="search movie description"/>
            </div>
            <div class="col-xs-3 m-1">
            <Form.Control onChange={(e) => searchDirectory(e.target.value)} placeholder="search movie director"/>
            </div>
        </Form>
        </div>
    )

}