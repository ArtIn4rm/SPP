import {makeAutoObservable} from 'mobx'

export default class UserState{
    constructor(){
        this._isPerson = false
        this._isCompany = false
        this._isConsultant = false
        this._isInspector = false
        this._isAccountant = false
        this._id = null
        this._path = ''
        this._user = {}
        makeAutoObservable(this)
    }

    setAuth(bool, role){
        switch(role){
            case 'Person': {
                this._isPerson = bool; 
                this._path = '/user/person/'
                break;
            }
            case 'Company': {
                this._isCompany = bool;
                this._path = '/user/company/'
                break;
            }
            case 'Consultant': {
                this._isConsultant = bool;
                this._path = '/user/consultant/'
                break;
            }
            case 'Inspector': {
                this._isInspector = bool;
                this._path = '/user/inspector/'
                break;
            }
            case 'Accountant': {
                this._isAccountant = bool;
                this._path = '/user/accountant/'
                break;
            }
            default:  console.error('Invalid role')
        }
    }

    setId(id){
        this._id = id;
        localStorage.setItem('id', id)
    }

    get id(){
        return this._id;
    }

    setPath(path){
        this._path = path;
    }

    get path(){
        return this._path;
    }

    setUser(user){
        this._user = user;
    }

    get isAuth(){
        return {isPerson: this._isPerson, isCompany: this._isCompany, isConsultant: this._isConsultant, 
            isInspector: this._isInspector, isAccountant: this._isAccountant}
    }

    get user(){
        return this._user
    }
}