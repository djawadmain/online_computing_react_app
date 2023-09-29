import Result from "./Result";
import React from "react";
import GenerateLoader from "./GenerateLoader";
import NumberInputEyes from "./NumberInputEyes";
import GenerateButton from "./GenerateButton";
import TongueAndLip from "./TongueAndLip";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show_result: false,
            in_generate: false
        };

        this.show_result = this.show_result.bind(this)
    }

    show_result = () => {
        this.setState({
            ...this.state,
            show_result: true
        })
    }

    render() {
        return <div className="flex flex-col gap-4 max-w-full items-center justify-center p-4 rounded-xl border-2 border-gray-200 relative">
            {this.state.show_result ? <Result/> : null}
            {this.state.in_generate ? <GenerateLoader /> : null}
            <NumberInputEyes />
            <GenerateButton />
            <TongueAndLip showResult={this.show_result} />
        </div>
    }
}