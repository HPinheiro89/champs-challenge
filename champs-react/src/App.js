import React from "react";
import "./App.css";
import Champ from "./components/Champ";

const champs = [
  {
    name: "Nocturne",
    image:
      "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/39/Skin_Loading_Screen_Cursed_Revenant_Nocturne.jpg/revision/20191215003644/scale-to-width-down/308",
    title: '"The Eternal Nightmare"'
  },
  {
    name: "Leona",
    image:
      "https://lolskin.weblog.vc/img/wallpaper/loading/Leona_11.jpg?10.13.1",
    title: '"The Radiant Dawn"'
  },
  {
    name: "Vi",
    image:
      "https://lolskin.weblog.vc/img/wallpaper/loading/Vi_2.jpg?10.13.1",
    title: '"The Piltover Enforcer"'
  },
  {
    name: "Jinx",
    image:
      "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d2/Skin_Loading_Screen_PROJECT_Jinx.jpg/revision/latest/scale-to-width-down/308?cb=20190728230506",
    title: '"The Loose Canon"'
  },
  {
    name: "Tahm Kench",
    image:
      "https://lolskinshop.com/wp-content/uploads/2015/06/TahmKench_1.jpg",
    title: '"The River King"'
  },
  {
    name: "Skarner",
    image:
      "https://i.pinimg.com/originals/4f/ac/b9/4facb933740ce1fd8e523ea671f78571.jpg",
    title: '"The Crystal Vanguard"'
  },
];

export default function App() {
  return (
    <div className="container">
      {champs.map((c, index) => (
        <div key={`c.name-${index}`} className="flex-item">
          <Champ name={c.name} image={c.image} title={c.title}/>
        </div>
      ))}
    </div>
  );
}

