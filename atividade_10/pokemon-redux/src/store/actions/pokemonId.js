import { NOVO_ID } from '../actions/types'

export function alterarId(novoId) {
    return {
        type: NOVO_ID,
        payload: novoId
    }
}