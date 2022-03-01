import { useEffect, useState } from "react";
import "./App.scss";
import "@findnlink/ui/dist/style.css";
import { Button, Modal, Input, Text, Spacer, DropDown } from "@findnlink/ui";
import Category from "./components/Category";
import Footer from "./components/Footer";
import data from "./data.json";

function App() {
  const [open, setOpen] = useState({ helper: false, contact: false });
  const [orte, setOrte] = useState([]);
  const [selectedOrt, setSelectedOrt] = useState(null);

  useEffect(() => {
    let _orte = [];

    data.category.map((cat) => {
      cat.organisations.map((org) => {
        if (_orte.indexOf(org.ort) === -1) {
          _orte.push(org.ort);
        }
      });
    });

    _orte = _orte.map((ort) => {
      return { children: ort };
    });

    setOrte(_orte);
  }, [data]);

  return (
    <div className="wrapper">
      <span className="logo">
        <Button primary>
          <a
            href="https://twitter.com/intent/tweet?text=%C3%9Cbersicht%20der%20Hilfsorganisationen%20f%C3%BCr%20ukrainische%20Fl%C3%BCchtlinge"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "var(--text100)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.656"
              height="13.527"
              viewBox="0 0 16.656 13.527"
              style={{ marginRight: "5px" }}
            >
              <path
                id="Icon_awesome-twitter"
                data-name="Icon awesome-twitter"
                d="M14.944,6.752c.011.148.011.3.011.444a9.646,9.646,0,0,1-9.712,9.712A9.646,9.646,0,0,1,0,15.376a7.062,7.062,0,0,0,.824.042A6.836,6.836,0,0,0,5.062,13.96a3.42,3.42,0,0,1-3.192-2.367,4.3,4.3,0,0,0,.645.053,3.61,3.61,0,0,0,.9-.116A3.414,3.414,0,0,1,.676,8.179V8.137a3.438,3.438,0,0,0,1.543.433A3.419,3.419,0,0,1,1.162,4,9.7,9.7,0,0,0,8.2,7.576a3.854,3.854,0,0,1-.085-.782,3.417,3.417,0,0,1,5.908-2.336,6.721,6.721,0,0,0,2.167-.824,3.4,3.4,0,0,1-1.5,1.881,6.843,6.843,0,0,0,1.966-.528,7.338,7.338,0,0,1-1.712,1.765Z"
                transform="translate(0 -3.381)"
                fill="#a7a8a8"
              />
            </svg>
            Auf Twitter teilen
          </a>
        </Button>
      </span>
      <div className="header">
        <span className="title">670.000</span>
        <span className="description">
          Flüchtlinge sind laut unserem aktuellen Kenntnisstand auf der Suche
          nach Sicherheit und Frieden. Egal, ob du Sachspenden, Zeit oder aber
          auch ein vorläufiges Zuhause anbieten kannst, Deutschland hilft listet
          passende Ansprechpartner:innen auf.
        </span>
        <div className="HeaderButton">
          <Button
            scale="l"
            style={{ margin: "5px" }}
            onClick={() => setOpen((prev) => ({ ...prev, contact: true }))}
          >
            Organisation hinzufügen
          </Button>
          <Button
            primary
            scale="l"
            style={{ margin: "5px" }}
            onClick={() => setOpen((prev) => ({ ...prev, helper: true }))}
          >
            Helfen
          </Button>
        </div>
      </div>

      <div className="CityWrapper">
        <Text scale="l">Deine Stadt</Text>
        <DropDown
          items={orte}
          selected={selectedOrt}
          setSelected={setSelectedOrt}
        />
      </div>

      <div className="categoryWrapper">
        {data.category.map((cat, i) => (
          <Category
            name={cat.name}
            organisationen={cat.organisations}
            key={i}
          />
        ))}
      </div>

      <Modal
        open={open.contact}
        onClose={() => setOpen((prev) => ({ ...prev, contact: false }))}
      >
        <Text>
          Kontaktiere uns: <Spacer />
          <Text>
            <span style={{ color: "var(--primary)" }}>
              contact@findnlink.com
            </span>
          </Text>
          <Spacer />
          Bitte in der Email angeben: <br />
          Organisations Name, Standort, Website, Kategorien (Spenden,
          Hotlinedienst, Kinder- und Hygieneartikel...)
        </Text>
      </Modal>
    </div>
  );
}

export default App;
