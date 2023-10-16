import "./Styles/Contact.css";
const Contact = ({ register, handleSubmit, submit }) => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact_title">
        <span>04.</span> Get In Touch
      </h2>
      <p className="contact_p">
        Currently, I am looking for new job opportunities where I can apply my
        acquired skills and knowledge. If your company is interested in a
        passionate Full Stack Developer with experience in HTML, CSS,
        JavaScript, React, NodeJs, Express and PostgreSQL do not hesitate to
        contact me. I am available for an interview or any additional
        information you may need.
      </p>

      <form className="contact_form" onSubmit={handleSubmit(submit)}>
        <div className="contact_fields">
          <div>
            <h3>Name</h3>
            <input placeholder="let name=" {...register("name")} type="text" />
          </div>
          <div>
            <h3>Email</h3>
            <input
              className=""
              placeholder="let email="
              {...register("email")}
              type="text"
            />
          </div>
          <div className="contact_message">
            <h3>Message</h3>
            <textarea
              className="field_message"
              placeholder="let message= "
              {...register("message")}
              type="text"
            />
          </div>
        </div>
        <div className="contact_btns">
          <button className="contact_btn" type="submit">
            <p>Send me a message!</p>
          </button>
          <p className="or">Or...</p>
          <a
            className="contact_link"
            target="_blank"
            href="mailto:alan.solis.dev@gmail.com"
          >
            Use your email server
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
