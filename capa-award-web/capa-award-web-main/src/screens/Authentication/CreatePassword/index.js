import React, { useState } from "react"; 
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


import { 
    FormTitle,
    FormText,
    FormSpacer,
    FormSpacerRow
} from './styled' 

import Button from "components/Form/Button";
import Input from 'components/Form/Input'

import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoResetPassword } from "services/authentication";
import { exposeStrapiError } from "utils";

export default function CreatePassword(){ 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const params = new URLSearchParams(window.location.search)
    const [ loading, setLoading ] = useState(false) 
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => { 

        if(!formValue('password') || !formValue('password').length){ 
            if(verbose){ toast.error('Preencha o campo: Nova senha') ;}
            return false; 
        } 
        
        if(!formValue('cpassword') || !formValue('cpassword').length){ 
            if(verbose){ toast.error('Preencha o campo: Confirmar nova senha') ;}
            return false; 
        } 
        
        if( formValue('password') !== formValue('cpassword')){ 
            if(verbose){ toast.error('Nova senha e confirmação da nova senha não são iguais') ;}
            return false; 
        } 

        return true
    }

    const action = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        
        const result =  await DoResetPassword({
            code: params.get('code'),
            password: formValue('password'),
            passwordConfirmation: formValue('cpassword')
        })   
        
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completNext()
        } 
    }

    const completNext = () => {
        toast.success('Senha criada com sucesso'); 
        navigate('login')
    } 
 
    return ( 
        <>  
            <ContainerUnauthenticated> 
                <FormTitle>Recuperar senha</FormTitle>
                <FormText>Digite uma nova senha</FormText> 
                <Input id={'password'} placeholder="Senha" type="password" value={formValue('password')} onChange={e => changeForm(e.target.value, 'password')} />   
                <FormSpacer />
                <Input id={'cpassword'} placeholder="senha novamente" type="password" value={formValue('cpassword')} onChange={e => changeForm(e.target.value, 'cpassword')} />   
                <FormSpacer />
                <FormSpacerRow>
                    <Button primary small outline onClick={() => navigate('login')}>Voltar</Button> 
                    <Button primary small loading={loading} onClick={action}>Prosseguir</Button> 
                </FormSpacerRow>
            </ContainerUnauthenticated> 
        </>
    );
}