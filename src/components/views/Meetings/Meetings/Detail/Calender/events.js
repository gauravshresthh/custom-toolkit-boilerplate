import React from 'react';
import { getRandomColorShades } from '../../../../../../utils/helper';

const now = new Date();

export default [{
  id: 14,
  title: 'Staff meeting14',
  location: 'Sankhamul, Lalitpur',
  start: new Date(new Date().setHours(new Date().getHours() - 3)),
  end: new Date(new Date().setHours(new Date().getHours() + 3)),
  backgroundColor:getRandomColorShades()[1],
  borderColor:getRandomColorShades()[0],
},
  {
    id: 16,
    location: 'Sankhamul, Lalitpur',
    title: 'Staff meeting',
    start: now,
    end: now,
  },
  {
    id: 17,
    title: 'Staff meeting17',
    location: 'Sankhamul, Lalitpur',
    start: now,
    end: now,
    overlappedWith: [],
  }, {
    id: 19,
    title: 'Staff meeting19',
    location: 'Sankhamul, Lalitpur',
    start: now,
    end: now,
  }, {
    id: 20,
    title: 'Staff meeting20',
    location: 'Sankhamul, Lalitpur',
    start: new Date(new Date().setHours(new Date().getHours() - 10)),
    end: new Date(new Date().setHours(new Date().getHours() - 4)),
  },
  {
    id: 21,
    title: 'Staff meeting',
    location: 'Sankhamul, Lalitpur',
    start: now,
    end: now,
  },
  {
    id: 22,
    title: 'Staff meeting',
    location: 'Sankhamul, Lalitpur',
    start: now,
    end: now,
  },
];
