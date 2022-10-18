import React from "react";
import { kitpszczeli } from "./data";
const Kit = () => {
  return (
    <div>
      {kitpszczeli.map((index) => {
        const {
          tekst0,
          tekst1,
          tekst2,
          tekst3,
          tekst4,
          tekst5,
          tekst6,
          tekst7,
          tekst8,
          tekst9,
          tekst10,
          tekst11,
          tekst12,
          tekst13,
          tekst14,
          tekst15,
          tekst16,
          tekst17,
          tekst18,
          tekst19,
          tekst20,
          tekst21,
          tekst22,
          tekst23,
          tekst24,
          tekst25,
          tekst26,
          tekst27,
          tekst28,
          tekst29,
          tekst30,
          tekst31,
          tekst32,
          tekst33,
          tekst34,
          tekst35,
          tekst36,
        } = index;
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
            <h1
              style={{
                borderLeft: "5px dotted rgba(222,151,9,255)",
                borderRight: "5px dotted rgba(222,151,9,255)",
                padding: "1rem",
              }}
              className="banner-h1"
            >
              Dowiedz się więcej
            </h1>
            <div className="productdetail-kit">
              <h2 className="yellow-span">W kicie pszczelim znajduje się:</h2>
              <ul
                style={{
                  width: "100%",
                  listStyle: "none",
                  maxWidth: "1000px",
                  margin: "0",
                  padding: "0",
                }}
              >
                <li className="grey-ptext">{tekst0}</li>
                <li className="grey-ptext">{tekst1}</li>
                <li className="grey-ptext">{tekst2}</li>
                <li className="grey-ptext">{tekst3}</li>
                <li className="grey-ptext">{tekst4}</li>
                <li className="grey-ptext">{tekst5}</li>
              </ul>
              <p>{tekst6}</p>
            </div>

            <div className="productdetail-kit">
              <h1 className="yellow-span">{tekst7}</h1>
              <p
                className="grey-ptext"
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                }}
              >
                {tekst8}
              </p>
              <p
                className="grey-ptext"
                style={{
                  width: "100%",
                  maxWidth: "1000px",
                }}
              >
                {tekst9}
              </p>
            </div>

            <div className="productdetail-kit">
              <h2 className="yellow-span">Stosowanie</h2>
              <ul
                style={{
                  width: "100%",
                  listStyle: "none",
                  maxWidth: "1000px",
                  margin: "0",
                  padding: "0",
                }}
              >
                <p className="yellow-span">{tekst10}</p>
                <li className="grey-ptext">{tekst11}</li>
                <li className="grey-ptext">{tekst12}</li>
                <li className="grey-ptext">{tekst13}</li>
              </ul>

              <ul
                style={{
                  width: "100%",
                  listStyle: "none",
                  maxWidth: "1000px",
                  margin: "0",
                  padding: "0",
                }}
              >
                <p className="yellow-span">{tekst14}</p>
                <li className="grey-ptext">{tekst15}</li>
                <li className="grey-ptext">{tekst16}</li>
                <li className="grey-ptext">{tekst17}</li>
              </ul>
              <ul
                style={{
                  width: "100%",
                  listStyle: "none",
                  maxWidth: "1000px",
                  margin: "0",
                  padding: "0",
                }}
              >
                <p className="yellow-span">{tekst18}</p>
                <li className="grey-ptext">{tekst19}</li>
                <li className="grey-ptext">{tekst20}</li>
                <li className="grey-ptext">{tekst21}</li>
              </ul>
            </div>

            <div className="productdetail-kit">
              <h1 className="yellow-span">{tekst22}</h1>
              <p
                className="grey-ptext"
                style={{ width: "100%", maxWidth: "1000px" }}
              >
                {tekst23}
              </p>
              <ul
                style={{
                  width: "100%",
                  listStyle: "none",
                  maxWidth: "1000px",
                  margin: "0",
                  padding: "0",
                }}
              >
                <li className="grey-ptext">
                  <p className="yellow-span">{tekst24}</p>
                  <br />
                  {tekst25}
                  <br />
                  {tekst26}
                </li>
                <li className="grey-ptext">
                  <p className="yellow-span">{tekst27}</p>
                  <br />
                  {tekst28}
                </li>
                <li className="grey-ptext">
                  <p className="yellow-span">{tekst29}</p>
                  <br />
                  {tekst30}
                </li>
                <li className="grey-ptext">
                  <p className="yellow-span">{tekst31}</p> <br />
                  {tekst32}
                </li>
                <li className="grey-ptext">
                  <p className="yellow-span">{tekst33}</p>
                  <br />
                  {tekst34}
                </li>
                <li className="grey-ptext">
                  <p className="yellow-span">{tekst35}</p> <br />
                  {tekst36}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Kit;
