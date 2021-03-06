import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import {store} from './store/configureStore'
import { Provider } from 'react-redux'

console.log(store.getState());



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
)
