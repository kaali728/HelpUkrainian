import React from "react";
import { Button, Text, Spacer } from "@findnlink/ui";
import scss from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={scss.footer}>
      <Button primary>
        <a
          href="https://twitter.com/intent/tweet?text=Fl%C3%BCchtlinge%20sind%20laut%20unserem%20aktuellen%20Kenntnisstand%20auf%20der%20Suche%20nach%20Sicherheit%20und%20Frieden.%20Egal%2C%20ob%20du%20Sachspenden%2C%20Zeit%20oder%20aber%20auch%0Aein%20vorl%C3%A4ufiges%20Zuhause%20anbieten%20kannst%2C%20Deutschland%20hilft%20listet%20passende%20Ansprechpartner%3Ainnen%20auf.%20%0A%0Ahttps%3A%2F%2Fdehilft.de"
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
      <Spacer />
      <Text>
        <div className={scss.contactUs}>
          <a href="https://www.findnlink.com/de/legal?select=2" target="_blank">
            Impressum
          </a>
          <span className={scss.spacer}> |</span> Kontaktiere uns:&nbsp;
          <a href="mailto:contact@findnlink.com" target="_blank">
            contact@findnlink.com
          </a>
        </div>
      </Text>
      <Spacer />
      <Text>
        Mit 💗 von{" "}
        <a href="https://www.findnlink.com/de/aboutUs" target="_blank">
          Findnlink
        </a>{" "}
        entwickelt.
      </Text>
      <Spacer />
    </div>
  );
}
