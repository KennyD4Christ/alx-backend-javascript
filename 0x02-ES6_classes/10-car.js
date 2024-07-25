const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Brand must be a string');
    }
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Motor must be a string');
    }
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Color must be a string');
    }
    this._color = value;
  }

  [cloneSymbol]() {
    const clone = Object.create(Object.getPrototypeOf(this));
    clone._brand = undefined;
    clone._motor = undefined;
    clone._color = undefined;
    return clone;
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
