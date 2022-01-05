import React from "react";


class Button extends React.Component{
    render(){
        const clicked = () => {
            alert("Button Pressed!");
        }
        return <button onClick={clicked}>Click me!</button>;
    }
}

export default Button;