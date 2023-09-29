import React from "react";

export default function GenerateLoader(props) {
    return <div id="generate_loader" className="absolute left-1/2 -translate-x-1/2 -top-12 animate-pulse hidden">
        <div className="animate_rotate_full_y">
            <span className="text-[10rem]">🧠</span>
        </div>
    </div>
}
