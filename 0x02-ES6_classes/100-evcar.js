import Car from './10-car.js';

const cloneSymbol = Symbol('clone');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Range must be a string');
    }
    this._range = value;
  }

  [cloneSymbol]() {
    return new Car(this.brand, this.motor, this.color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
