import React, { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Store } from "../utils/Store";

const Contact = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const { state } = useContext(Store);
  const { userInfo } = state;
  const username = userInfo.name;
  const useremail = userInfo.email;
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    useremail: useremail,
    username: username,
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
      .send("service_fd4t93h", "template_8fxj7qm", values, "mT-xZh8APxwP8KF2z")
      .then(
        (response) => {
          console.log("Wiadomość wysłana!", response);
          setValues({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatus(true);
        },
        (error) => {
          console.log("Podaj dane i zaakceptuj regulamin.", error);
        }
      );
  };

  return (
    <div className="contact-test-bg">
      <h1 className="banner-h1">Kontakt</h1>

      {!status ? (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          {userInfo ? (
            <>
              <motion.input
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
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
                placeholder={username}
                name="fullName"
                value={values.username}
                onChange={handleChange}
              />
              <motion.input
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
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
                placeholder={useremail}
                name="email"
                value={values.useremail}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <motion.input
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.2,
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
                onChange={handleChange}
              />
              <motion.input
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
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
                onChange={handleChange}
              />
            </>
          )}

          <motion.input
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
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
            onChange={handleChange}
          />

          <motion.textarea
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
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
            onChange={handleChange}
          />

          <motion.button
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            type="submit"
            className="yellow-button"
            style={{ width: "100%", maxWidth: "600px" }}
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
                color: "black",
              }}
              onChange={handleChange}
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
    </div>
  );
};
export default Contact;
