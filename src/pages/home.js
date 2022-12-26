import React from "react";
import {Animated} from "react-animated-css";

export function Home(){


    return <>
        <div className="container mt-3">
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">MovieStar</h1>
                    <p className="lead my-3">Find all your movies right here! Mark them as favorite and watch them later! You can also make edits to titles, descriptions, actors</p>
                    <a href="google" className="btn btn-light my-2 m-1">Browse movies</a>
                    <a href="google" className="btn btn-secondary my-2 m-1">Edit movies</a>
                </div>
            </div>
    </div>
        </>
}