import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import LoginForm from './components/LoginForm';
import reducers from './reducers';
import firebase from 'firebase';

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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm>
                </LoginForm>
            </Provider>
        );
    }
}

export default App;
