import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './css/main.css'

const ano = new Date();

const Main = (props) => {
  return (
    <div className="main-container">
      <Helmet>
        <title>LABED - UFN</title>
        <meta property="og:title" content="LABED - UFN" />
      </Helmet>
      <div data-role="Header" className="nav">
        <nav className="nav-container">
          <div className="nav-links-container">
            <a href="#projetos" className="nav-links-projetos">
              Projetos
            </a>
            <a href="#sobre" className="nav-links-sobre">
              Sobre
            </a>
            <a href="#contato" className="nav-links-contato">
              Contato
            </a>
          </div>
        </nav>
      </div>
      <section id="inicio" className="conteudo">
        <div className="conteudo-img-container">
          <img
            alt="Logo LABED"
            src="/assets/img/logos/logo-labed.svg"
            className="conteudo-img-logo-labed"
          />
        </div>
      </section>
      <article id="projetos" className="projetos">
        <div className="projetos-titulo-container">
          <h2 className="projetos-titulo">
            <span className="projetos-titulo-cor">Nossos</span>
            <br></br>
            Projetos
          </h2>
          <div className="projetos-card-container">
            <div className="projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto1.jpg"
                className="projetos-card-img"
              />
              <div className="projetos-card-txt-container">
                <h3 className="projetoscard-titulo">
                  <span>Título projeto</span>
                </h3>
                <p className="projetos-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="projetos-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto2.jpg"
                className="projetos-card-img"
              />
              <div className="projetos-card-txt-container">
                <h3 className="projetoscard-titulo">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="projetos-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="projetos-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto3.jpg"
                className="projetos-card-img"
              />
              <div className="projetos-card-txt-container">
                <h3 className="projetoscard-titulo">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="projetos-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="projetos-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto4.jpg"
                className="projetos-card-img"
              />
              <div className="projetos-card-txt-container">
                <h3 className="projetoscard-titulo">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="projetos-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="projetos-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto5.jpg"
                className="projetos-card-img"
              />
              <div className="projetos-card-txt-container">
                <h3 className="projetoscard-titulo">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="projetos-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="projetos-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto6.jpg"
                className="projetos-card-img"
              />
              <div className="projetos-card-txt-container">
                <h3 className="projetoscard-titulo">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="projetos-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="projetos-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="sobre" className="sobre">
        <div className="sobre-container">
          <img
            alt="image"
            src="/assets/img/gerais/sobre.jpg"
            className="sobre-img"
          />
          <div className="sobre-container-txt">
            <h2 className="sobre-titulo">
              <span className="sobre-titulo-frase1">Sobre o</span>
              <br></br>
              <span className="sobre-titulo-frase2">Labotarório</span>
              <br></br>
            </h2>
            <p className="sobre-desc">
              O Laboratório de Eletrônica e Desenvolvimento, LABED, surgiu de
              uma ideia entre alunos e professores com o propósito de
              desenvolver projetos voltados a área de tecnologia. O laboratório
              fica dentro das instalações da Universidade Franciscana e busca a
              realização de projetos para integração entre os cursos da
              Universidade.
            </p>
          </div>
        </div>
      </article>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-container-logos">
            <a href="#inicio" className="footer-link-img">
              <img
                alt="image"
                src="/assets/img/logos/logo-labed.svg"
                className="footer-logo-labed"
              />
            </a>
            <a
              href="https://www.ufn.edu.br"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <img
                alt="image"
                src="/assets/img/logos/logo-ufn.svg"
                className="footer-logo-ufn"
              />
            </a>
          </div>
          <div id="contato" className="footer-container-contato">
            <h3 className="footer-contato">Contato</h3>
            <a href="mailto:labed@ufn.edu.br?subject=" className="footer-contato-email">
              labed@ufn.edu.br
            </a>
            <span className="footer-contato-separador"></span>
            <a
              href="https://www.google.com/maps/dir//Universidade+Franciscana+-+UFN+-+Conjunto+I+-+Rua+dos+Andradas+-+Centro,+Santa+Maria+-+RS/@-29.6847131,-53.8456932,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9503cb43025706ed:0xc747c4ba8ea983c8!2m2!1d-53.8106738!2d-29.6847923"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-contato-endereco"
            >
              Rua dos Andradas, 1614, Conjunto I, Prédio 3, Lab. 109 Centro
              Santa Maria - RS
            </a>
          </div>
          <div className="footer-container-infos">
            <h3 className="footer-infos">Informações</h3>
            <a href="#inicio" className="footer-infos-inicio">
              Início
            </a>
            <a href="#projetos" className="footer-infos-projetos">
              Projetos
            </a>
            <a href="#sobre" className="footer-infos-sobre">
              Sobre
            </a>
            <span className="footer-infos-separador"></span>
            <div className="footer-infos-redes">
              <a
                href="https://www.instagram.com/labedufn"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <img
                  alt="image"
                  src="/assets/img/icons/instagram.svg"
                  className="footer-infos-redes-instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/labedufn"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <img
                  alt="image"
                  src="/assets/img/icons/facebook.svg"
                  className="footer-infos-redes-facebook"
                />
              </a>
              <a
                href="https://github.com/labedufn"
                target="_blank"
                rel="noreferrer noopener"
                className="link"
              >
                <img
                  alt="image"
                  src="/assets/img/icons/github.svg"
                  className="footer-infos-redes-github"
                />
              </a>
            </div>
          </div>
          <span className="footer-infos-copy">
            Laboratório de Eletrônica e Desenvolvimento - Universidade
            Franciscana © {ano.getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Main