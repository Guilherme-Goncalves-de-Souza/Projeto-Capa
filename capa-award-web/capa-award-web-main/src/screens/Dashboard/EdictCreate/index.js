import React, { useState, useCallback } from "react";

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
  DashboardSpacer,
  DashboardContentCentred,
  DashboardLink,
  DashboardRemoveIcon,
  DashboardTextList,
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import Select from "components/Form/Select";
import Radio from "components/Form/Radio";
import Check from "components/Form/Check";
import UploadFile from "components/Form/UploadFile";
import useController from "./controller";
import { parseStrapiImage } from "utils";
import { ContentFileUploaded, ContentFileUploadedRemove } from "../EdictForm/styled";

export default function DashboardEdictCreate() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { formValue, changeForm, loading, register, data, save, remove, file, setFile } = useController();

  const [errors, setErrors] = useState({ title: "", status: "" });

  const changeEdictFile = useCallback(
    (f) => {
      setFile(f);
    },
    [setFile]
  );

  const validateFields = () => {
    let valid = true;
    let newErrors = { title: "", status: "" };

    if (!formValue("title")) {
      newErrors.title = "Nome do edital não pode ser vazio";
      valid = false;
    }

    if (!formValue("status")) {
      newErrors.status = "Status não pode ser vazio";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSave = () => {
    if (validateFields()) {
      save();
    }
  };

  return (
    <>
      <ContainerAuthenticated sided={"activities"}>
        <Row>
          <Col>
            <FullPage>
              <ActionsEnd>
                <ActionsContainerEnd>
                  {register?.id ? (
                    <Button primary nospace onClick={() => remove(register.id)}>
                      Excluir edital
                    </Button>
                  ) : (
                    <EdictItem />
                  )}
                  <Button primary nospace onClick={() => history.goBack()}>
                    Voltar
                  </Button>
                </ActionsContainerEnd>
              </ActionsEnd>
              <DashboardTitle centred>Cadastrar/ Editar edital</DashboardTitle>

              <EdictWrapper>
                <EdictItem>
                  <Input
                    placeholder="Nome do edital"
                    value={formValue("title")}
                    onChange={(e) => changeForm(e.target.value, "title")}
                  />
                  {errors.title && <ContentText small>{errors.title}</ContentText>}
                </EdictItem>
                <EdictItem>
                  <Input
                    placeholder="Status"
                    value={formValue("status")}
                    onChange={(e) => changeForm(e.target.value, "status")}
                  />
                  {errors.status && <ContentText small>{errors.status}</ContentText>}
                </EdictItem>
                <Input
                  type="textarea"
                  placeholder="Sobre o edital"
                  value={formValue("text")}
                  onChange={(e) => changeForm(e.target.value, "text")}
                />
                <EdictItem>
                  <UploadFile accept={"application/pdf"} onChange={changeEdictFile}>
                    <Button primary>Upload do edital</Button>
                  </UploadFile>
                </EdictItem>

                {!file ? null : (
                  <ContentFileUploaded>
                    <ContentText link onClick={() => window.open(`${parseStrapiImage(file?.url)}`)}>
                      {file?.name}
                    </ContentText>
                    <ContentFileUploadedRemove onClick={() => setFile(null)} />
                  </ContentFileUploaded>
                )}

                <ActionsContainer>
                  <Button primary loading={loading} onClick={handleSave}>
                    Salvar
                  </Button>
                </ActionsContainer>
              </EdictWrapper>

              <DashboardSpacer />
            </FullPage>
          </Col>
        </Row>
      </ContainerAuthenticated>
    </>
  );
}
