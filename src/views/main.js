import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './main.css'

const Main = (props) => {
  return (
    <div className="main-container">
      <Helmet>
        <title>LABED - UFN</title>
        <meta property="og:title" content="LABED - UFN" />
      </Helmet>
      <div data-role="Header" className="main-nav">
        <nav className="main-nav-container">
          <div className="main-links-container">
            <a href="#projetos" className="main-projetos">
              Projetos
            </a>
            <a href="#sobre" className="main-sobre">
              Sobre
            </a>
            <a href="#contato" className="main-contato">
              Contato
            </a>
          </div>
        </nav>
      </div>
      <section id="inicio" className="main-conteudo">
        <div className="main-conteudo-img-container">
          <img
            alt="Logo LABED"
            src="/assets/img/logos/logo-labed.svg"
            className="main-logo-labed"
          />
        </div>
      </section>
      <article id="projetos" className="main-projetos1">
        <div className="main-projetos-titulo-container">
          <h2 className="main-titulo">
            <span className="main-text">Nossos</span>
            <br className="Section-Heading"></br>
            <span className="Section-Heading">P</span>
            <span className="Section-Heading">rojetos</span>
            <br className="Section-Heading"></br>
          </h2>
          <div className="main-projetos-card-container">
            <div className="main-projetos-card">
              <img
                alt="image"
                src="/assets/img/projetos/projeto1.jpg"
                className="main-img"
              />
              <div className="main-card-txt-container">
                <h3 className="main-card-titulo">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="main-card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="main-card-btn">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="main-projetos-card1">
              <img
                alt="image"
                src="/assets/img/projetos/projeto2.jpg"
                className="main-img1"
              />
              <div className="main-card-txt-container1">
                <h3 className="main-card-titulo1">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="main-card-desc1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="main-card-btn1">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
            <div className="main-projetos-card2">
              <img
                alt="image"
                src="/assets/img/projetos/projeto3.jpeg"
                className="main-img2"
              />
              <div className="main-card-txt-container2">
                <h3 className="main-card-titulo2">
                  <span>Título projeto</span>
                  <br></br>
                </h3>
                <p className="main-card-desc2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                  senectus neque, lorem sit in mattis. Vehicula eget eget
                  tellus.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <Link to="/" className="main-card-btn2">
                  <span>Mais detalhes</span>
                  <br></br>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="sobre" className="main-sobre1">
        <div className="main-sobre-container">
          <img
            alt="image"
            src="/assets/img/gerais/sobre.jpg"
            className="main-img3"
          />
          <div className="main-sobre-container-txt">
            <h2 className="main-titulo1">
              <span className="main-text17">Sobre o </span>
              <br className="main-text18"></br>
              <span className="main-text19">Labotarório</span>
              <br></br>
            </h2>
            <p className="main-desc">
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
      <footer className="main-footer">
        <div className="main-footer-container">
          <div className="main-footer-container-logos">
            <a href="#inicio" className="main-link">
              <img
                alt="image"
                src="/assets/img/logos/logo-labed.svg"
                className="main-img4"
              />
            </a>
            <a
              href="https://www.ufn.edu.br"
              target="_blank"
              rel="noreferrer noopener"
              className="main-link1"
            >
              <img
                alt="image"
                src="/assets/img/logos/logo-ufn.svg"
                className="main-img5"
              />
            </a>
          </div>
          <div id="contato" className="main-container-contato">
            <h3 className="main-contato1">Contato</h3>
            <a href="mailto:labed@ufn.edu.br?subject=" className="main-email">
              labed@ufn.edu.br
            </a>
            <span className="main-separador">  </span>
            <a
              href="https://www.google.com/maps/dir//Universidade+Franciscana+-+UFN+-+Conjunto+I+-+Rua+dos+Andradas+-+Centro,+Santa+Maria+-+RS/@-29.6847131,-53.8456932,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9503cb43025706ed:0xc747c4ba8ea983c8!2m2!1d-53.8106738!2d-29.6847923"
              target="_blank"
              rel="noreferrer noopener"
              className="main-endereco"
            >
              Rua dos Andradas, 1614, Conjunto I, Prédio 3, Lab. 109 Centro
              Santa Maria - RS
            </a>
          </div>
          <div className="main-container-infos">
            <h3 className="main-contato2">Informações</h3>
            <a href="#inicio" className="main-inicio">
              Início
            </a>
            <a href="#projetos" className="main-projetos2">
              Projetos
            </a>
            <a href="#sobre" className="main-sobre2">
              Sobre
            </a>
            <span className="main-separador1">  </span>
            <div className="main-social-media">
              <a
                href="https://www.instagram.com/labedufn"
                target="_blank"
                rel="noreferrer noopener"
                className="main-link2"
              >
                <img
                  alt="image"
                  src="/assets/img/icons/instagram.svg"
                  className="main-instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/labedufn"
                target="_blank"
                rel="noreferrer noopener"
                className="main-link3"
              >
                <img
                  alt="image"
                  src="/assets/img/icons/facebook.svg"
                  className="main-facebook"
                />
              </a>
              <a
                href="https://github.com/labedufn"
                target="_blank"
                rel="noreferrer noopener"
                className="main-link4"
              >
                <img
                  alt="image"
                  src="/assets/img/icons/github.svg"
                  className="main-github"
                />
              </a>
            </div>
          </div>
          <span className="main-text21">
            Laboratório de Eletrônica e Desenvolvimento - Universidade
            Franciscana © 2022
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Main