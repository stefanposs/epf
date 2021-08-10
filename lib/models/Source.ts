import {v4 as uuidV4} from 'uuid';
/**
 * Adds two numbers together.
 */
class Source {
    private _uuid:string;
    private _name:string;
    private _dateOfBirthUtc:Date;

    /**
     * Adds two numbers together.
     * @param {string} uuid
     * @param {string} name
     * @param {Date} dateOfBirthUtc
     */
    constructor(
        uuid?:string,
        name?:string,
        dateOfBirthUtc?:Date,
    ) {
      // uuid
      if (uuid == (undefined || null)) {
        this._uuid = uuidV4();
      } else {
        this._uuid = uuid;
      }
      // name
      if (name == (undefined || null)) {
        this._name = '1/1/2020, 00:00:00 AM';
      } else {
        this._name = name;
      }
      // dateOfBirth
      if (dateOfBirthUtc == (undefined || null)) {
        this._dateOfBirthUtc = new Date;
      } else {
        this._dateOfBirthUtc = dateOfBirthUtc;
      }
    }
    /**
     * Adds two numbers together.
     * @return {string}
     */
    public get uuid():string {
      return this._uuid;
    }
    /**
     * Adds two numbers together.
     * @param {string} uuid
     */
    public set uuid(uuid:string) {
      this._uuid = uuid;
    }
    /**
     * Adds two numbers together.
     * @return {string}
     */
    public get name():string {
      return this._name;
    }
    /**
     * Adds two numbers together.
     * @param {string} name
     */
    public set name(name:string) {
      this._name = name;
    }
    /**
     * Adds two numbers together.
     * @param {Date} dateOfBirthUtc
     */
    public set dateOfBirthUtc(dateOfBirthUtc:Date) {
      this._dateOfBirthUtc = dateOfBirthUtc;
    }
    /**
     * Adds two numbers together.
     * @return {Date}
     */
    public get dateOfBirthUtc():Date {
      return this._dateOfBirthUtc;
    }
}
export {Source};
