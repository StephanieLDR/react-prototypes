import React, { Component } from "react";
import axios from "axios";
import Movie from "./movies";

class MoviesContainer extends Component {
    constructor(props) {
        super(props);
    }

componentWillMount() {
        const url = "http://ax.itunes.apple.com/WebObjects/MZStoreS";
        axios.get(url).then(()=> {
        }
});



render(){
        return(
            <div>
                <h2>Movie Container</h2>
                <Movie />
            </div>
        )
    }

};

export default MoviesContainer;

