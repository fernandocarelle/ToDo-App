import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home/index';
import Task from '../views/Task/index';
import QrCode from '../views/QrCode/index';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/task' exact component={Task} />
                <Route path='/task/:id' exact component={Task} />
                <Route path='/qrcode' exact component={QrCode} />
            </Switch>
        </BrowserRouter>
    )
}