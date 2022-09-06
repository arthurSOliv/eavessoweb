import React, { useState } from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import api from '../../services/api';

import Input from '../../components/Input';
import FormAction from '../../components/FormActions';

import logo from '../../assets/images/logoea.png';

const SignIn = () => {
    const validate = Yup.object({
        email: Yup.string().email('Insira um e-mail válido!').required('E-mail é obrigatório!'),
        password: Yup.string().required('Senha é obrigatória!'),
    })

    const submit = (values) => {
        console.log("submit",  values);
    }
    
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col m-2 md:m-10 mt-24 p-2 md:p-10 bg-white lg:w-1/2 md:w-3/4 rounded-3xl items-center justify-center">
                <img className="rounded-lg w-3/4" src={logo} alt="" />

                <p className="text-lg text-black-400 mt-5">Olá, Faça login em sua conta</p>

                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={values => submit(values)}
                >
                    {
                        formik => (
                            <Form className="mt-8 w-full">
                                <Input
                                    labelText="E-mail"
                                    labelFor="email"
                                    name="email"
                                    type="email"
                                    placeholder="example@email.com"
                                />
                                <Input
                                    labelText="Senha"
                                    labelFor="password"
                                    name="password"
                                    type="password"
                                    placeholder="Digite sua senha"
                                />

                                <FormAction text="Login"/>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
    )
};

export default SignIn;
