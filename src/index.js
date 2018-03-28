import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import Calc from "./pages/Calc";
import {store} from "./redux/store";
import Form from "./pages/Form";

ReactDOM.render((
    <Provider store={store}>
        <div>
            {/* <Calc/> */}
            <Form/>
        </div>
    </Provider>
), document.getElementById('root'));
