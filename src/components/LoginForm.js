import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    
    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    
    render() {
        const { email, password } = this.props;
        return (
        <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="user@mail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={email}
                />
            </CardSection>
            
            <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChanged.bind(this)}
                    value={password}
                />
            </CardSection>

            {this.renderError()}

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
        );
    }
}

const styles = {
    errorTextStyle: { 
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;

    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
