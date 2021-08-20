import {AzBlobClient} from '../azure/AzBlobClient';
import {BaseRepository} from './base/BaseRepository';
import {Event} from '../../models/Event';
/**
 * This class represents the event.
 */
class EventRepository extends BaseRepository<Event> {
  private _storageClient:AzBlobClient;
  /**
   * This class represents the event.
   */
  constructor() {
    super();
    this._storageClient = new AzBlobClient(
        process.env.ACCOUNT_KEY || '',
        process.env.ACCOUNT_NAME || '',
    );
  }
  /**
   * This class represents the event.
   * @param {Event} _item
   */
  async write(_item:Event):Promise<boolean> {
    this.logging.info(
        `Class EventRepository - write(_item=${JSON.stringify(_item)})`,
    );
    await this._storageClient.uploadBlob(
        'test',
        _item.meta.source.uuid,
        JSON.stringify(_item),
    );
    return true;
  }
  /**
   * Adds two numbers together.
   * @param {Event} _item sum of the two numbers.
   */
  delete(_item:Event):Promise<boolean> {
    this.logging.info(
        `Class EventRepository - delete(_item=${JSON.stringify(_item)})`,
    );
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   * @param {Event} _item sum of the two numbers.
   */
  update(_item:Event):Promise<boolean> {
    this.logging.info(
        `Class EventRepository - update(_item=${JSON.stringify(_item)})`,
    );
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   */
  get():Promise<Event[]> {
    this.logging.info(
        `Class EventRepository - get()`,
    );
    throw new Error('Method not implemented.');
  }
}
export {EventRepository};
