import React, { useState } from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import Input from '../../components/Input';
import FormAction from '../../components/FormActions';

import logo from '../../assets/images/logoea.png';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div className="flex flex-col w-full h-full items-center justify-center">
            <div className="flex flex-col m-2 md:m-10 mt-24 p-2 md:p-10 bg-white md:w-1/4 sm:w-full rounded-3xl items-center justify-center">
                <img className="rounded-lg w-3/4" src={logo} alt="" />

                <p className="text-lg text-black-400 mt-5">Olá, Faça login em sua conta</p>

                <form className="mt-8 w-full">
                    <Input
                        handleChange={e => setEmail(e.target.value)}
                        value={email}
                        labelText="E-mail"
                        labelFor="email"
                        id="email"
                        name="email"
                        type="email"
                        isRequired={true}
                        placeholder="example@email.com"
                    />
                    <Input
                        handleChange={e => setPassword(e.target.value)}
                        value={password}
                        labelText="Senha"
                        labelFor="password"
                        id="password"
                        name="password"
                        type="password"
                        isRequired={true}
                        placeholder="Digite sua senha"
                    />

                    <FormAction handleSubmit={e => console.log(e)} text="Login"/>
                </form>
            </div>
        </div>
    )
};

export default SignIn;
