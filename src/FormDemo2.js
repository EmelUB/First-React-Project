import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap';

export default class FormDemo2 extends Component {

    state = { email: "", password: "", city: "", description: "" }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + "added to db!");
        alertify.success(this.state.city + "added to db!");
        alertify.success(this.state.password + "added to db!");
        alertify.success(this.state.description + "added to db!");
       

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type='email' name='email' id='email' placeholder='Enter Email' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type='password' name='password' id='password' placeholder='Enter Password' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type='select' name='city' id='city' placeholder='Enter City' onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>Osmaniye</option>
                            <option>İstanbul</option>
                            <option>Sivas</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type='textarea' name='description' id='description' placeholder='Enter Description' onChange={this.handleChange}></Input>
                    </FormGroup>

                    <Button type='submit'>Save</Button>

                </form>
            </div>
        )
    }
}

