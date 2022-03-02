import { useEffect, useState, useRef } from "react";
import "./App.scss";
import "@findnlink/ui/dist/style.css";
import { Button, Modal, Input, Text, Spacer, DropDown } from "@findnlink/ui";
import Category from "./components/Category";
import Footer from "./components/Footer";
import { categories } from "./categories";

function App() {
  const [data, setData] = useState(categories);
  const [open, setOpen] = useState({ helper: false, contact: false });
  const [orte, setOrte] = useState([]);
  const [cats, setCats] = useState([]);
  const [selectedOrt, setSelectedOrt] = useState(null);
  const [selectedCat, setSelectedCat] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let _orte = [];
    let _cats = [];
    categories.map((cat) => {
      if (_cats.indexOf(cat.name) === -1) {
        _cats.push(cat.name);
      }
      cat.organisations.map((org) => {
        if (_orte.indexOf(org.ort) === -1 && org.ort.length > 0) {
          _orte.push(org.ort);
        }
      });
    });

    _orte = _orte
      .sort((a, b) => a.localeCompare(b))
      .map((ort) => {
        return { children: ort };
      });
    _cats = _cats.map((c) => {
      return { children: c };
    });
    _cats.unshift({ children: "Alle" });

    setOrte(_orte);
    setCats(_cats);
  }, [categories]);

  useEffect(() => {
    if (selectedOrt !== null) {
      let _data = [];
      if (orte[selectedOrt].children !== "Deutschland") {
        categories.map((cat) => {
          let _cat = Object.assign({}, cat);
          _cat.organisations = _cat.organisations.filter((org) => {
            if (org.ort === orte[selectedOrt].children) {
              return org;
            }
          });
          _data.push(_cat);
        });
        /* if (selectedCat !== null) {
          _data = _data.filter((cat) => {
            if (cat.name === cats[selectedCat].children) {
              return cat;
            }
          });
        } */
      }
      if (orte[selectedOrt].children === "Deutschland") {
        _data = categories;
      }
      setSelectedCat(null);
      setData(_data);
    }
  }, [selectedOrt]);

  useEffect(() => {
    if (selectedCat !== null) {
      let _data = [];
      if (cats[selectedCat].children !== "Alle") {
        _data = categories.filter((cat) => {
          if (cat.name === cats[selectedCat].children) {
            return cat;
          }
        });
      }
      if (cats[selectedCat].children === "Alle") {
        _data = categories;
      }
      setSelectedOrt(null);
      setData(_data);
    }
  }, [selectedCat]);

  return (
    <div className="wrapper">
      <span className="logo">
        <Button primary>
          <a
            href="https://twitter.com/intent/tweet?text=%C3%9Cber%20600.000%20Fl%C3%BCchtlinge%20sind%20laut%20unserem%20aktuellen%20Kenntnisstand%20auf%20der%20Suche%20nach%20Sicherheit%20und%20Frieden.%20Egal%2C%20ob%20du%20Sachspenden%2C%20Zeit%20oder%20aber%20auch%0Aein%20vorl%C3%A4ufiges%20Zuhause%20anbieten%20kannst%2C%20Deutschland%20hilft%20listet%20passende%20Ansprechpartner%3Ainnen%20auf.%20%0A%0Ahttps%3A%2F%2Fdehilft.de"
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
            onClick={() => {
              setOpen((prev) => ({ ...prev, helper: true }));
              scrollRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Helfen
          </Button>
        </div>
      </div>
      <div className="dropdownWrapper">
        <div className="cityWrapper" ref={scrollRef}>
          <Text scale="l">Wähle deinen Standort: </Text>
          <DropDown
            items={orte}
            selected={selectedOrt}
            setSelected={setSelectedOrt}
            placeholder="Deutschland"
          />
        </div>

        <div className="cityWrapper">
          <Text scale="l">Wähle eine Kategorie: </Text>
          <DropDown
            items={cats}
            selected={selectedCat}
            setSelected={setSelectedCat}
            placeholder="Alle"
          />
        </div>
      </div>

      <div className="categoryWrapper">
        {data.map((cat, i) => (
          <Category
            name={cat.name}
            organisationen={cat.organisations}
            key={i}
          />
        ))}
      </div>

      <Footer />

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
          Organisations Name: <br /> Standort: <br />
          Website: <br />
          Kategorien (Spenden, Hotlinedienst, Kinder- und Hygieneartikel...):
          <br />
        </Text>
      </Modal>
    </div>
  );
}

export default App;
