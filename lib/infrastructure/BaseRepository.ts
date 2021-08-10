// import all interfaces
import {IWrite} from '../infrastructure/IWrite';
import {IRead} from '../infrastructure/IRead';
/**
 * This class represents the event.
 */
abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  /**
   * This class represents the event.
   * @param {T} item
   */
  write(item: T):Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  /**
   * This class represents the event.
   * @param {T} item
   */
  delete(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  /**
   * This class represents the event.
   * @param {T} item
   */
  get(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
export {BaseRepository};
