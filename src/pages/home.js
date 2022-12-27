import React from "react";
import {Animated} from "react-animated-css";
import { TypeAnimation } from 'react-type-animation';

export function Home() {


    return <>
        <div className="container mt-3">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark shadow-lg">
                <div className="col-md-6 px-0 sh">
                    <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
                        <div>
                            <h1 className="display-4 font-italic">MovieStar</h1>
                        </div>
                    </Animated>
                    <TypeAnimation
                        sequence={['New Movies', 1000, 'Old Movies', 1000, 'Everything in one place!', 1000]}
                        //  Replacing previous Text
                        style={{ fontSize: '2em', color: "yellow"}}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                    <p className="lead my-3">Find all your movies right here! Mark them as favorite and watch them
                        later! You can also make edits to titles, descriptions, actors</p>
                    <a href="/movies" className="btn btn-light my-2 m-1">Browse movies</a>
                    <a href="/directors" className="btn btn-secondary my-2 m-1">Vieuw directors</a>
                </div>
            </div>
        </div>
    </>
}