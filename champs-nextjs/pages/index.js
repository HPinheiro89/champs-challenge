import Link from 'next/link';
import Champ from '../components/Champ';

export async function getServerSideProps(context) {
  const resp = await fetch('http://localhost:3000/api/champs');

  if (!resp.ok) {
    throw new Error('Failed fetching champs');
  }

  const data = await resp.json();
  const champs = data.champs;

  return {
    props: {
      champs,
    }, // will be passed to the page component as props
  };
}

const MyButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      More Info
    </a>
  );
});

export default function Index({ champs }) {
  return (
    <div>
      <h1>Favorite League Champs</h1>
      <div className='container'>
        {champs.map((c, index) => (
          <div key={`c.name-${index}`} className='flex-item'>
            <Champ name={c.name} image={c.image} title={c.title} />
            <Link href={`/champ/${c.slug}`} passHref>
              <MyButton />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
