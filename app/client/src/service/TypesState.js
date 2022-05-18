import {makeAutoObservable} from 'mobx'

export default class TypesState{
    constructor(){
        this._types = [
            {id: 1, name: 'Single loan', borrowerLevel: 'Guest', description: 
            'one-time loan - choice of amount and repayment period (given for no more than a year for renting premises and purchased equipment)',
            procentPerYearUpper: 0.2, procentPerYearLower: 0.05, maxPrice: 100000, downPaymentProc: 0, img: 'single_loan.png'},

            {id: 2, name: 'Mortgage', borrowerLevel: 'Person', description: 
            'mortgage - choice of term, amount and purpose of lending',
            procentPerYearUpper: 0.3, procentPerYearLower: 0.1, maxPrice: 100000, downPaymentProc: 0.05, img: 'mortgage.png'},

            {id: 3, name: 'Commercial mortgage', borrowerLevel: 'Company', description: 
            'loan for the purchase of real estate, until the full settlement of the object is pledged to the bank (up to 25 years)',
            procentPerYearUpper: 0.3, procentPerYearLower: 0.1, maxPrice: 10000000, downPaymentProc: 0.3, img: 'commertial_mortgage.png'},

            {id: 4, name: 'Overdraft', borrowerLevel: 'Company', description: 
            'credit line with the possibility of spending funds in excess of the account balance in the amount of up to 20-40% of the monthly turnover (if there is a current account)',
            procentPerYearUpper: 0.2, procentPerYearLower: 0.05, maxPrice: 100000, downPaymentProc: 0, img: 'overdraft.png'},

            {id: 5, name: 'Credit line', borrowerLevel: 'Company', description: 
            'gradual repayment, a package of documents is submitted once',
            procentPerYearUpper: 0.3, procentPerYearLower: 0.01, maxPrice: 1000, downPaymentProc: 0, img: 'credit_line.png'},

            {id: 6, name: 'Cash loan', borrowerLevel: 'Company', description: 
            'cash loan - choice of loan amount and repayment time',
            procentPerYearUpper: 0.3, procentPerYearLower: 0.1, maxPrice: 1000, downPaymentProc: 0, img: 'cash_loan.png'},

            {id: 7, name: 'Investment Loan', borrowerLevel: 'Company', description: 
            'loan for the implementation of large-scale plans, up to 30% down payment',
            procentPerYearUpper: 0.2, procentPerYearLower: 0.05, maxPrice: 1000000, downPaymentProc: 0.1, img: 'investment_loan.png'}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    get types(){
        return this._types
    }
}