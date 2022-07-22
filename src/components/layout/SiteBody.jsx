import React, { Component } from 'react'
import MyModal from "./../../components/MyModal";

class SiteBody extends Component {
    render() {
        return (
            <div className="flex-1 p-10">
                <div className="">
                    <MyModal />
                </div>
            </div>
        )
    }
}

export default SiteBody;