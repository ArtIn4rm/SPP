import {makeAutoObservable} from 'mobx'

export default class RequestState{
    constructor(){
        this._creditRequests = [

        ]
        this._companyRequests = [

        ]
        this._vipRequests = [

        ]
        this._potentialRequests = [

        ]
        this._activeRequests = [

        ]
        this._overdue = [

        ]
        makeAutoObservable(this)
    }

    setCreditRequests(creditRequests){
        this._creditRequests = creditRequests
    }

    setCompanyRequests(companyRequests){
        this._companyRequests = companyRequests
    }

    setVipRequests(vipRequests){
        this._vipRequests = vipRequests
    }

    setPotentialRequests(potentialRequests){
        this._potentialRequests = potentialRequests
    }

    setActiveRequests(activeRequests){
        this._activeRequests = activeRequests
    }

    setOverdue(overdue){
        this._overdue = overdue
    }

    get creditRequests(){
        return this._creditRequests
    }

    get companyRequests(){
        return this._companyRequests
    }

    get vipRequests(){
        return this.vipRequests
    }

    get potentialRequests(){
        return this._potentialRequests
    }

    get activeRequests(){
        return this._activeRequests
    }

    get overdue(){
        return this._overdue
    }
}
