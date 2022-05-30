import {$auth, $host} from './index'
import jwt_decode from 'jwt-decode'

export const sendCredit = async (info) => {
    const {data} = await $auth.post('/user/person/types/send', {...info, id: localStorage.getItem('id')})
    return data
}

export const login = async (email, password) => {
    const {data} = await $host.post('/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return {user: jwt_decode(data.token), id: data.id}
}

export const register = async (info) => {
    const {data} = await $host.post('/user/registrate', {info: {...info, role: 'Person'}})
    localStorage.setItem('token', data.token)
    return {user: jwt_decode(data.token), id: data.id}
}

export const check = async () => {
    const {data} = await $auth.get('/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const setPerson = async (info) => {
    const {data} = await $auth.post('/user/person/info/income', {...info, id: localStorage.getItem('id')})
    return data
}

export const fetchPerson = async () => {
    const {data} = await $auth.get('/user/person/info/income', {params: {id: localStorage.getItem('id')}})
    return data
}

export const addPledge = async (info) => {
    const {data} = await $auth.post('/user/person/info/pledge', { ...info, 
        borrowerId: localStorage.getItem('id'), })
    return data
}

export const addGuarantor = async (info) => {
    const {data} = await $auth.post('/user/person/info/guarantor', {...info, id: localStorage.getItem('id')})
    return data
}

export const setCompany = async () => {

}

export const setFinancies = async () => {

}

export const addIncome = async () => {

}