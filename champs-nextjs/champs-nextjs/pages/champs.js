import styles from '../styles/Home.module.css';

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/champs');
  if (!res.ok) {
    return {
      props: {
        champs: [],
      },
    };
  }

  const champs = await res.json();

  return {
    props: {
      champs,
    },
  };
}

export default function Home({ champs }) {
  return (
    <div className={styles.contour}>
      {champs.map((champ) => {
        return  <div className={styles.column}>
          <div>
            <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Nocturne_OriginalLoading.jpg/revision/latest/scale-to-width-down/340?cb=20200425022321"/>
            <p>{champ.name}</p></div>
      </div>
          
      })}
    </div>
  );
}