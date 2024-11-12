import React, { useState } from "react"; 
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';


import { 
    FormTitle,
    FormText,
    FormSpacer 
} from './styled'
 
import Button from "components/Form/Button";
import Input from 'components/Form/Input'

import ContainerUnauthenticated from "containers/Unauthenticated";
import { DoForgotPassword } from "services/authentication";
import { exposeStrapiError } from "utils";

export default function Forgot(){ 
    const history = useHistory();
    const navigate = to => history.push(`/${ to }`);

    const [ loading, setLoading ] = useState(false) 
    
    const [ form, setForm ] = useState({})
    const formValue = ref => { return form?.[ref] ? form?.[ref] : '' ;}
    const changeForm = ( value, ref ) => { setForm({ ...form, [ref]: value }) ;} 

    const valid = (verbose = false) => {  
              
        if(!formValue('email') || !formValue('email').length){ 
            if(verbose){ toast.error('Preencha o campo: Email') ;}
            return false; 
        }   

        return true
    } 

    const action = async () => {
        if(!valid(true)){ return ;}
        setLoading(true)
        
        const result = await DoForgotPassword({ email:formValue('email')?.replace(/ /g,'') })   
        
        setLoading(false)
        if(result && !exposeStrapiError(result)){
            completNext()
        } 
    }

    const completNext = () => {
        toast.success('Instruções para recuperar senha foram enviadas ao seu email'); 
        navigate('login')
    } 

 
    return ( 
        <>  
            <ContainerUnauthenticated> 
                <FormTitle>Recuperar senha</FormTitle>
                <FormText>Informe o email cadastrado</FormText> 
                <Input placeholder="Email" id={'email'} value={formValue('email')} onChange={e => changeForm(e.target.value, 'email')}  /> 
                <FormSpacer />
                <Button primary small loading={loading} onClick={action} >Prosseguir</Button> 
                {/* <Button primary outline onClick={() => history.goBack()}>Voltar</Button>   */}
            </ContainerUnauthenticated> 
        </>
    );
}