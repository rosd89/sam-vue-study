const Twice = class {
  constructor(twice) {
    const {
      id, name, birthDay, bloodType, hobby, specialty, favoriteMotto
    } = twice;

    this._id = id;
    this._name = name;
    this._birthDay = birthDay;
    this._bloodType = bloodType;
    this._hobby = hobby;
    this._specialty = specialty;
    this._favoriteMotto = favoriteMotto;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get birthDay() {
    return this._birthDay;
  }

  get bloodType() {
    return this._bloodType;
  }

  get hobby() {
    return this._hobby;
  }

  get specialty() {
    return this._specialty;
  }

  get favoriteMotto() {
    return this._favoriteMotto;
  }
};

module.exports = Twice;