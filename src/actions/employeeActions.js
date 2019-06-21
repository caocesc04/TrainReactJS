import * as Types from './ActionTypes'

export const editEmployee = (id) => {
    const action = {
        types: Types.EDIT_EMPLOYEE,
        id
    }
    return action
}
export const showEmployee = (id) => {
    const action = {
        types: Types.SHOW_EMPLOYEE,
        id
    }
    return action
}