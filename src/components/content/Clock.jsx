import React, { Component, Fragment } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(Date.now())
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({
            time: new Date(Date.now())
        }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="flex flex-col items-center w-fit mx-auto sm:mx-0">
                <div className="dark:bg-slate-700 dark:text-white bg-gray-200 font-mono w-fit px-4 rounded-full text-xl border-t-2 dark:border-black border-gray-400">
                    {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
                </div>
                <div className="dark:bg-slate-700 dark:text-gray-400 bg-gray-200 font-mono w-fit px-4 rounded-full border-b-2 dark:border-b-black border-b-gray-400 relative top-[-7px] text-sm text-gray-700">
                    {this.state.time.getDate()}/{this.state.time.getMonth()}/{this.state.time.getFullYear()}
                </div>
            </div>
        )
    }
}

export default Clock;