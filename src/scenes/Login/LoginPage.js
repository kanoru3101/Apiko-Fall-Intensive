import React from 'react';
import { Form, Field } from 'react-final-form';
import FormInput from '../../components/FormInput/FormInput';
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import * as Api from '../../api/Api';
import {FORM_ERROR} from 'final-form';
import { connect } from 'react-redux';
import * as appOperations from "../../modules/app/appOperations";
import * as productsOperations from "../../modules/products/productsOperations";
import * as cartActions from "../../modules/cart/cartActions";
import Switch from '@material-ui/core/Switch';

function validate(values) {

    const errors = {};
    if (!values.email || values.email.trim().length < 0 || !values.email.includes("@")
    ){
        errors.email = 'this field is required';
    }

    if (!values.password || values.password.trim().length < 8) {
        errors.password = 'Password should be 8 symbols length';
    }

    return errors;
}

function registerValidate(values) {
    const errors = {};
    if (!values.email || values.email.trim().length < 0 || !values.email.includes("@")
    ){
        errors.email = 'this field is required';
    }

    if (!values.password || values.password.trim().length < 8) {
        errors.password = 'Password should be 8 symbols length';
    }
    if (!values.firstName || values.firstName.trim().length < 0){
        errors.firstName = 'Must by Name'
    }

    if (!values.lastName || values.lastName.trim().length < 0){
        errors.lastName = 'Must by Surname'
    }

    if (values.password !== values.repeatPassword){
        errors.password = 'Different password'
    }
    return errors;
}



class LoginContainer extends React.Component {
    state = {
        chekedRegister: false,
    };
    
    onSubmit = async (values, form) => {
        try {

            const res = await Api.Auth.login(values);

            //Api.setToken(res.data.token);
            this.props.setToken(res.data.token, res.data.user);


            form.reset();

        }catch (e) {
            console.log(e);
            return{
                [FORM_ERROR]: 'Wrong email or password',
            };
        }




    };

    onSubmitRegister = async (values, form) => {
        try {

            delete values.repeatPassword;


            const res = await Api.Auth.register(values);
            Api.setToken(res.data.token);



            form.reset();
        }catch (e) {
            return{
                [FORM_ERROR]: 'Unable to register',
            };
        }

    };

    renderLoginForm = () => (
        <Grid container justify={"center"}>
            <Grid item xs={6}>
                <h2>Sing in</h2>
                <Form
                    onSubmit={this.onSubmit}
                    validate={validate}
                    render={({ handleSubmit, submitError}) => (
                        <Grid item xs={12}>
                            <Field
                                name="email">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>

                            <Button mini onClick={handleSubmit}>Login</Button>
                            {submitError && <div>{submitError}</div>}
                        </Grid>
                    )}
                />
            </Grid>
        </Grid>
    );

    renderRegisterForm = () => (
        <Grid container justify={"center"}>
            <Grid item xs={6}>
                <h2>Register</h2>
                <Form
                    onSubmit={this.onSubmitRegister}
                    validate={registerValidate}
                    render={({ handleSubmit, submitError}) => (
                        <Grid item xs={12}>
                            <Field name="firstName">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>
                            <Field name="lastName">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>
                            <Field
                                name="email">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>
                            <Field name="repeatPassword">
                                {({ input, meta }) => (
                                    <FormInput {...input} meta={meta}/>
                                )}
                            </Field>

                            <Button mini onClick={handleSubmit}>Register</Button>
                            {submitError && <div>{submitError}</div>}
                        </Grid>
                    )}
                />
            </Grid>
        </Grid>
    );


    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render(){
        return(
            <Grid container justify={"center"}>
                <Grid item xs={12}>
                    <Grid container justify={"center"}>
                        <label>Login</label>
                        <Switch
                            checked={this.state.chekedRegister}
                            onChange={this.handleChange('chekedRegister')}
                            value="checkedB"
                            color="primary"
                        />
                        <label>Register</label>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    {this.state.chekedRegister? this.renderRegisterForm(): this.renderLoginForm()}
                </Grid>
            </Grid>
        );
    };

};

const mapStateToProps = (state) => ({
    token: state.app.token,

});

const mapStateToDispatch = {
    setToken: appOperations.setToken,
    some: console.log("!!!!!!!!"),
};

export default connect(mapStateToProps, mapStateToDispatch)(LoginContainer);
