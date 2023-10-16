import "./Styles/Works.css";
const Works = () => {
  return (
    <section className="works" id="works">
      <h2 className="works_title">
        <span>03.</span> The projects I have developed
      </h2>

      <div className="works_featuredProyect">
        <div className="featuredProyect_container">
          <p className="featuredProyect_overline">Featured Proyect</p>
          <h3 className="featuredProyect_title">
            <a href="https://ecommerce-with-react-alan-solis.netlify.app/">
              E-commerce Full Stack
            </a>
          </h3>
          <p className="featuredProyect_description">
            Proyecto de E-commerce full stack que incluye una página de registro
            y login, filtros de búsqueda, un carrito de compras funcional y una
            lista que muestra las compras realizadas, garantizando una
            experiencia fluida y completa para los usuarios.
          </p>
          <ul className="featuredProyect_lenguages_container">
            <li className="featuredProyect_lenguages_items">React</li>
            <li className="featuredProyect_lenguages_items">JavaScript</li>
            <li className="featuredProyect_lenguages_items">CSS</li>
            <li className="featuredProyect_lenguages_items">NodeJs</li>
            <li className="featuredProyect_lenguages_items">Express</li>
            <li className="featuredProyect_lenguages_items">PostgreSQL</li>
          </ul>
          <ul className="featuredProyect_links_container">
            <li className="featuredProyect__links_items">
              <a
                target="_blank"
                href="https://github.com/AlanS2405/E-Commerce-with-React"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li className="featuredProyect__links_items">
              <a
                target="_blank"
                href="https://github.com/AlanS2405/ecommers-api-nodejs"
              >
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li className="featuredProyect__links_items">
              <a
                target="_blank"
                href="https://ecommerce-with-react-alan-solis.netlify.app/"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="featuredProyect_img_container">
          <a
            target="_blank"
            className="featuredProyect_img_link"
            href="https://ecommerce-with-react-alan-solis.netlify.app/"
          >
            <img
              className="featuredProyect_img"
              src="./e-commerce.jpg"
              alt="ecommerce-img"
            />
          </a>
        </div>
      </div>

      <div className="works_otherProjects">
        <h2 className="otherProjects_title">Other Noteworthy Projects</h2>
        <ul className="otherProjects_grid">
          <li className="otherProjects_item">
            <a
              target="_blank"
              className="otherProjects_link"
              href="https://users-crud-alan-solis.netlify.app/"
            >
              <div className="otherProjects_container">
                <ul className="otherProjects_head">
                  <li className="bx bx-folder_container">
                    <i className="bx bx-folder"></i>
                  </li>
                  <div className="otherProjects_links_container">
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/users-crud"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/Users-CRUD-API"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://users-crud-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a
                    target="_blank"
                    href="https://users-crud-alan-solis.netlify.app/"
                  >
                    Users Crud
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  Proyecto de Crud de usuarios full stack que permite registrar
                  y eliminar usuarios, así como editar los datos de cada uno de
                  ellos una vez hayan sido registrados en el sistema a partir de
                  un formulario popup.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">React</li>
                  <li className="otherProjects_lenguages">JavaScript</li>
                  <li className="otherProjects_lenguages">CSS</li>
                  <li className="otherProjects_lenguages">NodeJs</li>
                  <li className="otherProjects_lenguages">Express</li>
                  <li className="otherProjects_lenguages">PostgreSQL</li>
                </ul>
              </div>
            </a>
          </li>
          <li className="otherProjects_item">
            <a
              target="_blank"
              className="otherProjects_link"
              href="https://galleta-de-la-fortuna-alan-solis.netlify.app/"
            >
              <div className="otherProjects_container">
                <ul className="otherProjects_head">
                  <li className="bx bx-folder_container">
                    <i className="bx bx-folder"></i>
                  </li>
                  <div className="otherProjects_links_container">
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/front-auth-and-emailing"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/authentication_and_emailing"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://auth-and-emailing-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a
                    target="_blank"
                    href="https://auth-and-emailing-alan-solis.netlify.app/"
                  >
                    Emailing App
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  App full Stack de emailing que permite registrar usuarios,
                  verificar su autenticidad a partir de un email que se envía
                  con un link de verificación, y también recuperar la contraseña
                  de este de la misma manera.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">React</li>
                  <li className="otherProjects_lenguages">JavaScript</li>
                  <li className="otherProjects_lenguages">CSS</li>
                  <li className="otherProjects_lenguages">NodeJs</li>
                  <li className="otherProjects_lenguages">Express</li>
                  <li className="otherProjects_lenguages">PostgreSQL</li>
                </ul>
              </div>
            </a>
          </li>
          <li className="otherProjects_item">
            <a
              target="_blank"
              className="otherProjects_link"
              href="https://pokecards-app-alan-solis.netlify.app/"
            >
              <div className="otherProjects_container">
                <ul className="otherProjects_head">
                  <li className="bx bx-folder_container">
                    <i className="bx bx-folder"></i>
                  </li>
                  <div className="otherProjects_links_container">
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/pokecard-app"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://pokecards-app-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a target="_blank" href="">
                    Pokecard APP
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  Proyecto de PokeApp front-end construído a partir de la api de
                  pokemons que permite visualizar cada uno de los pokemons
                  registrados en ella en forma de cartas distribuídas en una
                  grilla, con filtro de búsqueda y paginación.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">React</li>
                  <li className="otherProjects_lenguages">JavaScript</li>
                  <li className="otherProjects_lenguages">CSS</li>
                </ul>
              </div>
            </a>
          </li>
          <li className="otherProjects_item">
            <a
              target="_blank"
              className="otherProjects_link"
              href="https://rick-and-morty-app-alan-solis.netlify.app/"
            >
              <div className="otherProjects_container">
                <ul className="otherProjects_head">
                  <li className="bx bx-folder_container">
                    <i className="bx bx-folder"></i>
                  </li>
                  <div className="otherProjects_links_container">
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/Rick-and-Morty-App"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://rick-and-morty-app-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a
                    target="_blank"
                    href="https://rick-and-morty-app-alan-solis.netlify.app/"
                  >
                    Rick and Morty APP
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  Proyecto de app de Rick and Morty front-end construído a
                  partir de la api de Rick and Morty que permite visualizar cada
                  uno de los personajes de la serie registrados en ella en forma
                  de cartas distribuídas en una grilla, con filtro de búsqueda.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">React</li>
                  <li className="otherProjects_lenguages">JavaScript</li>
                  <li className="otherProjects_lenguages">CSS</li>
                </ul>
              </div>
            </a>
          </li>
          <li className="otherProjects_item">
            <a
              target="_blank"
              className="otherProjects_link"
              href="https://app-clima-alan-solis.netlify.app/"
            >
              <div className="otherProjects_container">
                <ul className="otherProjects_head">
                  <li className="bx bx-folder_container">
                    <i className="bx bx-folder"></i>
                  </li>
                  <div className="otherProjects_links_container">
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/app-del-clima"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://app-clima-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a
                    target="_blank"
                    href="https://app-clima-alan-solis.netlify.app/"
                  >
                    Weatherer APP
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  App del clima front-end que indica el estado actual del clima
                  de tu ubicación solicitando permiso desde el buscador para
                  obtener dicha información del usuario y cambia su estilo en
                  base al clima que figura actualmente.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">React</li>
                  <li className="otherProjects_lenguages">JavaScript</li>
                  <li className="otherProjects_lenguages">CSS</li>
                </ul>
              </div>
            </a>
          </li>
          <li className="otherProjects_item">
            <a
              target="_blank"
              className="otherProjects_link"
              href="https://academlo-ecommerce-alan-solis.netlify.app/"
            >
              <div className="otherProjects_container">
                <ul className="otherProjects_head">
                  <li className="bx bx-folder_container">
                    <i className="bx bx-folder"></i>
                  </li>
                  <div className="otherProjects_links_container">
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://github.com/AlanS2405/Ecommerce"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://academlo-ecommerce-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a
                    target="_blank"
                    href="https://academlo-ecommerce-alan-solis.netlify.app/"
                  >
                    Academlo E-commerce
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  E-commerce front-end realizado con JavaScript vanilla, HTML y
                  CSS que consume una api externa para desplegar una grilla de
                  productos de ropa. Cuenta además con filtro de búsqueda por
                  categoría, assí como dark mode y pantalla de carga.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">JavaScript</li>
                  <li className="otherProjects_lenguages">HTML</li>
                  <li className="otherProjects_lenguages">CSS</li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
