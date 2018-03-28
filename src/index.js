import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import Calc from "./pages/Calc";
import Info from "./pages/Info";
import {store} from "./redux/store";

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Calc/>
            <Info/>
        </div>
    </Provider>
), document.getElementById('root'));

const name = 'App'

import (`./${name}`).then(comp => {
    const app = comp.sayHello()

})