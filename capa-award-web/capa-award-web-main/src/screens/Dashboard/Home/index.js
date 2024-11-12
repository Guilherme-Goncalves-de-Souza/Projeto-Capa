import React from "react";  

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
    FilterButton
    
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import useController from "./controller";
import useSearchExpression from "hooks/useSearchExpression";
import { Load } from "ui/styled";
import moment from "moment/moment";
import { maxLength } from "utils";

export default function DashboardHome(){  

    const history = useHistory(); 
    const navigate = to => history.push(`/${ to }`); 

    const { loading, registers } = useController()
    const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression()

    return ( 
        <>
            <ContainerAuthenticated sided={"activities"}> 
                <Row>
                    <Col>
                        <DashboardTitle centred>Editais</DashboardTitle>
                        <SearchContainer>
                            <Input placeholder="Pesquisar"  value={searchExpression} onChange={e => setSearchExpression(e.target.value)}  />
                            <FilterButton>
                                <Button primary nospace >
                                    <FilterIcon />
                                </Button>
                            </FilterButton>
                        </SearchContainer>
                        <EdictWrapper>
                            {
                                loading ? <Load /> :
                                registers?.filter(filterSearchExpression)?.map((item, key) => 
                                    <EdictItem key={key} onClick={() => navigate(`activities/${ item?.id }`)}>
                                        <EdictItemTitle>{ item?.title }</EdictItemTitle>
                                        <EdictItemSubtitle><b>Tipo:</b> { item?.type }</EdictItemSubtitle>
                                        <EdictItemContentImage>
                                            <EdictItemImage />
                                        </EdictItemContentImage>
                                        <EdictItemDescription>{ maxLength(item?.text) }</EdictItemDescription>
                                        <EdictItemDate><b>Publicação:</b> { moment(item?.created_at)?.format("DD/MM/YYYY") }</EdictItemDate>
                                    </EdictItem>
                                )
                            }
                        </EdictWrapper>
                    </Col>
                </Row>
            </ContainerAuthenticated> 
        </>
    );
}