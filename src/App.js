import { useState } from "react";
import "./App.scss";
import "@findnlink/ui/dist/style.css";
import { Button, Modal, Input } from "@findnlink/ui";

//Helper
//name
//about you
//what you offer, how many person
//can you pick them up? yes,no
//which area
//photo
//how can the person contact you? email, telegram, telefon, twitter, discord

//refugee
//name
//where are you
//what do you need
//how necessary, 1-5: 1 is not neccessary and 5 is necessary

function App() {
  const [open, setOpen] = useState({ helper: false, refugee: false });

  return (
    <div>
      <div className="header">
        <span className="title">Help War refugees</span>
        <span className="description">
          This platform is for people who give Ukrainian war refugees a
          temporary safe place. You can register and Ukrainians can find you
          easily and faster. On the other hand, Ukrainian people can post what
          they need at that moment and how necessary, and someone can fill that
          need for them.
        </span>
        <span className="quote">
          “The world will not be destroyed by those who do evil, but by those
          who watch them without doing anything.” — Albert Einstein
        </span>
        <div className="HeaderButton">
          <Button
            primary
            size="l"
            style={{ margin: "5px" }}
            onClick={() => setOpen((prev) => ({ ...prev, helper: true }))}
          >
            I want to help
          </Button>
          <Button
            primary
            size="l"
            style={{ margin: "5px" }}
            onClick={() => setOpen((prev) => ({ ...prev, refugee: true }))}
          >
            я україна
          </Button>
        </div>
      </div>
      <Modal
        open={open.helper}
        onClose={() => setOpen((prev) => ({ ...prev, helper: false }))}
      >
        <Input placeholder="Your name" />
        <Input placeholder="About you" />
        <Input placeholder="What do you offer?" />
        <Button>Submit</Button>
      </Modal>
      <Modal
        open={open.refugee}
        onClose={() => setOpen((prev) => ({ ...prev, refugee: false }))}
      >
        <Input placeholder="Твоє ім'я (Your name)" />
        <Input placeholder="Ти де? (Where are you)" />
        <Input placeholder="Що тобі потрібно? (What do you need?)" />
        <Input placeholder="Що тобі потрібно? (What do you need?)" />
        <Button>подати</Button>
      </Modal>
      {/*       <div>
        <h1>How can I help</h1>
        <div>1. Offering a safe Space</div>
        <div>2. See what people need and maybe you can get it for them</div>
      </div> */}
    </div>
  );
}

export default App;
