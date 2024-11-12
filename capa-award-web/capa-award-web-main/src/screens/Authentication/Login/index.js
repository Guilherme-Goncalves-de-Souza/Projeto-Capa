import React, { useContext, useState } from "react"; 
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


import { 
    FormTitle,
    FormText,
    FormSpacer,
    RegisterForgot,
    ForgotLink,
    RegisterCall
} from './styled' 

import Button from "components/Form/Button";
import Input from 'components/Form/Input'

import ContainerUnauthenticated from "containers/Unauthenticated";
import { CoreContext } from "context/CoreContext";
import { DoLogin } from "services/authentication";
import { exposeStrapiError } from "utils";

export default function Login(){ 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const [ loading, setLoading ] = useState(false)
    const { setUser } = useContext(CoreContext)
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => {  

        if(!formValue('identifier') || !formValue('identifier').length){ 
            if(verbose){ toast.error('Preencha o campo: Email') ;}
            return false; 
        }  

        if(!formValue('password') || !formValue('password').length){ 
            if(verbose){ toast.error('Preencha o campo: Senha') ;}
            return false; 
        }  

        return true
    } 

    const login = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        const result = await DoLogin({ ...form, identifier: form.identifier?.replace(/ /g,'') })  
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completeLogin(result)
        } 
    }

    const completeLogin = (result) => {
        if(result?.user){ setUser(result.user) }
        navigate('dashboard')
    }  
 
    return ( 
        <>  
            <ContainerUnauthenticated> 
                {/* <FormTitle>Bem-vindo de volta!</FormTitle>
                <FormText>Entre com seus dados do cadastro para acessar sua conta</FormText>  */}
                <Input placeholder="Usuário" value={formValue('identifier')} onChange={e => changeForm(e.target.value, 'identifier')} /> 
                <FormSpacer />
                <Input placeholder="Senha" type="password" value={formValue('password')} onChange={e => changeForm(e.target.value, 'password')}  onKeyDown={ev => ev.keyCode === 13 ? login() : null } />   
                <FormSpacer /> 
                <Button primary loading={loading} small onClick={login}>Entrar</Button>
                <RegisterForgot>
                    <ForgotLink onClick={() => navigate('forgot')}>Esqueci a senha</ForgotLink>
                </RegisterForgot> 
                <RegisterForgot lined>
                    <RegisterCall> Ainda não tem conta? </RegisterCall>
                    <Button nospace primary small link onClick={() => navigate('register')}>Criar uma conta</Button> 
                </RegisterForgot> 
            </ContainerUnauthenticated> 
        </>
    );
}