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

export default function DashboardEdictAcessor() {
  const history = useHistory();
  const navigate = (to) => history.push(`/${to}`);

  const { user } = useContext(CoreContext);

  const { loading, registers, remove } = useController();
  const { searchExpression, setSearchExpression, filterSearchExpression } = useSearchExpression();

  const columns =
    user?.access_level === "Coordenador" || user?.isAdmin
      ? [
          { title: "Nome assessorado", ref: "name" },
          { title: "Email", ref: "email" },
          { title: "Local", ref: "local" },
          { title: "Data da assessoria", ref: "date" },
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
                      onClick={() => navigate(`activities/show/advisor/${row.id}`)}
                    >
                      Configurações
                    </Button>
                  </ContentTableAction>
                </>
              ),
          },
        ]
      : [
          { title: "Nome", ref: "name" },
          { title: "Local", ref: "local" },
          { title: "Data da assessoria", ref: "date" },
        ];

  const rows = [
    // { name:'Acessor Exemplo', local:'Local assessoria exemplo', email:'contato@email.com', status:'Cliente ausente', date:'00/00/0000', id:1 },
    ...registers,
  ];

  const filterReports = (fit) => {
    // return !filterReportOptions || fit?.vwEstrutura?.id === filterReportOptions
    return true;
  };

  return (
    <>
      <ContainerAuthenticated sided={"activities"}>
        <Row>
          <Col>
            <FullPage>
              <ActionsEnd>
                {user?.isAdmin ? (
                  <ActionsContainerEnd>
                    {/* <Button primary nospace onClick={() => null}>Novo Status</Button> */}
                    {/* <Button primary nospace onClick={() => navigate(`activities/config/acessor`)}>Configurações</Button> */}
                    {/* <Button primary nospace onClick={() => null}>Relatórios</Button> */}
                    <Button nospace link />
                    <Button primary nospace onClick={() => history.goBack()}>
                      Voltar
                    </Button>
                  </ActionsContainerEnd>
                ) : user?.access_level === "Coordenador" ? (
                  <ActionsContainerEnd>
                    {/* <Button primary nospace onClick={() => null}>Agendar assessoria</Button> */}
                    {/* <Button primary nospace onClick={() => null}>Meus horários</Button> */}
                    {/* <Button primary nospace onClick={() => null}>Relatórios</Button> */}
                    <Button nospace link />
                    <Button primary nospace onClick={() => history.goBack()}>
                      Voltar
                    </Button>
                  </ActionsContainerEnd>
                ) : (
                  <ActionsContainerEnd>
                    <Button primary nospace onClick={() => navigate(`activities/calendar/acessor`)}>
                      Calendário
                    </Button>
                    <Button primary nospace onClick={() => history.goBack()}>
                      Voltar
                    </Button>
                  </ActionsContainerEnd>
                )}
              </ActionsEnd>
              {user?.isAdmin ? (
                <DashboardTitle centred>Listagem de assessorias</DashboardTitle>
              ) : user?.access_level === "Coordenador" ? (
                <DashboardTitle centred>Minhas assessorias</DashboardTitle>
              ) : (
                <DashboardTitle centred>Histórico de assessorias</DashboardTitle>
              )}
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
