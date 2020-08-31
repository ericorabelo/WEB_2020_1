const DisciplinaModel = require('../models/DisciplinaModel')
const e = require('express')

let disciplinas = [{
    _id: 0,
    nome: 'd. web',
    curso: 'es',
    capacidade: 20
},
{
    _id: 1,
    nome: 'gc',
    curso: 'es',
    capacidade: 15
}, {
    _id: 2,
    nome: 'pds',
    curso: 'es',
    capacidade: 30
}
]

let _id = 3

class DisciplinaService {

    static register(data) {
        let disciplina = new DisciplinaModel(
            _id++,
            data.nome,
            data.curso,
            data.capacidade
        )
        disciplinas.push(disciplina)
        return disciplinas
    }
    static list() {
        return disciplinas;
    }
    // static update(_id, data) {
    //     for (let e of disciplinas) {
    //         if (e._id == _id) {
    //             e.nome = data.nome
    //             e.curso = data.curso
    //             e.capacidade = data.capacidade
    //         }
    //         return e
    //     }
    //     return null
    // }
    static update(_id, data) {
        for (let e of disciplinas) {
            if (e._id == _id) {
                e.nome = data.nome
                e.curso = data.curso
                e.capacidade = data.capacidade
                return e
            }
        }
        return null
    }

    static delete(_id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i]._id == _id) {
                disciplinas.splice(i, 1)
                return true
            }
        }
        return false
    }

    static retrieve(_id) {
        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i]._id == _id) {
                return disciplinas[i]
            }
            return {}
        }
    }
}

module.exports = DisciplinaService