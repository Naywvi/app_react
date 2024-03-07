import '../../assets/css/App.css';
const formulaire_general = require('../formulaire_general/index');
const formulaire_iti = require('../formulaire_iti/index');
const formulaire_sf = require('../formulaire_sf/index');
const formulaire_ite = require('../formulaire_ite/index');
const navbar = require('../navbar/index');
const client = require('../formulaire_client/index');

function page_formulaire() {
    
  return (
    <><head>
          <title>q</title>
          <meta name="title" content="{{{meta.title}}}" />

          <meta charset="utf-8" />
          <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
          <link href="/css/index.css" rel="stylesheet" />

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      </head><div class="demo-page">
      <navbar.default/>
              <div class="demo-page-navigation">
                  <nav>
                        
                          <li>
                              <a href="#intro">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round" class="feather feather-tool">
                                      <path
                                          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                  </svg>
                                  Introduction</a>
                          </li>

                          <li>
                              <a href="#general">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                                  </svg>
                                  Général</a>
                          </li>

                          <li>
                              <a href="#ite">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-width="2" d="M3 11h18M3 15h18m-9-4v8m-8 0h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z" />
                                  </svg>
                                  ITE</a>
                          </li>

                          <li>
                              <a href="#iti">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z" />
                                  </svg>
                                  ITI</a>
                          </li>

                          <li>
                              <a href="#sf">
                                  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-9a1 1 0 0 1-1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1Z" />
                                  </svg>
                                  SF</a>
                          </li>

                     
                  </nav>
              </div>
              <main class="demo-page-content">
                  <section>
                      <div class="href-target" id="intro"></div>
                      <h1 class="package-name">Bonjour </h1>
                      <p>
                          Nous avons le plaisir de vous présenter notre outil afin de faciliter vos visites techniques 😄.
                          Si vous avez des questions, n'hésitez pas à nous contacter.
                          <strong>Quelques bugs peuvent survenir, dans ce cas ne vous inquietez pas, contactez nous.</strong>
                          Vous avez trois formulaires à remplir, un pour chaque étape de la visite technique.
                          <br />
                          Vous n'êtes pas obligé de tout remplir d'un coup. Chaque visite technique est unique, et nous avons
                          besoin de toutes les informations pour vous aider au mieux.
                          <br /><br />
                          <strong>🚨Merci de prendre des photos visible, et net🚨</strong>
                      </p>

                      <span>👉 Quelques informations concernant les trois formulaires.</span>
                      <br /><br />
                      <strong>📁 Formulaire Général pour Audit Énergétique (Pas obligatoire)</strong><br></br>
                      <small class="form-text text-muted">Ce formulaire n'est pas obligatoire</small>
                      <ul>
                          <li class="fst-italic text-decoration-underline">Ce formulaire est conçu pour initier un audit énergétique de votre maison, visant à améliorer son efficacité énergétique, réduire les coûts et contribuer à un environnement plus durable.</li><br></br>
                          <li>- <span className="fst-italic text-decoration-underline">Nombre de questions</span> : Préparez-vous à répondre à un ensemble concis de questions essentielles visant à collecter des informations clés sur la structure et les systèmes énergétiques de votre maison.</li>
                          <li>-<span className="fst-italic text-decoration-underline">Informations sur les mesures</span> : Les questions sont élaborées pour préciser les aspects critiques de la consommation d'énergie de votre habitation, incluant l'isolation, le système de chauffage, la ventilation, et plus encore</li>
                          <li>- <span className="fst-italic text-decoration-underline">Aides</span> : Le formulaire sert également à identifier les potentielles aides financières ou subventions disponibles pour la réalisation des travaux d'amélioration énergétique</li>
                          
                      </ul>
                      <br />
                      <strong>🏠 ITE </strong><span class="fst-italic text-decoration-underline">(isolation thermique par
                          l'extérieur)</span><br></br>
                          <small class="form-text text-muted">Ce formulaire est obligatoire</small>
                      <ul>
                      <span className="fst-italic text-decoration-underline">Introduction : L'ITI améliore le confort thermique et l'efficacité énergétique en appliquant des matériaux isolants sur les murs intérieurs. Cette technique est privilégiée pour les rénovations, évitant les modifications extérieures. </span><br></br><br></br>
                          <li>- <span className="fst-italic text-decoration-underline">Nombre de questions</span> : Attendez-vous à des questions précises sur la configuration actuelle des murs, les matériaux existants, et l'espace disponible pour l'isolation.</li>
                          <li>- <span className="fst-italic text-decoration-underline">Informations sur les mesures</span> : Le formulaire détaille les types d'isolants, l'épaisseur nécessaire, et les techniques d'installation adaptées à votre intérieur.</li>
                          <li>- <span className="fst-italic text-decoration-underline">Aides</span> : Découvrez les subventions et aides financières disponibles pour réduire le coût de vos travaux d'ITI.</li>
                      </ul>
                      <br />
                      <strong>🧱 ITI </strong><span class="fst-italic text-decoration-underline">(isolation thermique par
                          l'intérieur)</span><br></br>
                          <small class="form-text text-muted">Ce formulaire est obligatoire</small>
                      <ul>
                         <span className="fst-italic text-decoration-underline">Introduction : L'ITE consiste à poser une couche d'isolation sur les façades extérieures, réduisant les ponts thermiques et améliorant l'esthétique du bâtiment. </span><br></br><br></br>
                          <li>- <span className="fst-italic text-decoration-underline">Nombre de questions</span> : Le formulaire vous guide à travers les spécificités de votre façade et les exigences réglementaires.</li>
                          <li>- <span className="fst-italic text-decoration-underline">Informations sur les mesures</span> : Il précise les matériaux recommandés, les techniques d'installation et l'impact sur l'esthétique de votre maison.</li>
                          <li>- <span className="fst-italic text-decoration-underline">Aides</span> : Informez-vous sur les aides gouvernementales et locales pour financer votre projet d'ITE.</li>
                      </ul>
                      <br />
                      <strong>🚧 SF </strong><span class="fst-italic text-decoration-underline">(isolation sous face et
                          dalle)</span><br></br>
                          <small class="form-text text-muted">Ce formulaire est obligatoire</small>
                      <ul>
                         <span className="fst-italic text-decoration-underline">Introduction : L'isolation SF cible la sous-face des dalles et les planchers bas pour limiter les pertes de chaleur, idéale pour les caves, garages ou tout espace non habitable.</span><br></br><br></br>
                          <li>- <span className="fst-italic text-decoration-underline">Nombre de questions</span> : Répondez à des interrogations ciblées sur l'accès à ces espaces, l'état actuel de l'isolation et les objectifs thermiques.</li>
                          <li>- <span className="fst-italic text-decoration-underline">Informations sur les mesures</span> : Le formulaire vous fournira des détails sur les solutions d'isolation adaptées, y compris l'épaisseur et le type de matériaux.</li>
                          <li>- <span className="fst-italic text-decoration-underline">Aides</span> : Explorez les possibilités de financement pour alléger le coût des améliorations d'isolation SF.</li>
                      </ul>
                      <br />
                      <strong>👇 Vous pouvez commencer dès à présent.</strong>
                  </section>

                  <section id="client">
                      <div class="href-target" ></div>
                      <h1>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                          </svg>
                          Formualire client - Permettant la sauvegarde des informations à votre nom et à celle du client.
                      </h1>

                      <client.default />

                  </section>

                  <section id="general" hidden>
                      <div class="href-target" ></div>
                      <h1>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v13H7a2 2 0 0 0-2 2Zm0 0c0 1.1.9 2 2 2h12M9 3v14m7 0v4" />
                          </svg>
                          Formulaire général
                      </h1>

                      <formulaire_general.default />

                  </section>
          
                  <section id="ite" hidden>
                      <div class="href-target" ></div>
                      <h1>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-width="2" d="M3 11h18M3 15h18m-9-4v8m-8 0h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z" />
                          </svg>
                          Formulaire ITE
                      </h1>
                      <formulaire_ite.default />

                      {/* ICI */}

                  </section>

                  <section id="iti" hidden>
                      <div class="href-target" ></div>
                      <h1>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v14M9 5v14M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z" />
                          </svg>
                          Formulaire ITI
                      </h1>
                      <formulaire_iti.default />

                  </section>

                  <section id="sf" hidden>
                      <div class="href-target" ></div>
                      <h1>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7H7m2 3H7m2 3H7m4 2v2m3-2v2m3-2v2M4 5v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-9a1 1 0 0 1-1-1V5c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1Z" />
                          </svg>
                          Formulaire SF
                      </h1>

                      <formulaire_sf.default />
                      {/* <iframe name="Stack" src="http://localhost:3000/iti" height="35%" width="100%" frameborder="0" scrolling="no" ></iframe> */}


                  </section>
              </main>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
              crossorigin="anonymous"></script></>

  );
}

export default page_formulaire;
