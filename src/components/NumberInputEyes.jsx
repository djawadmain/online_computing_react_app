import React from "react";
import NumberInputBox from "./NumberInputSlider/NumberInputBox";

export default function NumberInputEyes(props) {
    return <div className="flex flex-row gap-4 max-w-full">
        <NumberInputBox />
        <NumberInputBox />
    </div>
}