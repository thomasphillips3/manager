import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import { employeeUpdate } from '../actions';
import { CardSection, Card, Input, Button } from './common';

class EmployeeCreateForm extends Component {
    render() {
        return (
        <Card>
            <CardSection>
                <Input
                    label="Name"
                    placeholder="Butch"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                />
            </CardSection>

            <CardSection>
                <Input
                    label="Phone"
                    placeholder="555-777-9311"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
            </CardSection>

            <CardSection>
                <Input
                    label="Phone"
                    placeholder="555-777-9311"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                />
            </CardSection>

            <CardSection style={{ flexDirection: 'column' }}>
                <View>
                    <Text style={styles.pickerTextStyle}>Pick a shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </View>
            </CardSection>

            <CardSection>
                <Button>
                    Create
                </Button>
            </CardSection>
        </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    
    return { name, phone, shift };
};

const styles = {
    pickerTextStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    }
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreateForm);