import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Studies from "./Components/Studies";
import Works from "./Components/Works";
import NavBarItems from "./Components/NavBarItems";
import Hero from "./Components/Hero";
import CVButton from "./Components/CVButton";
import axios from "./utils/axios";
import { useForm } from "react-hook-form";

function App() {
  const [sidebar, setSidebar] = useState("");

  const handleSidebar = () => {
    if (sidebar === "") {
      setSidebar("sidebarActive");
    } else {
      setSidebar("");
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    variant: "",
    message: "",
  });

  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    setIsLoading(true);
    axios.post("/emails/contact", data);
    // .then(() =>
    //   setNotification({
    //     show: true,
    //     variant: "success",
    //     message: "Message sent!",
    //   })
    // )
    // .catch(() =>
    //   setNotification({
    //     show: true,
    //     variant: "danger",
    //     message: "There was an error",
    //   })
    // )
    // .finally(() => setIsLoading(false));
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <a href="#hero">
            <img className="navbar_logo" src="./AS-logo.svg" alt="logo" />
          </a>
          <div className="navIcons_desk">
            <NavBarItems />
            <CVButton />
          </div>
          <button className="menu_icon" onClick={handleSidebar}>
            <i className="bx bx-menu-alt-right bx-burst-active"></i>
          </button>
          <aside className={`sidebar ${sidebar}`}>
            <button className="sidebar_x" onClick={handleSidebar}>
              {" "}
              x{" "}
            </button>
            <NavBarItems handleSidebar={handleSidebar} />
            <CVButton />
          </aside>
        </nav>
      </header>

      <main className="main">
        <Hero />
        <AboutMe />
        <Studies />
        <Works />
        <Contact
          register={register}
          handleSubmit={handleSubmit}
          submit={submit}
        />
      </main>

      <footer className="footer">
        <p className="footer_p">
          Built by <span>Alan Solís</span>
        </p>
        <ul className="footer_ul">
          <li className="footer_item">
            <a target="_blank" href="https://github.com/AlanS2405/portfolio">
              <i className="bx bxl-github"></i>
            </a>
          </li>
          <li className="footer_item">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alan-sol%C3%ADs/"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
