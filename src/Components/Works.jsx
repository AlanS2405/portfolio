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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro est,
            repellat consectetur labore doloremque minima similique
            exercitationem velit quam vitae ad dolorum dolore ratione ipsam a
            nostrum ex quis assumenda.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta beatae cumque ea voluptas necessitatibus modi quas
                  commodi ad? Repellendus, eum. Nemo repellat, laudantium natus
                  laboriosam sapiente repudiandae distinctio corrupti.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta beatae cumque ea voluptas necessitatibus modi quas
                  commodi ad? Repellendus, eum. Nemo repellat, laudantium natus
                  laboriosam sapiente repudiandae distinctio corrupti.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta beatae cumque ea voluptas necessitatibus modi quas
                  commodi ad? Repellendus, eum. Nemo repellat, laudantium natus
                  laboriosam sapiente repudiandae distinctio corrupti.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta beatae cumque ea voluptas necessitatibus modi quas
                  commodi ad? Repellendus, eum. Nemo repellat, laudantium natus
                  laboriosam sapiente repudiandae distinctio corrupti.
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
                        href="https://github.com/AlanS2405/galleta-de-la-fortuna"
                      >
                        <i className="bx bxl-github"></i>
                      </a>
                    </li>
                    <li className="otherProjects_links_items">
                      <a
                        target="_blank"
                        href="https://galleta-de-la-fortuna-alan-solis.netlify.app/"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    </li>
                  </div>
                </ul>
                <h3 className="otherProjects_item_title">
                  <a
                    target="_blank"
                    href="https://galleta-de-la-fortuna-alan-solis.netlify.app/"
                  >
                    Fortune Cookie APP
                  </a>
                </h3>
                <p className="otherProjects_item_description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta beatae cumque ea voluptas necessitatibus modi quas
                  commodi ad? Repellendus, eum. Nemo repellat, laudantium natus
                  laboriosam sapiente repudiandae distinctio corrupti.
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  soluta beatae cumque ea voluptas necessitatibus modi quas
                  commodi ad? Repellendus, eum. Nemo repellat, laudantium natus
                  laboriosam sapiente repudiandae distinctio corrupti.
                </p>
                <ul className="otherProjects_lenguages_container">
                  <li className="otherProjects_lenguages">React</li>
                  <li className="otherProjects_lenguages">JavaScript</li>
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
