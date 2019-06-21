import React, { Component } from 'react';
// import ReactBootstrap from 'reactstrap';
// import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import TableRow from '../TableRow';
import ModalBody from 'react-bootstrap/ModalBody';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueState: false,
            Id: '',
            EmployeeId: '',
            EmployeeName: '',
            Department: '',
            Permission: '',
            Employees: []
        };
       
        this.handleSave = this.handleSave.bind(this)
        this.showItem = this.showItem.bind(this)
        // this.resetstate = this.resetstate.bind(this)
        // this.handleChangeEmployeeId = this.handleChangeEmployeeId.bind(this)

    }

    handleChangeEmployeeId = event => {
        this.setState({ EmployeeId: event.target.value });
    }
    handleChangeEmployeeName = event => {
        this.setState({ EmployeeName: event.target.value });
    }
    handleChangeDepartment = event => {
        this.setState({ Department: event.target.value });
    }
    handleChangePermission = event => {
        this.setState({ Permission: event.target.value });
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.state.EmployeeId)
        // if (nextState.EmployeeId != this.state.EmployeeId) {
        //     return true
        // }
        return false
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log(this.state.EmployeeId)
        if (nextState.EmployeeId) {
            // console.log(this.state.EmployeeId)
            axios.get('/employee/GetAllEmployee')
                .then(response => {
                    this.setState({ Employees: response.data });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    componentWillMount() {
        console.log("componentWillMount")
        this.reUpdate()
    }
    componentDidMount() {
        console.log("componentDidMount")
        // axios.get('/employee/GetAllEmployee')
        //     .then((response) => {
        //         const messages = response.data
        //         console.log(messages)
        //         this.setState({ Employees: [...messages] });
        //         // console.log(response.data)
        //     })
        //     .catch(function (error) {
        //     })
    }

    handleSave = (event) => {
        // event.preventDefault();

        // if (this.state.EmployeeId === '' || this.state.EmployeeName === '' || this.state.Department === '' || this.state.Permission === '') {
        //     alert('Nhập vào đe')
        // } else {
        const inforCreateEmployee = {
            EmployeeId: this.state.EmployeeId,
            EmployeeName: this.state.EmployeeName,
            Department: this.state.Department,
            Permission: this.state.Permission
        }
        var header = {
            "Content-Type": "application/json"
        };
        return axios({
            method: "POST",
            url: "/employee/EmployeeCreate",
            headers: header,
            data: inforCreateEmployee
        }).then((res) => {
            console.log(res.data)
            this.setState({ EmployeeId: '', EmployeeName: '', Department: '', Permission: '', })
            this.reUpdate();
        });
        // }
    }
    showItem = (id, employeeid, name, department, permission) => {
        // console.log(id)
        this.setState({
            Id: id,
            EmployeeId: employeeid,
            EmployeeName: name,
            Department: department,
            Permission: permission
        })
    }

    handleSaveEdit = (event) => {
        event.preventDefault();
        const inforEditEmployee = {
            EmployeeId: this.state.EmployeeId,
            EmployeeName: this.state.EmployeeName,
            Department: this.state.Department,
            Permission: this.state.Permission
        }
        var header = {
            "Content-Type": "application/json"
        };
        return axios({
            method: "PUT",
            url: "/employee/UpdateEmployee/" + this.state.Id,
            headers: header,
            data: inforEditEmployee
        }).then((res) => {
            this.resetstate();
            this.reUpdate();
        });
    }
    resetstate = () => {
        this.setState({ Id: '', EmployeeId: '', EmployeeName: '', Department: '', Permission: '', })
    }
    handleDelete = (event) => {
        var header = {
            "Content-Type": "application/json"
        };
        return axios({
            method: "DELETE",
            url: "/employee/DeleteEmployee/" + this.state.Id,
            headers: header
        }).then((res) => {
            this.setState({ EmployeeId: '', EmployeeName: '', Department: '', Permission: '', })
            this.reUpdate();
        });
    }
    reUpdate = async () => {
        console.log("Reupdate");
        axios.get('/employee/GetAllEmployee')
            .then(response => {
                this.setState({ Employees: response.data });
                console.log(this.state.Employees+"state Employees")
                console.log(response.data+"response data")
            })
            .catch(function (error) {
            })
    }

    tableRow() {
         this.reUpdate()
        return this.state.Employees.map((object, i) => {
            return (
                <TableRow delfunc={this.reUpdate} editfunc={(id, employeeid, name, department, permission) => this.showItem(id, employeeid, name, department, permission)} obj={object} key={i} />
            )
        })
    }

    render() {
        console.log(this.state.Employees)
        return (
            <section id="main-content">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="bootstrap-data-table-panel">
                                <div className="table-responsive">

                                    <div className="dataTables_wrapper form-inline dt-bootstrap no-footer" id="bootstrap-data-table-export_wrapper">
                                        <div className="dataTables_length" id="bootstrap-data-table-export_length">

                                            <a onClick={this.resetstate} className="btn btn-lg btn-success btn-block waves-effect waves-light" href="#" data-toggle="modal" data-target="#add-employee"><i className="fa fa-plus" /> Create New</a>
                                        </div>
                                        <div className="dt-buttons"><a tabIndex={0} className="dt-button buttons-copy buttons-html5" aria-controls="bootstrap-data-table-export" href="#"><span>Copy</span></a><a tabIndex={0} className="dt-button buttons-csv buttons-html5" aria-controls="bootstrap-data-table-export" href="#"><span>CSV</span></a><a tabIndex={0} className="dt-button buttons-excel buttons-html5" aria-controls="bootstrap-data-table-export"><span>Excel</span></a><a tabIndex={0} className="dt-button buttons-pdf buttons-html5" aria-controls="bootstrap-data-table-export" href="#"><span>PDF</span></a><a tabIndex={0} className="dt-button buttons-print" aria-controls="bootstrap-data-table-export" href="#"><span>Print</span></a></div><div className="dataTables_filter" id="bootstrap-data-table-export_filter"><label>Search:<input className="form-control input-sm" aria-controls="bootstrap-data-table-export" type="search" placeholder /></label></div><table className="table table-striped table-bordered dataTable no-footer" id="bootstrap-data-table-export" role="grid" aria-describedby="bootstrap-data-table-export_info">
                                            <thead>
                                                <tr role="row">
                                                    <th tabIndex={0} className="sorting_asc" aria-controls="bootstrap-data-table-export" style={{ width: '241px' }} aria-label="Name: activate to sort column descending" aria-sort="ascending" rowSpan={1} colSpan={1}>Employee Id</th>
                                                    <th tabIndex={1} className="sorting" aria-controls="bootstrap-data-table-export" style={{ width: '372px' }} aria-label="Position: activate to sort column ascending" rowSpan={1} colSpan={1}>Employee Name</th>
                                                    <th tabIndex={2} className="sorting" aria-controls="bootstrap-data-table-export" style={{ width: '184px' }} aria-label="Office: activate to sort column ascending" rowSpan={1} colSpan={1}>Department</th>
                                                    <th tabIndex={3} className="sorting" aria-controls="bootstrap-data-table-export" style={{ width: '147px' }} aria-label="Salary: activate to sort column ascending" rowSpan={1} colSpan={1}>Permission</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.tableRow()}
                                            </tbody>
                                        </table>
                                        <div className="dataTables_info" id="bootstrap-data-table-export_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div><div className="dataTables_paginate paging_simple_numbers" id="bootstrap-data-table-export_paginate"><ul className="pagination"><li className="paginate_button previous disabled" id="bootstrap-data-table-export_previous"><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={0}>Previous</a></li><li className="paginate_button active"><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={1}>1</a></li><li className="paginate_button "><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={2}>2</a></li><li className="paginate_button "><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={3}>3</a></li><li className="paginate_button "><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={4}>4</a></li><li className="paginate_button "><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={5}>5</a></li><li className="paginate_button "><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={6}>6</a></li><li className="paginate_button next" id="bootstrap-data-table-export_next"><a tabIndex={0} aria-controls="bootstrap-data-table-export" href="#" data-dt-idx={7}>Next</a></li></ul></div></div>
                                </div>
                            </div>
                        </div>
                        {/* /# card */}
                    </div>
                    {/* /# column */}
                </div>

                {/* /# row */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer">
                            <p>2019-06-12 © . - <a href="#">QE AppTeam</a></p>
                        </div>
                    </div>
                </div>

                {/* Modal add Employees */}
                <div className="modal fade none-border" id="add-employee">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="close" aria-hidden="true" type="button" data-dismiss="modal">×</button>
                                <h4 className="modal-title">
                                    <strong>Add a Employee </strong>
                                </h4>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="control-label">Employee ID</label>
                                            <input name="Employee-ID" onChange={this.handleChangeEmployeeId} value={this.state.EmployeeId} className="form-control form-white" type="text" placeholder="Employee ID" required="required" />
                                            <label className="control-label">Employee Name</label>
                                            <input name="Employee-name" onChange={this.handleChangeEmployeeName} value={this.state.EmployeeName} className="form-control form-white" type="text" placeholder="Employee name" bsPrefix required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label">Choose Department</label>
                                            <select required name="Employee-Department" onChange={this.handleChangeDepartment} value={this.state.Department}
                                                className="form-control form-white" data-placeholder="Choose a Department">
                                                <option value=""></option>
                                                <option value="IE">IE</option>
                                                <option value="QE">QE</option>
                                                <option value="ME">ME</option>
                                                <option value="QC">QC</option>
                                                <option value="PE">PE</option>
                                                <option value="TE">TE</option>
                                            </select>
                                            <label className="control-label">Choose Permission</label>
                                            <select required name="Employee-Permission" onChange={this.handleChangePermission} value={this.state.Permission}
                                                className="form-control form-white" data-placeholder="Choose a Permission">
                                                <option value=""></option>
                                                <option value="Admin">Admin</option>
                                                <option value="Member">Member</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-default waves-effect" type="button" data-dismiss="modal">Close</button>
                                        <button onClick={this.handleSave} className="btn btn-danger waves-effect waves-light save-category" type="submit" data-dismiss="modal">Save</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                {/* modal edit Employee */}

                <div className="modal fade none-border" id="edit-employee">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="close" aria-hidden="true" type="button" data-dismiss="modal">×</button>
                                <h4 className="modal-title">
                                    <strong>Edit Employee </strong>
                                </h4>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label className="control-label">Employee ID</label>
                                            <input name="Employee-ID" onChange={this.handleChangeEmployeeId} value={this.state.EmployeeId} className="form-control form-white" type="text" placeholder="Employee ID" required="required" />
                                            <label className="control-label">Employee Name</label>
                                            <input name="Employee-name" onChange={this.handleChangeEmployeeName} value={this.state.EmployeeName} className="form-control form-white" type="text" placeholder="Employee name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="control-label">Choose Department</label>
                                            <select required name="Employee-Department" onChange={this.handleChangeDepartment} value={this.state.Department}
                                                className="form-control form-white" data-placeholder="Choose a Department">
                                                <option value=""></option>
                                                <option value="IE">IE</option>
                                                <option value="QE">QE</option>
                                                <option value="ME">ME</option>
                                                <option value="QC">QC</option>
                                                <option value="PE">PE</option>
                                                <option value="TE">TE</option>
                                            </select>
                                            <label className="control-label">Choose Permission</label>
                                            <select required name="Employee-Permission" onChange={this.handleChangePermission} value={this.state.Permission}
                                                className="form-control form-white" data-placeholder="Choose a Permission">
                                                <option value=""></option>
                                                <option value="Admin">Admin</option>
                                                <option value="Member">Member</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-default waves-effect" type="button" data-dismiss="modal">Close</button>
                                        <button onClick={this.handleSaveEdit} className="btn btn-danger waves-effect waves-light save-category" type="submit" data-dismiss="modal">Save</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                {/* modal delete Employee */}

                <div className="modal fade none-border" id="delete-employee">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    <strong>Delete Employee </strong>
                                </h4>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="row">

                                        <label className="control-label">Are you sure?</label>

                                    </div>
                                    <div className="modal-footer">
                                        <button className="btn btn-default waves-effect" type="button" data-dismiss="modal">NO</button>
                                        <button onClick={this.handleDelete} className="btn btn-danger waves-effect waves-light save-category" type="submit" data-dismiss="modal">YES</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Employees;