import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { publicRoutes, personRoutes, companyRoutes, consultantRoutes, 
    inspectorRoutes, accountantRoutes} from '../routes';
import { TYPES_ROUTE } from '../utils/consts';
import Context from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Switch>
            {user.isAuth.isPerson && personRoutes.map(({path, Component}) => 
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth.isCompany && companyRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth.isConsultant && consultantRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth.isInspector && inspectorRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {user.isAuth.isAccountant && accountantRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={TYPES_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;