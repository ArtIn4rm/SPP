const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const User_status = sequelize.define('user_status', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Personality = sequelize.define('personality', {
    passport_number: {type: DataTypes.INTEGER, primaryKey: true},
    passport_seria: {type: DataTypes.STRING, primaryKey: true},
    building: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false}
})

const Street = sequelize.define('street', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const City = sequelize.define('city', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Borrower = sequelize.define('borrower', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    balance: {type: DataTypes.NUMBER, allowNull: false},
    payment_account: {type: DataTypes.STRING, allowNull: false}
})

const Company = sequelize.define('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    registration_id: {type: DataTypes.INTEGER, allowNull: false},
    is_small_business: {type: DataTypes.BOOLEAN, allowNull: false}
})

const Financial_reporting = sequelize.define('financial_reporting', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    average_income_per_month: {type: DataTypes.NUMBER, allowNull: false},
    tax_payment_per_year: {type: DataTypes.NUMBER, allowNull: false}
})

const Income = sequelize.define('income', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    start_time_diap: {type: DataTypes.TIME, allowNull: false},
    end_time_diap: {type: DataTypes.TIME, allowNull: false},
    net_proceeds: {type: DataTypes.NUMBER, allowNull: false},
    summary_income: {type: DataTypes.NUMBER, allowNull: false},
    summary_tax_payed: {type: DataTypes.NUMBER, allowNull: false}
})

const Potential_pledge = sequelize.define('potential-pledge', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    total_price: {type: DataTypes.NUMBER, allowNull: false},
    is_estate: {type: DataTypes.BOOLEAN, allowNull: false}
})

const M2M_person_guarantor = sequelize.define('m2m_person_guarantor', {
    person: {type: DataTypes.INTEGER, primaryKey: true},
    guarantor: {type: DataTypes.INTEGER, primaryKey: true},
    amount_of_inv_credits: {type: DataTypes.INTEGER, allowNull: false}    
})

const Guarantor = sequelize.define('guarantor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    working_place: {type: DataTypes.STRING, allowNull: false},
    occupied_position: {type: DataTypes.STRING, allowNull: false},
    income_per_month: {type: DataTypes.NUMBER, allowNull: false}
})

const M2M_credit_guarantor = sequelize.define('m2m_credit_guarantor', {
    guarantor: {type: DataTypes.INTEGER, primaryKey: true},
    credit: {type: DataTypes.INTEGER, primaryKey: true}
})

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    borrower: {type: DataTypes.INTEGER, primaryKey: true},
    sending_time: {type: DataTypes.TIME, allowNull: false},
    message_text: {type: DataTypes.STRING, allowNull: false}
})

const Credit_history = sequelize.define('credit_hisory', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    paid_time: {type: DataTypes.TIME, allowNull: true}
})

const Request = sequelize.define('request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    sending_time: {type: DataTypes.TIME, allowNull: false}
})

const Request_status = sequelize.define('request_status', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})

const Big_company_request = sequelize.define('big_company_request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Company_request = sequelize.define('company_request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    company_reg_id: {type: DataTypes.INTEGER, allowNull: false}
})

const Person = sequelize.define('person', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    accounting_feedback: {type: DataTypes.STRING, allowNull: true},
    working_place: {type: DataTypes.STRING, allowNull: true},
    occupied_position: {type: DataTypes.STRING, allowNull: true},
    income_per_month: {type: DataTypes.NUMBER, allowNull: false},
})

const Credit_request = sequelize.define('credit_request', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Credit = sequelize.define('credit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    aim: {type: DataTypes.STRING, allowNull: true},
    price: {type: DataTypes.NUMBER, allowNull: false},
    months_to_pay: {type: DataTypes.DOUBLE, allowNull: false},
    agreed_proc_per_month: {type: DataTypes.DOUBLE, allowNull: false},
    is_active: {type: DataTypes.BOOLEAN, allowNull: false},
    activation_time: {type: DataTypes.TIME, allowNull: true},
    other_conditions: {type: DataTypes.STRING, allowNull: trueapp}
})

const Overdue_credits = sequelize.define('overdue_credits', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    months_of_overdue: {type: DataTypes.DOUBLE, allowNull: false},
    price_of_overdue: {type: DataTypes.NUMBER, allowNull: false}
})

const Active_credit = sequelize.define('active_credit', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    months_to_pay: {type: DataTypes.DOUBLE, allowNull: false},
    price_to_pay: {type: DataTypes.NUMBER, allowNull: false}
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    proc_per_year_upper: {type: DataTypes.DOUBLE, allowNull: true},
    proc_per_year_lower: {type: DataTypes.TIME, allowNull: false},
    max_price: {type: DataTypes.NUMBER, allowNull: false},
    down_payment_proc: {type: DataTypes.DOUBLE, allowNull: true}
})

const Borrower_level = sequelize.define('borrower_level', {
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
})