import "./Styles/Studies.css";

const Studies = () => {
  return (
    <section className="studies" id="studies">
      <h2 className="studies_title">
        <span>02.</span> Where I studied
      </h2>
      <ul className="studies_list">
        <li className="studies_item">
          <p className="studies_dates">July 2023 - August 2023</p>
          <h3 className="studies_item_title">
            Back-End Development with NodeJs <span>at Academlo</span>
          </h3>
          <p className="studies_item_description">
            Finally, the last two months at academlo were dedicated to learn how
            to manage the Back-End using NodeJs and PostgreSQL to convert my web
            applications into full stack applications and create new ones with
            everything I had learned so far.
          </p>
        </li>
        <li className="studies_item">
          <p className="studies_dates">May 2023 - June 2023</p>
          <h3 className="studies_item_title">
            Front-End Development with ReactJs <span>at Academlo</span>
          </h3>
          <p className="studies_item_description">
            During the next two months at Academlo I had the opportunity to
            perform multiple projects using this powerful JavaScript library.
            This allowed me to acquire a solid knowledge and experience in
            building modern and responsive user interfaces.
          </p>
        </li>
        <li className="studies_item">
          <p className="studies_dates">April 2023 - May 2023</p>
          <h3 className="studies_item_title">
            Fundations in HTML, CSS and JavaScript <span>at Academlo</span>
          </h3>
          <p className="studies_item_description">
            For two months, I participated in Academlo's bootcamp, where I
            acquired solid programming fundamentals using HTML, CSS and
            JavaScript. During this intense program, I was able to develop
            practical skills and deepen my understanding of building dynamic and
            interactive websites.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Studies;
