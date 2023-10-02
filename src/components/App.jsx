import Result from "./Result";
import React from "react";
import GenerateLoader from "./GenerateLoader";
import NumberInputEyes from "./NumberInputEyes";
import GenerateButton from "./GenerateButton";
import TongueAndLip from "./TongueAndLip";

export default class App extends React.Component {

    config_socket = () => {
        this.socket = new WebSocket(
            'ws://127.0.0.1:8000/ws/math_computing/'
        )

        this.socket.onmessage = (e) => {
            if (e.data === 'one_of_your_task_was_revoked'){
                this.setState({
                    ...this.state,
                    number_generated: null
                })
                return
            }

            let message = JSON.parse(e.data);

            if (message.status === 'work_ended') {
                this.setState({
                    ...this.state,
                    is_generate: false,
                    number_generated: message.return_data
                })

            } else if (message.status === 'work_cant_executing') {
                this.setState({
                    ...this.state,
                    is_generate: false,
                    number_generated: null
                })
            }
        }
        this.socket.onclose = (e) => {
            console.log('Socket closed')
            this.config_socket()
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            show_result: false,
            is_generate: false,
            number_generated: null
        };

        this.config_socket();
    }

    show_result = () => {
        this.setState(state => {
            return {
                ...state,
                show_result: true
            }
        })
    }

    handelClick = (event) => {
        this.setState((state) => {
            return {
                ...state,
                is_generate: true
            }
        })
        this.socket.send(JSON.stringify({'option': 'fibonacci', 'value': 12}))
    }

    hideResult = () => {
        this.setState(state => {
            return {
                ...state,
                show_result: false
            }
        })
    }

    render() {
        return <div
            className="flex flex-col gap-4 max-w-full items-center justify-center p-4 rounded-xl border-2 border-gray-200 relative">
            {this.state.show_result ? <Result hideResult={this.hideResult} number_generated={this.state.number_generated}/> : null}
            {this.state.is_generate ? <GenerateLoader/> : null}
            <NumberInputEyes/>
            <GenerateButton handelClick={this.handelClick}/>
            <TongueAndLip showResult={this.show_result} tongueAndLipHidden={!!this.state.number_generated} />
        </div>
    }
}