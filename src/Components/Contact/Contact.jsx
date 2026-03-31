import React, { useState } from "react";
import "./Contact.css";
import avatar from "@/assets/images/avatar.png";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    data.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__title">Connect with me</h2>

        <div className="contact__grid">
          {/* Left — Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success" role="alert" aria-live="polite">
                <p>Thanks for reaching out — I'll get back to you soon.</p>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                aria-label="Contact form"
                noValidate
              >
                <fieldset className="contact__fieldset">
                  {/* Web3Forms honeypot */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="contact__honeypot"
                  />
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="contact__input"
                      required
                      autoComplete="name"
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="email" className="contact__label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="contact__input"
                      required
                      autoComplete="email"
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="message" className="contact__label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="contact__textarea"
                      rows="6"
                      required
                    />
                  </div>

                  {error && (
                    <p className="contact__error" role="alert">
                      Something went wrong. Please try again or email me
                      directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="contact__button"
                    disabled={loading}
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </button>
                </fieldset>
              </form>
            )}
          </div>

          {/* Right — Info */}
          <div className="contact__info">
            <div className="contact__email-wrap">
              <span className="contact__email-label">Prefer email?</span>
              <a
                href="mailto:omaralzubi.dev@gmail.com"
                className="contact__email"
                aria-label="Send an email to omaralzubi.dev@gmail.com"
              >
                omaralzubi.dev@gmail.com
              </a>
            </div>

            <div className="contact__avatar-wrap">
              <img
                src={avatar}
                alt="A desk setup with a coffee mug, phone, and computer screen"
                className="contact__avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
