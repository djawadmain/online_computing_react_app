import React from "react";
import Tongue from "./TongueAndLip/Tongue";
import Lip from "./TongueAndLip/Lip";

export default function TongueAndLip(props) {
    return <div className="relative">
        <Tongue showResult={props.showResult} />
        <Lip />
    </div>
}