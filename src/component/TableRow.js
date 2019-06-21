import React, { Component } from 'react'

import axios from 'axios';

class Employees extends Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this)
        this.state = {
            emp_id: '',
            emp_name: '',
            emp_department:'',
            emp_permisson: '',
            emp_array: []
        }
    }
    handleEdit = () => {
        axios.get('/employee/GetEmployeeById/' + this.props.obj.ID)
            .then(response => {
                this.setState({ emp_array: response.data });
                this.props.editfunc(response.data[0].ID,response.data[0].EMPLOYEE_ID, response.data[0].EMPLOYEE_NAME, response.data[0].DEPARTMENT, response.data[0].PERMISSION,)
                // console.log(response.data[0].ID)
            })
            .catch(function (error) {
            })
    }
    handleDelete =()=>{
        axios.delete('/employee/DeleteEmployee/' + this.props.obj.ID)
        .then(response => {
            this.props.delfunc()
        })
        .catch(function (error) {
        })
    }
    render() {
        return (
            <tr className="odd" role="row" >
                <td  className="sorting_1">{this.props.obj.EMPLOYEE_ID}</td>
                <td>{this.props.obj.EMPLOYEE_NAME}</td>
                <td>{this.props.obj.DEPARTMENT}</td>
                <td>{this.props.obj.PERMISSION}</td>
                <td>
                    <button onClick={this.handleEdit} data-toggle="modal" data-target="#edit-employee"  className="btn btn-success btn-block" type="submit"><i className="fa fa-pencil" /> Edit</button>
                </td>
                <td>
                    <button onClick={this.handleEdit} data-toggle="modal" data-target="#delete-employee" className="btn btn-danger btn-block" type="submit"><i className="fa fa-trash" /> Delete</button>
                </td>
            </tr>
        );
    }
}
export default Employees;