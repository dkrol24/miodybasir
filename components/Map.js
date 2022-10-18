import React from "react";

const Map = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        padding: "0 3rem 0 3rem",
        borderRight: "5px dotted rgba(222,151,9,255)",
        borderLeft: "5px dotted rgba(222,151,9,255)",
      }}
    >
      {/* eslint-disable-next-line */}

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2467.580712154439!2d21.159157!3d51.79554900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718e0bbf3a41c2d%3A0x7bd08e66da70e347!2sElizy%20Orzeszkowej%202A%2C%2005-660%20Warka!5e0!3m2!1spl!2spl!4v1666017211404!5m2!1spl!2spl"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
