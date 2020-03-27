import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import NewIncident from './Pages/NewIncident';

//O exact na primeira rota é pra falar que a rota tem que ser exatamente igual para dar match
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>            
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />

                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}