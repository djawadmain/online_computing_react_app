import React from "react";

export default function Tongue(props) {
    return <div id="tongue" onClick={props.showResult} className="absolute z-10 top-0 flex flex-col items-center justify-center p-2 -translate-x-1/2 left-1/2 w-12 bg-pink-400 rounded-b-xl h-16 hidden">
        <div className="w-0.5 h-full bg-gray-800/50 rounded"></div>
    </div>
}