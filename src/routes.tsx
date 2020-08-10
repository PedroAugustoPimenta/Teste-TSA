import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import Listagem from './Pages/Listagem';



function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Cadastro} />
            <Route path="/lista" component={Listagem} />

        </BrowserRouter>
    );
}

export default Routes;