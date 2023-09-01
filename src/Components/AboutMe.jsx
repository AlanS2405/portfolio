import "./Styles/AboutMe.css";

const AboutMe = () => {
  return (
    <section id="aboutMe" className="aboutMe">
      <h2 className="aboutMe_title">
        <span>01.</span> About me
      </h2>
      <div className="block_1">
        <div className="aboutMe_description">
          <p>
            Hello, my name is Alan. I'm a web developer who enjoys creating
            custom and functional websites.
          </p>
          <p>
            I started dabbling in programming at the beginning of 2023 and I
            found great satisfaction in it. That's why I'm always learning new
            technologies and tools to improve my skills and offer better
            solutions.
          </p>
          <p>
            Currently I have experience in front end web development with html,
            css, javascript, react js, NodeJs and postgreSQL, and I am
            interested in expanding my knowledge in other areas such as back end
            and web security.
          </p>
          <p>
            My goal is to create products that are attractive, responsive and
            adaptable to your users' needs.
          </p>
        </div>
        <ul className="aboutMe_lenguages">
          <li className="aboutMe_item">
            <img className="aboutMe_leng" src="html-logo.png" alt="html-logo" />
            <h3>HTTP5</h3>
          </li>
          <li className="aboutMe_item">
            <img className="aboutMe_leng" src="css-logo.png" alt="css-logo" />
            <h3>CSS3</h3>
          </li>
          <li className="aboutMe_item">
            <img
              className="aboutMe_leng"
              src="javascript-logo.png"
              alt="js-logo"
            />
            <h3>JavaScript</h3>
          </li>
          <li className="aboutMe_item">
            <img
              className="aboutMe_leng"
              src="react-logo.png"
              alt="react-logo"
            />
            <h3>React Js</h3>
          </li>
        </ul>
      </div>
      <div className="block_2">
        <div className="my_picture_container">
          <img className="my-picture" src="../mi_foto.png" alt="my-picture" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
