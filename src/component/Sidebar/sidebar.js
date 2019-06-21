import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div className="nano">
                    <div className="nano-content active">
                        <div className="logo">
                            <a href="index.html">
                                {/* <img src="assets/images/logo.png" alt="" /> */}
                                <span>Focus</span>
                            </a>
                        </div>
                        <ul className="d-block">
                            <li><Link to="/main/employees"><i className="ti-bar-chart-alt" /> Employees
                                    <span className="sidebar-collapse-icon ti-angle-down" /></Link></li>
                            <li><Link to="/main/"><i className="ti-bar-chart-alt" />  Chart 1
                                    <span className="sidebar-collapse-icon ti-angle-down" /></Link></li>
                        </ul>
                    </div>
                </div>
            </div>);
    }
}
export default Sidebar;