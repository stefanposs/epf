/**
 * This class represents the event.
 */
class Layer {
  private _name:string
  private _entryTimestampUtc:Date
  /**
   * Add two numbers.
   * @param {string} name The first number.
   * @param {Date} entryTimestampUtc The second number.
   */
  constructor(
      name?:string,
      entryTimestampUtc?:Date,
  ) {
    // name
    if (name == (undefined || null)) {
      this._name = '';
    } else {
      this._name = name;
    }
    // entryTimestampUtc
    if (entryTimestampUtc == (undefined || null)) {
      this._entryTimestampUtc = new Date();
    } else {
      this._entryTimestampUtc = entryTimestampUtc;
    }
  }
  /**
   * Adds two numbers together.
   * @return {string} The sum of the two numbers.
   */
  public get name():string {
    return this._name;
  }
  /**
   * Adds two numbers together.
   * @param {string} name The first number.
   */
  public set name(name:string) {
    this._name = name;
  }
  /**
   * Adds two numbers together.
   * @return {Date} The sum of the two numbers.
   */
  public get entryTimestampUtc():Date {
    return this._entryTimestampUtc;
  }
  /**
   * Adds two numbers together.
   * @param {string} entryTimestampUtc The first number.
   */
  public set entryTimestampUtc(entryTimestampUtc:Date) {
    this._entryTimestampUtc = entryTimestampUtc;
  }
}
export {Layer};
