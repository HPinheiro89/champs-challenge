// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let champs = [
  {"name": "Nocturne",
    "title": '"The Eternal Nightmare"',
  },
  {"name": "Leona",
  "title": '"The Radiant Dawn"',
  },
  {"name": "Vi",
    "title": '"The Piltover Enforcer"',
  },
  {"name": "Jinx",
    "title": '"The Loose Canon"',
  },
  {"name": "Tahm Kench",
  "title": '"The River King"',
  },
  {"name": "Skarner",
  "title": '"The Crystal Vanguard"',
  }
  ]

export default async (req, res) => {
  champs = await Champ.findAll();

  res.statusCode = 200;
  res.json(champs);
};
