import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import Router from './router';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDDj3GbTs2rPdwJIsyphVPbUT_AoW9maiw',
            authDomain: 'manager-85494.firebaseapp.com',
            databaseURL: 'https://manager-85494.firebaseio.com',
            projectId: 'manager-85494',
            storageBucket: 'manager-85494.appspot.com',
            messagingSenderId: '794087904533'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
