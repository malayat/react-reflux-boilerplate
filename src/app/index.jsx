import React from 'react';
import {render} from 'react-dom';

//import css
import css from './styles/style.styl';

//import components
import App from './componentes/App';
import Photo from './componentes/Photo';
import Single from './componentes/Single';

//import react-router
import {Router, Route, IndexRoute} from 'react-router';

//import redux
import { Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Photo}></IndexRoute>
                <Route path="view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('app'));
