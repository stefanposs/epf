import { v4 as uuidV4 } from 'uuid'
import { Meta } from '../models/Meta'
import { Data } from '../models/Data'

/**
 * This class represents the event.
 */
class Event {
  private _uuid:string;
  private _type:string;
  private _version:string;
  private _meta:Meta;
  private _data:Data;

  /**
 * @typeParam T Comment for type `T`.
 * You may also use the template tag.
 * @template T comment for type `T`.
 */
  constructor (
    uuid?:string,
    type?:string,
    version?:string,
    meta?:Meta,
    data?:Data
  ) {
    if (uuid) {
      this._uuid = uuidV4()
    }
    this._type = type
    this._version = version
    this._meta = meta
    this._data = data
  }

  public get uuid ():string {
    return this._uuid
  }

  public get type ():string {
    return this._type
  }

  public get version ():string {
    return this._version
  }

  public get meta ():Meta {
    return this._meta
  }

  public get data ():Data {
    return this._data
  }
}
export { Event }
