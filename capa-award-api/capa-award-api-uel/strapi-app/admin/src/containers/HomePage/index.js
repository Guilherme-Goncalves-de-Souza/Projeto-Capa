/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from "react";
import { FormattedMessage } from "react-intl";
import { upperFirst } from "lodash";
import { auth } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";
import { Container, Block } from "./components";

const HomePage = () => {
  const username = auth.getUserInfo()?.firstname || "Usuário";

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>
              <h2>Bem-vindo, {upperFirst(username)}!</h2>
              <p>
                Este é o painel administrativo da UEL - Universidade Estadual de
                Londrina.
              </p>
              <p>
                Aqui você pode gerenciar recursos da API, como artigos, editais
                e usuários. Use as ferramentas disponíveis para manter o
                conteúdo atualizado e bem estruturado.
              </p>
              <p>
                Explore o menu lateral para acessar as funcionalidades e
                configurar o sistema conforme necessário.
              </p>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
