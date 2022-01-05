import React from "react";

const RenderImage = (props) => {
    return (
        <div className="flex justify-center">
            <img className="shadow-lg rounded max-w-full h-auto align-middle border-2" src={props.imageUrl} width="500" height="500"/>
        </div>
    )
}

export default RenderImage;