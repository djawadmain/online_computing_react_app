import React from "react";
import Number from "./Number";

export default function NumberInputBox(props) {
    const generate_numbers = [...Array(10).keys()].map((value) => <Number number={value} key={value}/>)

    return <div className="w-[10rem] h-[10rem] text-[6.4rem] hide_scrollbar overflow-y-auto backdrop-blur-sm flex flex-col snap-y items-center bg-gray-100 bg-opacity-[.15] rounded-xl px-4">
        {generate_numbers}
    </div>
}