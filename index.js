function usersCountByCity4(users) {
  return users.reduce((acc, { city }) => {
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});
}
/* fourth option */

// examples
const users = [
  {
    id: 888,
    name: 'Denis',
    age: 44,
    city: 'Kyiv',
  },
  {
    id: 333,
    name: 'Alex',
    age: 33,
    city: 'Lviv',
  },
  {
    id: 392,
    name: 'Nastya',
    age: 22,
    city: 'Kyiv',
  },
  {
    id: 123,
    name: 'Violetta',
    age: 15,
    city: 'Odesa',
  },
  {
    id: 640,
    name: 'Mykola',
    age: 31,
    city: 'Lviv',
  },
];

console.log(usersCountByCity4(users)); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }
