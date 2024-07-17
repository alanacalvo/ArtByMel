import "./ContactForm.scss";

const ContactForm = (props) => {
  return (
    <>
      <div className="contact-form">
        <div className="form-title">
          <h4 className="section-title">{props.title}</h4>
          <h2 className="headline">{props.headline}</h2>
        </div>
        <form name="form-name" method="POST" value={props.value} netlify>
          <div className="name-textbox">
            <label>Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="email-textbox">
            <label>Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="phone-textbox">
            <label>Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="message-textbox">
            <label>Message</label>
            <textarea id="message" name="message" rows="10" />
          </div>
          <button className="submit-btn" type="submit">
            Submit Request
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
