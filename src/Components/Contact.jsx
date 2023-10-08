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
        passionate Front-End Developer with experience in HTML, CSS, JavaScript
        and React, do not hesitate to contact me. I am available for an
        interview or any additional information you may need.
      </p>
      <form onSubmit={handleSubmit(submit)}>
        <h3>Name:</h3>
        <input
          className=""
          placeholder="your name"
          {...register("name")}
          type="text"
        />
        <h3>Email:</h3>
        <input
          className=""
          placeholder="your email"
          {...register("email")}
          type="text"
        />
        <h3>Message:</h3>
        <input
          className=""
          placeholder="your message"
          {...register("message")}
          type="text"
        />
        <button className="contact_btn" type="submit">
          <p>Send me a message!</p>
        </button>
        <p className="contact_p">Or...</p>
        <button className="contact_btn">
          <a target="_blank" href="mailto:alan.solis.dev@gmail.com">
            Use your email server
          </a>
        </button>
      </form>
    </section>
  );
};

export default Contact;
