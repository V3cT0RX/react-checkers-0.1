import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import LoginForm from './components/Forms/Login';
import SignUp from './components/Forms/SignUp';
import MainMenu from './components/MainMenu'; 
import GameBoard from './components/Board/GameBoard';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={LoginForm} />
            <Route path="/login" component={LoginForm}/>
             <Route path="/sign-up" component={SignUp}/>
             <Route path="/main-menu" component={MainMenu}/>
             <Route path="/board" component={GameBoard}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
