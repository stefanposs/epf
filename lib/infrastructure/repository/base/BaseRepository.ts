// import all interfaces
import {IWrite} from '../interfaces/IWrite';
import {IRead} from '../interfaces/IRead';
import {Logging} from '../../../utils/Logging';
/**
 * This class represents the event.
 */
class BaseRepository<T> implements IWrite<T>, IRead<T> {
  private _logging:Logging
  /**
   * This class represents the event.
   */
  constructor() {
    this._logging = new Logging();
  }
  /**
   * This class represents the event.
   * @param {T} _item
   */
  write(_item:T):Promise<boolean> {
    this._logging.info(
        `Class BaseRepository<T> - write(item=${JSON.stringify(_item)})`,
    );
    throw new Error('Method not implemented.');
  }
  /**
   * This class represents the event.
   * @param {T} _item
   */
  delete(_item:T): Promise<boolean> {
    this._logging.info(
        `Class BaseRepository<T> - delete(item=${JSON.stringify(_item)})`,
    );
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   * @param {T} _item sum of the two numbers.
   */
  update(_item:T):Promise<boolean> {
    this._logging.info(
        `Class BaseRepository<T> - update(item=${JSON.stringify(_item)})`,
    );
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   */
  get():Promise<T[]> {
    this._logging.info(
        `Class BaseRepository<T> - get()})`,
    );
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   */
  protected get logging():Logging {
    return this._logging;
  }
}
export {BaseRepository};
