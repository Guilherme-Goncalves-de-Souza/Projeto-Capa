import React, { useState } from "react";  

import {  
    DashboardAnimation,
    DashboardTitle,
    DashboardText,
    SearchContainer,

    EdictWrapper,
    EdictItem,
    EdictItemTitle,
    EdictItemSubtitle,
    EdictItemContentImage,
    EdictItemImage,
    EdictItemDescription,
    EdictItemDate,

    FilterIcon,
    FilterButton,

    FullPage,
    ActionsContainer,
    ContentTitle,
    ContentText,
    ActionsEnd,
    ActionsContainerEnd,


    ComContent,
    ComContentHeader,
    ComContentHeaderClose,
    ComContentBody,
    ComContentBodyDate,
    ComContentChat,
    ComContentChatBalloon,
    ComContentChatBalloonTitle,
    ComContentChatBalloonText,
    ComContentChatBalloonDate,
    ComContentChatForm,
    ComContentChatFormButton,
    ComContentChatFormButtonIcon,


    ContentAcessor,
    ContentAcessorHeader,
    ContentAcessorHeaderIcon,
    ContentAcessorHeaderItem
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import { Load, LoadCenter } from "ui/styled";
import useController from "./controller";
import { parseStrapiImage } from "utils";
import moment from "moment/moment";

export default function DashboardEdictShow(){  

    const history = useHistory(); 
    const { loading, register, chats, sentMessage, notifyAll } = useController()
    
    const [message, setMessage] = useState("")

    const sent = () => {
        sentMessage(message)
        setMessage("")
        notifyAll()
    }

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        {
                            loading ? 
                            <LoadCenter>
                                <Load /> 
                            </LoadCenter>
                                :
                            <FullPage>
                                <ActionsEnd>
                                    {/* 
                                        <ActionsContainerEnd>
                                            <Button primary nospace onClick={() => history.goBack()}>Documentos</Button>
                                        </ActionsContainerEnd> 
                                    */}
                                    { 
                                        register?.file?.url ? 
                                            <ActionsContainerEnd big>
                                                <Button primary nospace onClick={() => window.open( parseStrapiImage(register?.file?.url) ,'download')}>Fazer download desta versão</Button>
                                            </ActionsContainerEnd> 
                                        : null 
                                    }
                                    {/* 
                                        <ActionsContainerEnd big>
                                            <Button primary nospace onClick={() => history.goBack()}>Fazer upload de nova versão</Button>
                                        </ActionsContainerEnd>
                                        <ActionsContainerEnd>
                                            <Button primary nospace onClick={() => history.goBack()}>Documentos</Button>
                                        </ActionsContainerEnd> 
                                    */}
                                    <ActionsContainerEnd>
                                        <Button primary nospace onClick={() => history.goBack()}>Voltar</Button>
                                    </ActionsContainerEnd>
                                </ActionsEnd>
                                
                                <Row>
                                    <Col md={{ size:9 }}>
                                        <DashboardTitle spaced centred>{ register?.title }</DashboardTitle>
                                        <ContentText>
                                            { register?.text?.split("\n")?.map((it, key) =>  <p key={key}>{ it }</p>) }
                                        </ContentText>
                                    </Col>
                                    <Col md={{ size:3 }}>

                                        <ComContent>
                                            <ComContentHeader>
                                                Comunicação
                                                <ComContentHeaderClose />
                                            </ComContentHeader>
                                            <ComContentBody>
                                                {/* <ComContentBodyDate>Quinta-feira</ComContentBodyDate> */}

                                                <ComContentChat>
                                                    {
                                                        chats.map((item, key) => {
                                                            const mine = item?.mine;
                                                            return (
                                                                <ComContentChatBalloon key={key} mine={mine}>
                                                                    <ComContentChatBalloonTitle mine={mine}>{ item?.sender?.name }</ComContentChatBalloonTitle>
                                                                    <ComContentChatBalloonText mine={mine}>{ item?.message }</ComContentChatBalloonText>
                                                                    <ComContentChatBalloonDate mine={mine}>{ moment(item?.created_at)?.fromNow() }</ComContentChatBalloonDate>
                                                                </ComContentChatBalloon>
                                                            )
                                                        })
                                                    }
                                                </ComContentChat>

                                                <ComContentChatForm>
                                                    <Input placeholder="Mensagem" value={message} onChange={e => setMessage(e.target.value)} onKeyDown={ ev => ev.keyCode === 13 ? sent() : null } />
                                                    <ComContentChatFormButton onClick={sent}>
                                                        <ComContentChatFormButtonIcon />
                                                    </ComContentChatFormButton>
                                                </ComContentChatForm>
                                            </ComContentBody>
                                        </ComContent>

                                        <ContentAcessor>
                                            <ContentAcessorHeader>
                                                <ContentAcessorHeaderIcon />
                                                Equipe de assessoria
                                            </ContentAcessorHeader>
                                            {
                                                register?.users?.map((item, key) => 
                                                    <ContentAcessorHeaderItem odd={key % 2 !== 0} >
                                                        { item?.name }
                                                    </ContentAcessorHeaderItem>
                                                )
                                            }
                                        </ContentAcessor>

                                    </Col>
                                </Row>
                            </FullPage>
                        }
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}