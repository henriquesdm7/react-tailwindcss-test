import React, { Component } from 'react'
import ProjectsTimeline from '../content/ProjectsTimeline';
import MyModal from "./../../components/MyModal";

class SiteBody extends Component {
    render() {
        return (
            <div className="flex-1 p-10">
                <div className="">
                    <ProjectsTimeline />
                    <MyModal />
                </div>
            </div>
        )
    }
}

export default SiteBody;