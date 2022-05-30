import {makeAutoObservable} from 'mobx'

export default class InfoState{
    constructor(){
        this._guarantors = [
            {work: "Hospital 14", position: "doctor", income: 500},
            {work: "Hospital 14", position: "doctor", income: 500}
        ]
        this._pledge = [
            {name: "Lorem", price: 1000, estate: false},
            {name: "Lorem", price: 1000, estate: false},
            {name: "Lorem", price: 1000, estate: false},
        ]
        this._fin = {}
        this._income = []
        this._person = {income: 90, feedback: "98559865", work: "doctor", position: "main"}
        this._company = {}
        makeAutoObservable(this)
    }

    setGuarantors(guarantors){
        this._guarantors = guarantors
    }

    get guarantors(){
        return this._guarantors
    }

    setPledge(pledge){
        this._pledge = pledge
    }

    get pledge(){
        return this._pledge
    }

    setFin(fin){
        this._fin = fin
    }

    get fin(){
        return this._fin
    }

    setIncome(income){
        this._income = income
    }

    get income(){
        return this._income
    }

    setPerson(person){
        this._person = person
    }

    get person(){
        return this._person
    }

    setCompany(company){
        this._company = company
    }

    get company(){
        return this._company
    }
}