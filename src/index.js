import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import ContextProvider from './containers/Context';



ReactDOM.render(<ContextProvider>
            <App click = {false} />
    </ContextProvider>, 
    document.getElementById("root"));

