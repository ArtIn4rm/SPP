import {makeAutoObservable} from 'mobx'

export default class UserState{
    constructor(){
        this._isPerson = false
        this._isCompany = false
        this._isConsultant = false
        this._isInspector = false
        this._isAccountant = false
        this._user = {}
        makeAutoObservable(this)
    }

    setAuth(bool, role){
        switch(role){
            case 'Person': this._isPerson = bool; break;
            case 'Company': this._isCompany = bool; break;
            case 'Consultant': this._isConsultant = bool; break;
            case 'Inspector': this._isInspector = bool; break;
            case 'Accountant': this._isAccountant = bool; break;
            default:  console.error('Invalid role')
        }
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