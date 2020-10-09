import { OUTRO_ID } from '../actions/types'

const initialState = {
    outroid: 3
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OUTRO_ID:
            return {
                ...state,
                outroid: action.payload
            }
        default:
            return state
    }
}