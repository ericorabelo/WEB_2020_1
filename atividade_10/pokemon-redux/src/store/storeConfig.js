import { createStore, combineReducers } from 'redux'

import pokemonIdReducer from './reducers/pokemonId'

const reducers = combineReducers(
    {
        pokemonId: pokemonIdReducer
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