import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Chart1 from '../component/chart/chart1';
import Employees from '../component/Employees/Employees';


class Routerd extends Component {
    render() {
        return (
            <Switch>
                <Route path='/main/' exact component={Chart1} />
                <Route path='/main/employees' component={Employees} />
            </Switch>
        );
    }
}
export default Routerd;