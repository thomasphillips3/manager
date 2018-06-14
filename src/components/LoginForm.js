import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text) {

    }
    render() {
        return (
        <Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="user@mail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                />
            </CardSection>
            
            <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                />
            </CardSection>

            <CardSection>
                <Button>
                    Login
                </Button>
            </CardSection>
        </Card>
        );
    }
}

export default LoginForm;
