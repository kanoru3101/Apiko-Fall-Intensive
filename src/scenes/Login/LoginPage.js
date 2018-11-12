import React from 'react';
import { Form, Field } from 'react-final-form';
import FormInput from '../../components/FormInput/FormInput';
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import * as Api from '../../api/Api';
import {FORM_ERROR} from 'final-form';

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

function LoginContainer() {
    
    async function onSubmit(values, form) {
        try {

            const res = await Api.Auth.login(values);

            Api.setToken(res.data.token);

            form.reset();

        }catch (e) {
            return{
                [FORM_ERROR]: 'Wrong email or password',
            };
        }
    }

    return(
    <Grid container justify={"center"}>
        <Form
            onSubmit={onSubmit}
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
    );
};



export default LoginContainer;
