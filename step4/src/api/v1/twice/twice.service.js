/**
 * Created by sam on 2017. 7. 16..
 */
const Twice = require('./twice');
let twiceData = require('./twice.data');

/**
 * Twice 전체데이터 조회
 */
exports.findAll = () => twiceData.map(({id, name, birthDay, bloodType, hobby, specialty, favoriteMotto}) => ({
  id, name, birthDay, bloodType, hobby, specialty, favoriteMotto
}));

/**
 * Twice 데이터 조회
 *
 * @param userName
 * @returns {*}
 */
exports.findOne = userName => {
  const {id, name, birthDay, bloodType, hobby, specialty, favoriteMotto} = twiceData.filter(v => {
    return userName === v.name;
  })[0];

  if(!id) return undefined;

  return {
    id, name, birthDay, bloodType, hobby, specialty, favoriteMotto
  };
};

/**
 * Twice 멤버 추가
 *
 * @param twice
 * @returns {Twice}
 */
exports.create = twice => {
  const id = twiceData[twiceData.length - 1].id + 1;
  twice.id = id;

  const newMember = new Twice(twice);
  twiceData.push(newMember);

  return {
    id: newMember.id,
    name: newMember.name,
    birthDay: newMember.birthDay,
    bloodType: newMember.bloodType,
    hobby: newMember.hobby,
    specialty: newMember.specialty,
    favoriteMotto: newMember.specialty
  };
};

/**
 * Twice 멤버 삭제
 *
 * @param id
 * @returns {boolean}
 */
exports.destroy = id => {
  twiceData = twiceData.filter(v => {
    return v.id !== id;
  });

  return true;
};