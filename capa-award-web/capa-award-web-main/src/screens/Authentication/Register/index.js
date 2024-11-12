import React, { useContext, useState } from "react"; 
import { useHistory } from 'react-router-dom'; 
import { toast } from 'react-toastify';


import { 
    FormTitle,
    FormText,
    FormSpacer,
    RegisterCall,
    CheckTerms
} from './styled'

import Button from "components/Form/Button";
import Input, { MaskedInput } from 'components/Form/Input';

import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoRegister } from "services/authentication";
import { exposeStrapiError } from "utils"; 
import Check from "components/Form/Check";
import { isEmail } from "utils/validation";
import { CoreContext } from "context/CoreContext";

export default function Register(){ 

    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const { setModal } = useContext(CoreContext)
    const [ loading, setLoading ] = useState(false) 
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => {  

        if( !formValue('terms') ){ 
            if(verbose){ toast.error('Aceite os termos') ;}
            return false; 
        }  

        if(!formValue('name') || !formValue('name').length){ 
            if(verbose){ toast.error('Preencha o campo: Nome') ;}
            return false; 
        }  

        if(!formValue('email') || !formValue('email').length){ 
            if(verbose){ toast.error('Preencha o campo: Email') ;}
            return false; 
        }  

        if(!isEmail(formValue('email') ) ){ 
            if(verbose){ toast.error('Email inválido') ;}
            return false; 
        }  

        if(!formValue('password') || !formValue('password').length){ 
            if(verbose){ toast.error('Preencha o campo: Senha') ;}
            return false; 
        }  
        if(formValue('password') !== formValue('cpassword')){ 
            if(verbose){ toast.error('Senha e confirmação devem ser iguais') ;}
            return false; 
        }  

        return true
    } 

    const action = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        
        const result = await DoRegister({
            ...form, 
            username: form.email?.replace(/ /g,''),
            email: form.email?.replace(/ /g,''),
            phone: "5511",
            confirmed:true,
            blocked:false
        })  
        
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completeLogin()
        } 
    }

    const completeLogin = () => {
        toast.success('Conta criada com sucesso'); 
        navigate('login')
    } 

 
    return ( 
        <>  
            <ContainerUnauthenticated> 
                <FormTitle>Cadastro</FormTitle>
                <FormText>Preencha os dados solicitados</FormText> 
                <Input placeholder="Nome" id={'name'} value={formValue('name')} onChange={e => changeForm(e.target.value, 'name')} /> 
                <FormSpacer />
                <Input placeholder="Email" id={'email'} value={formValue('email')} onChange={e => changeForm(e.target.value, 'email')} /> 
                <FormSpacer />
                {/* <MaskedInput mask={"(99) 99999-9999"} placeholder="Telefone" id={'phone'} value={formValue('phone')} onChange={e => changeForm(e.target.value, 'phone')} /> 
                <FormSpacer /> */}
                <Input placeholder="Senha" id={'password'} type="password" value={formValue('password')} onChange={e => changeForm(e.target.value, 'password')}  />    
                <FormSpacer />
                <Input placeholder="Repita a Senha" id={'cpassword'} type="password" value={formValue('cpassword')} onChange={e => changeForm(e.target.value, 'cpassword')}  />    
                <FormSpacer /> 
                <Check label="Li e estou de acordo com" value={formValue('terms')} onChange={e => changeForm(e, 'terms')}  /> 
                    <CheckTerms> os <a onClick={ () => setModal({ type:"terms"}) }>Termos de uso</a> e <a onClick={ () => setModal({ type:"privacity-policy"}) }>políticas de privacidade</a> </CheckTerms>
                <FormSpacer /> 
                <Button primary small loading={loading} onClick={action}>Criar conta</Button> 
                {/* <RegisterCall> Já possui uma conta? </RegisterCall>
                <Button primary outline onClick={() => navigate('login')}>Faça o login</Button>  */}
            </ContainerUnauthenticated> 
        </>
    );
}