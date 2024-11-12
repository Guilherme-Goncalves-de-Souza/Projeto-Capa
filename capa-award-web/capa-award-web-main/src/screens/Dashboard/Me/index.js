import React, { useContext, useEffect, useState } from "react";  

import {  
    DashboardAnimation,
    DashboardTitle,
    DashboardText,
    DashboardInput,
    DashboardButton,
    DarboardUserImage,
    DarboardUserImageAction,
    DarboardUserImageActionIcon
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import { CoreContext } from "context/CoreContext";
import moment from "moment";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { parseStrapiImage } from "utils";
import UploadFile from "components/Form/UploadFile";
import { ReadMe, RemoveMe, UpdateMe } from "services/me";
import { toast } from 'react-toastify';
import { DoLogout } from "services/authentication";
import { useHistory } from "react-router-dom";
import { Load } from "ui/styled";

export default function DashboardMe(){  
    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { user, setUser } = useContext(CoreContext)
   
    const [preview, setPreview] = useState(user?.image?.url ? parseStrapiImage(user?.image?.url) : null)
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(false)

    const exit = async () => {  
        await DoLogout() 
        navigate('login');
    }  

    const takePic = async (result) => { 
        setFetching(true)  
        console.log(result)
        if(result?.id){
            await UpdateMe({ image: result.id })
            setPreview( parseStrapiImage(result?.url) )
        } 
        setFetching(false) 
    }

    const init = async () => {
        setLoading(true)
        const result = await ReadMe()
        if(result?.id){
            setUser(result)
            if(result?.image?.url){ setPreview(parseStrapiImage(result?.image?.url)); }
        }
        setLoading(false)
    }

    const removeAccount = async () => {
        setLoading(true)
        await RemoveMe();
        toast.error('Conta excluida com sucesso')
        exit();
        setLoading(false)
    }

    useEffect(() => {
        init()
    },[])

    return ( 
        <>
            <ContainerAuthenticated> 
                <Row>
                    <Col></Col>
                    <Col sm={12} md={4}>
                        <DarboardUserImage image={preview ? preview : '/images/no-user.png'}>
                            <UploadFile onChange={takePic} onPreview={setPreview}>
                                { fetching ? <Load /> : null }
                                <DarboardUserImageAction>
                                    <DarboardUserImageActionIcon />
                                </DarboardUserImageAction>
                            </UploadFile>
                        </DarboardUserImage>
                        <DashboardInput>
                            <Input placeholder="Nome" value={user.name} onChange={() => null} />
                        </DashboardInput>
                        <DashboardInput>
                            <Input placeholder="Email" value={user.email} onChange={() => null} />
                        </DashboardInput>
                        <DashboardText centred>
                            Usuário desde { moment(user.created_at).format('L') }
                        </DashboardText> 
                        <DashboardButton onClick={removeAccount}>
                            <Button loading={loading} secondary>Excluir Conta</Button>
                        </DashboardButton>
                    </Col>
                    <Col></Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}