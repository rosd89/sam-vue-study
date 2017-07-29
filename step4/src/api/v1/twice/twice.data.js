const Twice = require('./twice');
const {twice} = require('../../../../data/twice.json');

const data = twice.map(({id, name, birthDay, bloodType, hobby, specialty, favoriteMotto}) => {
  return new Twice({ id, name, birthDay, bloodType, hobby, specialty, favoriteMotto});
});

module.exports = data;