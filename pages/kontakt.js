import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import Map from "../components/Map";
import { AiOutlinePhone } from "react-icons/ai";
const Kontakt = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    warning: "",
  });
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_egcfkts", "template_dpdogpm", values, "l2XYLd6SKrB6rrvoZ")
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
          setLoading(true);
        },
        (error) => {
          console.log("Podaj dane i zaakceptuj regulamin.", error);
        }
      );
  };

  return (
    <div className="loginregister">
      <h1 style={{ marginTop: "5rem" }} className="banner-h1">
        Kontakt
      </h1>
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
          <motion.input
            initial={{
              x: 400,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
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
              x: -400,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
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

          <motion.input
            initial={{
              x: 400,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
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
            required
            type="phone"
            placeholder="Numer telefonu"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />

          <motion.textarea
            initial={{
              x: -400,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
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
              x: 400,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
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
                color: "white",
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
      <Map />
    </div>
  );
};
export default Kontakt;
