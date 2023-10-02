import React from "react";

export default function Lip(props) {
    return <>
        {props.lipHidden ? <div id="blur_lip" className="absolute w-full h-full backdrop-blur-sm"></div> : null}
        <span>
            this spa site for generate fib(n) you want
        </span>
    </>
}