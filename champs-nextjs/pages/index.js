import Head from 'next/head';
import Champ from "../components/Champ";


const champs = [
  {
    name: "Nocturne",
    image:
      "../images/Nocturne.jpg",
    title: '"The Eternal Nightmare"'
  },
  {
    name: "Leona",
    image:
    "../images/Leona.jpg",
    title: '"The Radiant Dawn"'
  },
  {
    name: "Vi",
    image:
      "../images/Vi.jpg",
    title: '"The Piltover Enforcer"'
  },
  {
    name: "Jinx",
    image:
    "../images/Jinx.jpg",
    title: '"The Loose Canon"'
  },
  {
    name: "Tahm Kench",
    image:
      "../images/Tahm Kench.jpg",
    title: '"The River King"'
  },
  {
    name: "Skarner",
    image:
      "../images/Skarner.jpg",
    title: '"The Crystal Vanguard"'
  },
];

export default function App() {
  return ( <div>
    <h1>Favorite League Champs</h1>
    <div className="container">
      {champs.map((c, index) => (
        <div key={`c.name-${index}`} className="flex-item">
          <Champ name={c.name} image={c.image} title={c.title}/>
        </div>
      ))}
    </div>
    </div>
  );
}

