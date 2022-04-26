import {USER_ROUTE, PERSON_ROUTE, COMPANY_ROUTE, TYPES_ROUTE, CONSULTANT_ROUTE, CONS_VIPREQ_ROUTE,
    CONS_COMREQ_ROUTE, CONS_CREQ_ROUTE, INSPECTOR_ROUTE, ACC_AREQ_ROUTE, ACC_OVERDUE_ROUTE, 
    ACCOUNTANT_ROUTE} from '../src/utils/consts'
import Info from '../src/pages/borrowers/Info'
import Mail from '../src/pages/borrowers/Mail'
import Notics from '../src/pages/employee/Notics'
import RequestInfo from '../src/pages/employee/RequestInfo'
import ActiveRequests from '../src/pages/employee/accountant/ActiveRequests'
import Overdue from '../src/pages/employee/accountant/Overdue'
import CompanyRequests from '../src/pages/employee/consultant/CompanyRequests'
import CreditRequests from '../src/pages/employee/consultant/CreditRequests'
import VipRequests from '../src/pages/employee/consultant/VipRequests'
import PotentialRequests from '../src/pages/employee/inspector/PotentialRequests'
import Types from '../src/pages/Types'
import Auth from '../src/pages/Auth'

export const publicRoutes = [
    {
        path: USER_ROUTE + '/registrate',
        Component: Auth
    },
    {
        path: USER_ROUTE + '/login',
        Component: Auth
    },
    {
        path: USER_ROUTE + '/auth',
        Component: Auth
    },
    {
        path: TYPES_ROUTE,
        Component: Types
    },
    {
        path: TYPES_ROUTE + '/:id',
        Component: Types
    },
    {
        path: TYPES_ROUTE + '/send',
        Component: Types
    }
]

export const personRoutes = [
    {
        path: PERSON_ROUTE + '/mail',
        Component: Mail
    },
    {
        path: PERSON_ROUTE + '/mail/:messageid',
        Component: Mail
    },
    {
        path: PERSON_ROUTE + '/info/pledge',
        Component: Info
    },
    {
        path: PERSON_ROUTE + '/info/guarantor',
        Component: Info
    },
    {
        path: PERSON_ROUTE + '/info/income',
        Component: Info
    },
    {
        path: PERSON_ROUTE + TYPES_ROUTE,
        Component: Types
    },
    {
        path: PERSON_ROUTE + TYPES_ROUTE  + '/:id',
        Component: Types
    },
    {
        path: PERSON_ROUTE + TYPES_ROUTE + '/send',
        Component: Types
    }
]

export const companyRoutes = [
    {
        path: COMPANY_ROUTE + '/mail',
        Component: Mail
    },
    {
        path: COMPANY_ROUTE + '/mail/:messageid',
        Component: Mail
    },
    {
        path: COMPANY_ROUTE + '/info/sendBCR',
        Component: Info
    },
    {
        path: COMPANY_ROUTE + '/info/financies',
        Component: Info
    },
    {
        path: COMPANY_ROUTE + '/info/taxes',
        Component: Info
    },
    {
        path: COMPANY_ROUTE + '/info/pledge',
        Component: Info
    },
    {
        path: COMPANY_ROUTE + TYPES_ROUTE,
        Component: Types
    },
    {
        path: COMPANY_ROUTE + TYPES_ROUTE + '/:id',
        Component: Types
    },
    {
        path: COMPANY_ROUTE + TYPES_ROUTE  + '/send',
        Component: Types
    },
]

export const consultantRoutes = [
    {
        path: CONSULTANT_ROUTE + '/mail/:borrowerid',
        Component: Notics
    },
    {
        path: CONS_VIPREQ_ROUTE + '/next',
        Component: VipRequests
    },
    {
        path: CONS_VIPREQ_ROUTE + '/prev',
        Component: VipRequests
    },
    {
        path: CONS_VIPREQ_ROUTE + '/:id',
        Component: RequestInfo
    },
    {
        path: CONS_VIPREQ_ROUTE + '/:id/check',
        Component: RequestInfo
    },
    {
        path: CONS_VIPREQ_ROUTE + '/:id/answer',
        Component: RequestInfo
    },
    {
        path: CONS_COMREQ_ROUTE + '/next',
        Component: CompanyRequests
    },
    {
        path: CONS_COMREQ_ROUTE + '/prev',
        Component: CompanyRequests
    },
    {
        path: CONS_COMREQ_ROUTE + '/:id',
        Component: RequestInfo
    },
    {
        path: CONS_COMREQ_ROUTE + '/:id/check',
        Component: RequestInfo
    },
    {
        path: CONS_COMREQ_ROUTE + '/:id/answer',
        Component: RequestInfo
    },
    {
        path: CONS_CREQ_ROUTE + '/next',
        Component: CreditRequests
    },
    {
        path: CONS_CREQ_ROUTE + '/prev',
        Component: CreditRequests
    },
    {
        path: CONS_CREQ_ROUTE + '/:id',
        Component: RequestInfo
    },
    {
        path: CONS_CREQ_ROUTE + '/:id/answer',
        Component: RequestInfo
    },
]

export const inspectorRoutes = [
    {
        path: INSPECTOR_ROUTE + '/next',
        Component: PotentialRequests
    },
    {
        path: INSPECTOR_ROUTE + '/prev',
        Component: PotentialRequests
    },
    {
        path: INSPECTOR_ROUTE + '/:id',
        Component: RequestInfo
    },
    {
        path: INSPECTOR_ROUTE + '/:id/history',
        Component: RequestInfo
    },
    {
        path: INSPECTOR_ROUTE + '/:id/income',
        Component: RequestInfo
    },
    {
        path: INSPECTOR_ROUTE + '/:id/income/check',
        Component: RequestInfo
    },
    {
        path: INSPECTOR_ROUTE + '/:id/answer',
        Component: RequestInfo
    },
]

export const accountantRoutes = [
    {
        path: ACCOUNTANT_ROUTE + '/report',
        Component: ActiveRequests
    },
    {
        path: ACC_AREQ_ROUTE + '/next',
        Component: ActiveRequests
    },
    {
        path: ACC_AREQ_ROUTE + '/prev',
        Component: ActiveRequests
    },
    {
        path: ACC_AREQ_ROUTE + '/:id',
        Component: RequestInfo
    },
    {
        path: ACC_AREQ_ROUTE + '/:id/activate',
        Component: RequestInfo
    },
    {
        path: ACC_OVERDUE_ROUTE + '/next',
        Component: Overdue
    },
    {
        path: ACC_OVERDUE_ROUTE + '/prev',
        Component: Overdue
    },
    {
        path: ACC_OVERDUE_ROUTE + '/:id',
        Component: RequestInfo
    },
    {
        path: ACC_OVERDUE_ROUTE + '/:id/:borrowerid',
        Component: RequestInfo
    },
]