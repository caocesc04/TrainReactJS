import * as Types from '../actions/ActionTypes'

const initialState = {
    id: '',
    emp_array: []
    // emp_id: '',
    // emp_name: '',
    // emp_department: '',
    // emp_permission: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_EMPLOYEE:
            return { ...state, emp_id: action.id }

        default:
            return state
    }
}