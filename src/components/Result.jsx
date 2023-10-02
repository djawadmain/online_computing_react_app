import React from "react";
import Cross from "./SvgComponents/Cross";

export default class Result extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }


    // eslint-disable-next-line react/require-render-return
    render() {
        return <div id="result" className="absolute bg-gray-100 z-20 rounded-lg overflow-y-auto h-full p-2">
            <button onClick={() => {this.props.hideResult()}} id="close_result" className="p-2.5 mb-1.5 bg-gray-700 text-gray-200 rounded-lg" type="button">
                <Cross/>
            </button>
            <span className="break-words text-xs" id="result_number">
                {this.props.number_generated}
            </span>
        </div>
    }
}