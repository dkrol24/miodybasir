import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { homeInfoAnimation, footerTextAnimation } from "./animation";
import { AiOutlinePhone } from "react-icons/ai";
const Contact = () => {
  const [element, controls] = useScroll();
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    warning: "",
  });
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_vp66n7q", "template_awe19s9", values, "smQiWYotfaIg-1_RE")
      .then(
        (response) => {
          console.log("Wiadomość wysłana!", response);
          setValues({
            fullName: "",
            email: "",
            phone: "",
            message: "",

            warning: "",
          });
          setStatus(true);
        },
        (error) => {
          console.log("Podaj dane i zaakceptuj regulamin.", error);
        }
      );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="banner-h1">Kontakt</h1>

      {!status ? (
        <form
          ref={element}
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRight: "5px dotted rgba(222,151,9,255)",
            borderLeft: "5px dotted rgba(222,151,9,255)",
          }}
        >
          <motion.input
            variants={footerTextAnimation}
            animate={controls}
            transition={{
              delay: 0.1,
              type: "tween",
              duration: 0.7,
            }}
            style={{
              padding: "1rem",
              border: "2px dotted rgba(222,151,9,255)",
              outline: "none",
              width: "100%",
              maxWidth: "600px",
              borderRadius: "32px",
              marginBottom: "1rem",
            }}
            required
            type="text"
            placeholder="Imię i nazwisko"
            name="fullName"
            value={values.fullName}
            handleChange={handleChange}
          />

          <motion.input
            variants={homeInfoAnimation}
            animate={controls}
            transition={{
              delay: 0.1,
              type: "tween",
              duration: 0.7,
            }}
            style={{
              padding: "1rem",
              border: "2px dotted rgba(222,151,9,255)",
              outline: "none",
              width: "100%",
              maxWidth: "600px",
              borderRadius: "32px",
              marginBottom: "1rem",
            }}
            required
            type="email"
            placeholder="Adres e-mail"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />

          <motion.input
            variants={footerTextAnimation}
            animate={controls}
            transition={{
              delay: 0.1,
              type: "tween",
              duration: 0.7,
            }}
            style={{
              padding: "1rem",
              border: "2px dotted rgba(222,151,9,255)",
              outline: "none",
              width: "100%",
              maxWidth: "600px",
              marginBottom: "1rem",
              borderRadius: "32px",
            }}
            type="phone"
            placeholder="Numer telefonu"
            name="phone"
            value={values.phone}
            handleChange={handleChange}
          />

          <motion.textarea
            variants={homeInfoAnimation}
            animate={controls}
            transition={{
              delay: 0.1,
              type: "tween",
              duration: 0.7,
            }}
            required
            style={{
              padding: "1rem",
              border: "2px dotted rgba(222,151,9,255)",
              outline: "none",
              width: "100%",
              minHeight: "150px",
              maxWidth: "600px",
              borderRadius: "32px",
              marginBottom: "1rem",
            }}
            placeholder="Napisz do Nas"
            value={values.message}
            name="message"
            handleChange={handleChange}
          />

          <motion.button
            variants={footerTextAnimation}
            animate={controls}
            transition={{
              delay: 0.1,
              type: "tween",
              duration: 0.7,
            }}
            type="submit"
            className="yellow-button"
            style={{ width: "100%", maxWidth: "600px", zIndex: "99" }}
          >
            Wyślij
          </motion.button>
          <div className="app__contact-checkbox">
            <input
              name="warning"
              type="checkbox"
              style={{ width: "15px", height: "15px" }}
              required
              value={values.warning}
              onClick={() => setCheckboxChecked(!checkboxChecked)}
            />
            <p
              className="p-text"
              style={{
                fontSize: "10px",
                maxWidth: "600px",
                margin: "0",
              }}
              handleChange={handleChange}
            >
              Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o
              ochronie danych osobowych w związku z wysłaniem zapytania przez
              formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania. Zostałem poinformowany, że
              przysługuje mi prawo dostępu do swoich danych, możliwości ich
              poprawiania, żądania zaprzestania ich przetwarzania.
              Administratorem danych osobowych są Miody Konarscy.
            </p>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="yellow-span">
            Dziękujemy za wysłanie wiadomości! Odpowiemy jak najszybciej się da!
          </h3>
        </div>
      )}
      <h1 className="yellow-span">
        <AiOutlinePhone /> 507 101 771
      </h1>
    </div>
  );
};
export default Contact;
