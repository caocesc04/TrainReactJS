import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Employee: '', Password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChangeEmployee = event => {
        this.setState({ Employee: event.target.value });
    }
    handleChangePassword = event => {
        this.setState({ Password: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault()
        // console.log(this.state.Password)
        const infoLogin = {
            EmployeeId: this.state.Employee,
            Password: this.state.Password
        };
        var headers1 = {
            "Content-Type": "application/json" 
        };
        // console.log(infoLogin)
        return axios({
            method: 'POST',
            url: '/employee/EmployeeLogin',
            headers: headers1,
            data: infoLogin
        }).then((json) => {
            console.log(json.data[0].result)
            if (json.data[0].result === "true") {
                this.props.history.push('/main')
            }else{
                alert('Check info again!')
            }
        }).catch(function (e) {
            console.log('err:' + e)
        })
    }


    render() {
        return (
            <div className="bg-primary">
                <div className="unix-login">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="login-content">
                                    <div className="login-logo">
                                        <a href="index.html"><span>E-System</span></a>
                                    </div>
                                    <div className="login-form">
                                        <h4>Login</h4>
                                        <form >
                                            <div className="form-group">
                                                <label>Employee</label>
                                                <input name="EmployeeId" className="form-control" type="text" placeholder="ID Employee"
                                                    onChange={this.handleChangeEmployee} />
                                            </div>
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input required name="Password" className="form-control" type="password" placeholder="Password"
                                                    onChange={this.handleChangePassword} />
                                            </div>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" /> Remember Password
                      </label>
                                                <label className="pull-right">
                                                    <a href="#">Forgotten Password?</a>
                                                </label>
                                            </div>
                                            {/* <Link to='/main'> */}
                                            <button onClick={(e)=>this.handleSubmit(e)} className="btn btn-primary btn-flat m-b-30 m-t-30" type="submit" >Sign in</button>
                                            {/* </Link> */}

                                            <div className="register-link m-t-15 text-center">
                                                <p>Please contacts QE AppTeam for sign up!</p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;