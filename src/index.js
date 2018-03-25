import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import Calc from "./pages/Calc";
import {store} from "./redux/store";

ReactDOM.render((
    <Provider store={store}>
        <div>
            <Calc/>
        </div>
    </Provider>
), document.getElementById('root'));
