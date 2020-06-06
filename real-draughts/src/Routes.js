import React from 'react';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import LoginForm from './components/Forms/Login';
import SignUp from './components/Forms/SignUp';
import MainMenu from './components/MainMenu'; 
import Board from './components/Board/Board';
import RenderBoard from './components/Board/Renderboard';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={LoginForm} />
            <Route path="/login" component={LoginForm}/>
             <Route path="/sign-up" component={SignUp}/>
             <Route path="/main-menu" component={MainMenu}/>
             <Route path="/board" component={Board}/>
             <Route path="/renderboard" component={RenderBoard}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
