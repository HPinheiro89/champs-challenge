import { champs } from '../../../data';

export default (req, res) => {
  const {
    query: { slug },
  } = req;

  // find a champ which has a slug equal the slug passed on the api request
  const champ = champs.find((c) => c.slug === slug);

  // if champ not found
  if (!champ) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Record not found' }));
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ champ }));
};
