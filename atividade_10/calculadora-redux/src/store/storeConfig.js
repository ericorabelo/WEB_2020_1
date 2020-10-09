import { createStore, combineReducers } from 'redux'

import pokemonIdReducer from './reducers/pokemonId'
import outroIdReducer from './reducers/outroId'

const reducers = combineReducers(
    {
        pokemonId: pokemonIdReducer,
        outroId: outroIdReducer

        // pokemonId: function (state, action) {
        //     switch (action.type) {
        //         case 'NOVO_ID':
        //             return {
        //                 id: action.payload
        //             }
        //         default:
        //             return {
        //                 id: 1
        //             }
        //     }
        // }

    }//reducers
)//combine reducers

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig