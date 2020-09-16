import PropTypes from 'prop-types';
import React from 'react';
import Champ from '../../components/Champ';

export async function getServerSideProps(context) {
  const { params } = context;

  const resp = await fetch(`http://localhost:3000/api/champs/${params.slug}`);

  if (!resp.ok) {
    throw new Error('Failed fetching champs');
  }

  const data = await resp.json();
  const champ = data.champ;

  return {
    props: {
      champ,
    }, // will be passed to the page component as props
  };
}

const ChampPage = ({ champ }) => {
  return <Champ {...champ} />;
};

ChampPage.propTypes = {
  slug: PropTypes.string,
};

export default ChampPage;
