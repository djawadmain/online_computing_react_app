import React from "react";

export default class Result extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number_generated: null,
        };
    }


    // eslint-disable-next-line react/require-render-return
    render() {
        return <div id="result" className="absolute bg-gray-100 z-20 rounded-lg overflow-y-auto h-full p-2">
            <button id="close_result" className="p-2.5 mb-1.5 bg-gray-700 text-gray-200 rounded-lg" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>

            </button>
            <span className="break-words text-xs" id="result_number">
                {this.state.number_generated}
            </span>
        </div>
    }
}