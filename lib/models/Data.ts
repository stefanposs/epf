/**
 * Adds two numbers together.
 */
class Data {
  private _data:JSON;
  /**
   * Adds two numbers together.
   * @param {JSON} data
   */
  constructor(data?:JSON) {
    // data
    if (data == (undefined || null)) {
      this._data = {} as JSON;
    } else {
      this._data = data;
    }
  }
  /**
   * Adds two numbers together.
   * @param {JSON} data The first number.
   */
  public set data(data: JSON) {
    this._data = data;
  }
  /**
   * Adds two numbers together.
   * @return {string} The sum of the two numbers.
   */
  public get data(): JSON {
    return this._data;
  }
}
export {Data};
