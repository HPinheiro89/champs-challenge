import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <body className="full-page">
    <h1 className="page-title">Favorite League of Legends Champs</h1>
    <div className="flex-container">
      <div className="flex-item">
        <img
          src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/39/Skin_Loading_Screen_Cursed_Revenant_Nocturne.jpg/revision/20191215003644/scale-to-width-down/308"
          alt="nocturne"
          width="308"
          height="560"
        />
        <h2 className="champ-name">Nocturne</h2>
        <p className="champ-title">"The Eternal Nightmare"</p>
      </div>
      <div className="flex-item">
        <img
          src="https://lolskin.weblog.vc/img/wallpaper/loading/Leona_11.jpg?10.13.1"
          alt="leona"
          width="308"
          height="560"
        />
        <h2 className="champ-name">Leona</h2>
        <p className="champ-title">"The Radiant Dawn"</p>
      </div>
      <div className="flex-item">
        <img
          src="https://lolskin.weblog.vc/img/wallpaper/loading/Vi_2.jpg?10.13.1"
          alt="vi"
          width="308"
          height="560"
        />
        <h2 className="champ-name">Vi</h2>
        <p className="champ-title">"The Piltover Enforcer"</p>
      </div>
      <div className="flex-item">
        <img
          src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/d/d2/Skin_Loading_Screen_PROJECT_Jinx.jpg/revision/latest/scale-to-width-down/308?cb=20190728230506"
          alt="jinx"
          width="308"
          height="560"
        />
        <h2 className="champ-name">Jinx</h2>
        <p className="champ-title">"The Loose Canon"</p>
      </div>
      <div className="flex-item">
        <img
          src="https://lolskinshop.com/wp-content/uploads/2015/06/TahmKench_1.jpg"
          alt="tahm kench"
          width="308"
          height="560"
        />
        <h2 className="champ-name">Tahm Kench</h2>
        <p className="champ-title">"The River King"</p>
      </div>
      <div className="flex-item">
        <img
          src="https://i.pinimg.com/originals/4f/ac/b9/4facb933740ce1fd8e523ea671f78571.jpg"
          alt="skarner"
          width="308"
          height="560"
        />
        <h2 className="champ-name">Skarner</h2>
        <p className="champ-title">"The Crystal Vanguard"</p>
      </div>
    </div>
  </body>
  )
}
