import React from "react";
import RenderImage from "./RenderImage";


class Image extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imageUrl: []
        }
    }

    // fires once all components mount
    // returns array in json
    // data[0].url is image url
    componentDidMount(){
        fetch("https://api.thedogapi.com/v1/images/search",{
            headers:{
                'x-api-key': '### REPLACE WITH API KEY ###'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({imageUrl: data[0].url})
        })
    }

    // refreshes the page to load a new image
    refreshPage() {
        window.location.reload(false);
    }

    render(){
        return(
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl py-2">Hello!</h1>
                <p className="py-2">This app made with React.js will display random images of dogs using an API!</p>
                <RenderImage imageUrl={this.state.imageUrl} />
                <button className="bg-blue-500 hover:bg-blue-600 rounded text-white font-bold py-2 px-4 " onClick={this.refreshPage}>See another dog!</button>
            </div>
        );
    }


}

export default Image;