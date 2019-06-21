import React, { Component } from 'react';
import Routerd from '../../Router/Routerd';
import Sidebar from '../../component/Sidebar/sidebar';

class Main extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className="content-wrap">
                    <div className="main">
                        <Routerd />
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;