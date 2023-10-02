import React from "react";
import Tongue from "./TongueAndLip/Tongue";
import Lip from "./TongueAndLip/Lip";

export default function TongueAndLip(props) {
    return <div className="relative">
        {props.tongueAndLipHidden ? <Tongue showResult={props.showResult} /> : null}
        <Lip lipHidden={props.tongueAndLipHidden} />
    </div>
}