import React, { useContext, useState } from "react";

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
  ContentTableAction,
  ContentTableStatus,
} from "./styled";

import ContainerAuthenticated from "containers/Authenticated";
import { Row, Col } from "reactstrap";
import Input from "components/Form/Input";
import Button from "components/Form/Button";
import { useHistory } from "react-router-dom";
import BasicTable from "components/Form/Table";
import { parseStrapiImage } from "utils";
import { CoreContext } from "context/CoreContext";
import useController from "./controller";
import useSearchExpression from "hooks/useSearchExpression";
import { useParams } from "react-router-dom";

export default function DashboardEdictList() {
  const { id } = useParams();

  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { user } = useContext(CoreContext);

  const { loading, registers } = useController(id);
  const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression();

  const columns = user?.isAdmin
    ? [
        { title: "Artigo", ref: "article" },
        { title: "Edital", ref: "edict" },
        { title: "Autor", ref: "author" },
        { title: "Equipe responsável", ref: "responsible" },
        {
          title: "Status",
          renderCell: ({ row }) =>
            !row?.status ? null : (
              <>
                <ContentTableStatus status={row?.status}>{row?.status}</ContentTableStatus>
              </>
            ),
        },
        { title: "Publicado", ref: "published" },
        {
          title: "Ações",
          renderCell: ({ row }) =>
            !row?.id ? null : (
              <>
                <ContentTableAction>
                  <Button
                    secondary
                    link
                    nospace
                    onClick={() => navigate(`activities/list/article/${row.id}/edit`)}
                  >
                    Configurações
                  </Button>
                </ContentTableAction>
              </>
            ),
        },
      ]
    : user?.access_level === "Coordenador"
    ? [
        { title: "Artigo", ref: "article" },
        { title: "Edital", ref: "edict" },
        { title: "Autor", ref: "author" },
        { title: "Equipe responsável", ref: "responsible" },
        {
          title: "Status",
          renderCell: ({ row }) =>
            !row?.status ? null : (
              <>
                <ContentTableStatus status={row?.status}>{row?.status}</ContentTableStatus>
              </>
            ),
        },
        {
          title: "Ações",
          renderCell: ({ row }) =>
            !row?.id ? null : (
              <>
                <ContentTableAction>
                  <Button
                    secondary
                    link
                    nospace
                    onClick={() => navigate(`activities/show/article/${row.id}`)}
                  >
                    Ver artigo
                  </Button>
                </ContentTableAction>
              </>
            ),
        },
      ]
    : [
        { title: "Edital", ref: "edict" },
        { title: "Artigo", ref: "article" },
        { title: "Equipe responsável", ref: "responsible" },
        {
          title: "Status",
          renderCell: ({ row }) =>
            !row?.status ? null : (
              <>
                <ContentTableStatus status={row?.status}>{row?.status}</ContentTableStatus>
              </>
            ),
        },
        {
          title: "Ações",
          renderCell: ({ row }) =>
            !row?.id ? null : (
              <>
                <ContentTableAction>
                  <Button
                    secondary
                    link
                    nospace
                    onClick={() => navigate(`activities/show/article/${row.id}`)}
                  >
                    Ver artigo
                  </Button>
                </ContentTableAction>
              </>
            ),
        },
      ];

  const rows = [...registers];

  return (
    <>
      <ContainerAuthenticated sided={"activities"}>
        <Row>
          <Col>
            <FullPage>
              <ActionsEnd>
                <ActionsContainerEnd>
                  <Button primary nospace onClick={() => history.goBack()}>
                    Voltar
                  </Button>
                </ActionsContainerEnd>
              </ActionsEnd>
              <DashboardTitle centred>Listagem de artigos</DashboardTitle>
              <SearchContainer>
                <Input
                  placeholder="Pesquisar"
                  value={searchExpression}
                  onChange={(e) => setSearchExpression(e.target.value)}
                />
                <FilterButton>
                  <Button primary nospace>
                    <FilterIcon />
                  </Button>
                </FilterButton>
              </SearchContainer>
              <BasicTable
                loading={loading}
                columns={columns}
                rows={rows.filter(filterSearchExpression)}
              />
            </FullPage>
          </Col>
        </Row>
      </ContainerAuthenticated>
    </>
  );
}
