import React from "react";
import "./App.css";
import Champ from "./components/Champ";

const champs = [
  {
    name: "Nocture",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"
  },
  {
    name: "Nocture",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"
  },
  {
    name: "Nocture",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"
  },
  {
    name: "Nocture",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"
  },
  {
    name: "Nocture",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"
  },
  {
    name: "Nocture",
    image:
      "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"
  },
];

export default function App() {
  return (
    <div className="grid">
      {champs.map((c, index) => (
        <div key={`c.name-${index}`} className="grid-item">
          <Champ name={c.name} image={c.image} />
        </div>
      ))}
    </div>
  );
}

