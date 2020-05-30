import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import LoginForm from './components/Forms/Login';
import SignUp from './components/Forms/SignUp';
import MainMenu from './components/MainMenu'; 

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={LoginForm} />
            <Route path="/login" component={LoginForm}/>
             <Route path="/sign-up" component={SignUp}/>
             <Route path="/main-menu" component={MainMenu}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
