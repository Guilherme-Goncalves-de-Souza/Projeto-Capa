/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { upperFirst } from "lodash";
import { auth, LoadingIndicatorPage } from "strapi-helper-plugin";
import PageTitle from "../../components/PageTitle";
import { Container, Block } from "./components";

const HomePage = () => {
  const [userCounts, setUserCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [articleCount, setArticleCount] = useState(0);
  const [edictCount, setEdictCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/admin/homepage-data", {
          headers: {
            Authorization: `Bearer ${auth.getToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados internos");
        }

        const data = await response.json();

        setUserCounts(data.userCounts);
        setArticleCount(data.articleCount);
        setEdictCount(data.edictCount);
      } catch (error) {
        console.error("Erro ao buscar dados internos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

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
              <h2>Olá, {upperFirst(username)}!</h2>
              <p>
                Você está no painel da UNESPAR - Universidade Estadual do Paraná.
              </p>
              <hr />
              <h3 style={{ margin: "1rem 0" }}>Visão Geral</h3>

              <h4 style={{ marginBottom: "1rem" }}>Artigos e Editais</h4>
              <ul style={{ marginBottom: "1rem" }}>
                <li>Quantidade de artigos postados: {articleCount}</li>
                <li>Quantidade de editais criados: {edictCount}</li>
              </ul>

              <hr />
              <h4 style={{ marginBottom: "1rem" }}>
                Usuários por Tipo de Acesso
              </h4>
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