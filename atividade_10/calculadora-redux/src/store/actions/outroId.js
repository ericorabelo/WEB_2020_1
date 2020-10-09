import { OUTRO_ID } from '../actions/types'

export function alterarOutroId(outroId) {
    return {
        type: OUTRO_ID,
        payload: outroId
    }
}
