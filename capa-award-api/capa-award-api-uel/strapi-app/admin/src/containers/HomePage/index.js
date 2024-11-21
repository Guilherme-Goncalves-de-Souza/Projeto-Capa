/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { get, upperFirst } from "lodash";
import { auth, LoadingIndicatorPage } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";
import { Container, Block } from "./components";

const UNIVERSITY_MAP = {
  UEL: "UEL - Universidade Estadual de Londrina",
  UENP: "UENP - Universidade Estadual do Norte do Paraná",
  UEM: "UEM - Universidade Estadual de Maringá",
  UNICENTRO: "UNICENTRO - Universidade Estadual do Centro-Oeste",
  UNIOESTE: "UNIOESTE - Universidade Estadual do Oeste do Paraná",
  UNESPAR: "UNESPAR - Universidade Estadual do Paraná",
  UFPR: "UFPR - Universidade Federal do Paraná",
  UEPG: "UEPG - Universidade Estadual de Ponta Grossa",
};

const HomePage = () => {
  const [userCounts, setUserCounts] = useState({});
  const [institutionName, setInstitutionName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [articleCount, setArticleCount] = useState(0);
  const [edictCount, setEdictCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = auth.getUserInfo();
        const institution = userInfo?.institution || "Desconhecida";
        const fullInstitutionName = UNIVERSITY_MAP[institution] || institution;

        setInstitutionName(fullInstitutionName);

        const usersResponse = await fetch("/users-permissions/users");
        const users = await usersResponse.json();

        const userAccessCounts = users.reduce((acc, user) => {
          const accessLevel = user.access_level || "Desconhecido";
          acc[accessLevel] = (acc[accessLevel] || 0) + 1;
          return acc;
        }, {});

        setUserCounts(userAccessCounts);

        const articlesResponse = await fetch("/articles/count");
        const articleCountData = await articlesResponse.json();
        setArticleCount(articleCountData);

        const edictsResponse = await fetch("/edicts/count");
        const edictCountData = await edictsResponse.json();
        setEdictCount(edictCountData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  const username = get(auth.getUserInfo(), "firstname", "Usuário");

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {(title) => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>
              <h2>Olá, {upperFirst(username)}!</h2>
              <p>Você está no painel da {institutionName}.</p>
              <hr />
              <h3>Visão Geral</h3>

              <h4>Artigos e Editais</h4>
              <ul>
                <li>Quantidade de artigos postados: {articleCount}</li>
                <li>Quantidade de editais criados: {edictCount}</li>
              </ul>

              <hr />
              <h4>Usuários por Tipo de Acesso</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tipo de Acesso</th>
                    <th>Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(userCounts).map(([level, count]) => (
                    <tr key={level}>
                      <td>{level}</td>
                      <td>{count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);





/*
  <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <Wave />
              <FormattedMessage
                id={headerId}
                values={{
                  name: upperFirst(username),
                }}
              >
                {msg => <h2 id="mainHeader">{msg}</h2>}
              </FormattedMessage>
              {hasAlreadyCreatedContentTypes ? (
                <FormattedMessage id="app.components.HomePage.welcomeBlock.content.again">
                  {msg => <P>{msg}</P>}
                </FormattedMessage>
              ) : (
                <FormattedMessage id="HomePage.welcome.congrats">
                  {congrats => {
                    return (
                      <FormattedMessage id="HomePage.welcome.congrats.content">
                        {content => {
                          return (
                            <FormattedMessage id="HomePage.welcome.congrats.content.bold">
                              {boldContent => {
                                return (
                                  <P>
                                    <b>{congrats}</b>&nbsp;
                                    {content}&nbsp;
                                    <b>{boldContent}</b>
                                  </P>
                                );
                              }}
                            </FormattedMessage>
                          );
                        }}
                      </FormattedMessage>
                    );
                  }}
                </FormattedMessage>
              )}
              {hasAlreadyCreatedContentTypes && (
                <div style={{ marginTop: isLoading ? 60 : 50 }}>
                  {posts.map((post, index) => (
                    <BlogPost
                      {...post}
                      key={post.link}
                      isFirst={index === 0}
                      isLoading={isLoading}
                      error={error}
                    />
                  ))}
                </div>
              )}
              <FormattedMessage id={linkProps.id}>
                {msg => (
                  <ALink
                    rel="noopener noreferrer"
                    {...linkProps}
                    style={{ verticalAlign: ' bottom', marginBottom: 5 }}
                  >
                    {msg}
                  </ALink>
                )}
              </FormattedMessage>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {FIRST_BLOCK_LINKS.map((data, index) => {
                  const type = index === 0 ? 'doc' : 'code';

                  return (
                    <LinkWrapper href={data.link} target="_blank" key={data.link} type={type}>
                      <FormattedMessage id={data.titleId}>
                        {title => <p className="bold">{title}</p>}
                      </FormattedMessage>
                      <FormattedMessage id={data.contentId}>
                        {content => <p>{content}</p>}
                      </FormattedMessage>
                    </LinkWrapper>
                  );
                })}
              </div>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <FormattedMessage id="HomePage.community">{msg => <h2>{msg}</h2>}</FormattedMessage>
              <FormattedMessage id="app.components.HomePage.community.content">
                {content => <P style={{ marginTop: 7, marginBottom: 0 }}>{content}</P>}
              </FormattedMessage>
              <FormattedMessage id="HomePage.roadmap">
                {msg => (
                  <ALink
                    rel="noopener noreferrer"
                    href="https://portal.productboard.com/strapi/1-public-roadmap/tabs/2-under-consideration"
                    target="_blank"
                  >
                    {msg}
                  </ALink>
                )}
              </FormattedMessage>

              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>

 */
