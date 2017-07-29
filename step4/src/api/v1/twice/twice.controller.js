const twiceService = require('./twice.service');

/**
 * Twice 목록 가져오기 Controller
 *
 * @param req
 * @param res
 */
exports.index = (req, res) => {
  const twiceData = twiceService.findAll();
  res.json(twiceData);
};

/**
 * Twice 멤버 데이터 가져오기 Controller
 *
 * @param req
 * @param res
 */
exports.show = (req, res) => {
  const memberName = req.params.memberName;

  const member = twiceService.findOne(memberName);
  if(!member) {
    return res.status(404).send();
  }

  return res.status(200).json(member);
};

/**
 * Twice 멤버 추가 Controller
 *
 * @param req
 * @param res
 */
exports.create = (req, res) => {
  const {
    name, birthDay, bloodType, hobby, specialty, favoriteMotto
  } = req.body;

  // Validation Check
  // DB Injection
  // 컬럼에 데이터 타입이 맞지않는 경우

  const result = twiceService.create({
    name, birthDay, bloodType, hobby, specialty, favoriteMotto
  });

  if(!result) {
    return res.status(500).send();
  }

  return res.status(201).json(result);
};

/**
 * Twice 멤버 삭제 Controller
 *
 * @param req
 * @param res
 * @returns {*}
 */
exports.destroy = (req, res) => {
  const id = parseInt(req.params.id);
  twiceService.destroy(id);

  return res.status(204).send();
};