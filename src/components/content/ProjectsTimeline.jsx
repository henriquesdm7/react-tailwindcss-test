import { Timeline } from 'flowbite-react'
import React, { Component } from 'react'

export default class ProjectsTimeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: Date(Date.now()).toLocaleString(),
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date(Date.now()).toLocaleString() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>
                            {this.state.time}
                        </Timeline.Time>
                        <Timeline.Title>
                            <span className='text-black'>
                                Portfólio React
                            </span>
                        </Timeline.Title>
                        <Timeline.Body>
                            Portfólio utilizando as tecnologias React, Tailwind.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
            </Timeline>
        )
    }
}
