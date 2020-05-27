import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import LoginForm from './components/Forms/Login';
import SignUp from './components/Forms/SignUp';
 
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={LoginForm} />
            <Route path="/Login" component={LoginForm}/>
             <Route path="/Sign-Up" component={SignUp}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
