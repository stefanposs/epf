import {v4 as uuidV4} from 'uuid';
import {Meta} from '../models/Meta';
import {Data} from '../models/Data';
/**
 * This class represents the event.
 */
class Event {
    private _uuid: string
    private _type: string
    private _version: string
    private _meta: Meta
    private _data: Data
    /**
     * Add two numbers.
     * @param {string} uuid The first number.
     * @param {string} type The second number.
     * @param {string} version The second number.
     * @param {Meta} meta The second number.
     * @param {Data} data The second number.
     */
    constructor(
        uuid?: string,
        type?: string,
        version?: string,
        meta?: Meta,
        data?: Data,
    ) {
      // uuid
      if (uuid == (undefined || null)) {
        this._uuid = uuidV4();
      } else {
        this._uuid = uuid;
      }
      // type
      if (type == (undefined || null)) {
        this._type = '';
      } else {
        this._type = type;
      }
      // version
      if (version == (undefined || null)) {
        this._version = '';
      } else {
        this._version = version;
      }
      // meta
      if (meta == (undefined || null)) {
        this._meta = new Meta();
      } else {
        this._meta = meta;
      }
      // data
      if (data == (undefined || null)) {
        this._data = new Data();
      } else {
        this._data = data;
      }
    }
    /**
     * Adds two numbers together.
     * @return {string} The sum of the two numbers.
     */
    public get uuid(): string {
      return this._uuid;
    }
    /**
     * Adds two numbers together.
     * @param {string} uuid The first number.
     */
    public set uuid(uuid: string) {
      this._uuid = uuid;
    }
    /**
     * Adds two numbers together.
     * @return {string} The sum of the two numbers.
     */
    public get type(): string {
      return this._type;
    }
    /**
     * Adds two numbers together.
     * @return {string} The sum of the two numbers.
     */
    public get version(): string {
      return this._version;
    }

    /**
     * Adds two numbers together.
     * @return {Meta} The sum of the two numbers.
     */
    public get meta(): Meta {
      return this._meta;
    }
    /**
     * Adds two numbers together.
     * @return {Data} The sum of the two numbers.
     */
    public get data(): Data {
      return this._data;
    }
}
export {Event};
