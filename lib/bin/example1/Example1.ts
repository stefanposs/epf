import {Logging} from '../../edf';
import {Event} from '../../edf';
import {EventValidation} from '../../edf';
import {EventRepository} from '../../edf';
// eslint-disable-next-line max-len
import * as rawDemoData1 from './files/data/bc3cfb60-3556-4d27-86d7-9defcbadc133.json';
// eslint-disable-next-line max-len
import * as rawDemoData2 from './files/data/fc07d746-7ced-4695-a9d7-18b5dc4d6ae4.json';
// eslint-disable-next-line max-len
import * as rawDemoData3 from './files/data/8313f1e8-bbfa-4d44-b2fa-63ff9b517441.json';

/*
import * as eventSchema from './files/schema/event.schema.json';
import * as metaSchema from './files/schema/meta.schema.json';
import * as dataSchema from './files/schema/data.schema.json';
import * as sourceSchema from './files/schema/source.schema.json';
*/

/**
 * Example1 for using the epf framework
 */
class Example1 {
  private _log:Logging
  private _eventRepository:EventRepository
  private _rawEvents:Event[]
  /**
   * Constructor
   */
  constructor() {
    // initialize
    this._log = new Logging();
    this._log.info('Class Exampe1 - constructor() - initialize');
    this._eventRepository = new EventRepository();
    this._rawEvents=[];
    // configurate
    this._log.info('Class Exampe1 - constructor() - configurate');
    // Load raw demo data and map cast them to events
    const rawEventDemo1:Event = new Event();
    Object.assign(rawEventDemo1, rawDemoData1);
    this._rawEvents.push(rawEventDemo1);

    const rawEventDemo2:Event = new Event();
    Object.assign(rawEventDemo2, rawDemoData2);
    this._rawEvents.push(rawEventDemo2);

    const rawEventDemo3:Event = new Event();
    Object.assign(rawEventDemo3, rawDemoData3);
    this._rawEvents.push(rawEventDemo3);
  }
  /**
   * run all data
   * @return {void}
   */
  public initalize():void {
    this._log.info('Class Exampe1 - run()');
  }
  /* eslint-disable @typescript-eslint/require-await */
  /**
   * Firing Events for store date
   * @param {Event} event
   */
  public async run():Promise<void> {
    this._log.info(`Class Exampe1 - run()`);
    const eventItem:Event = this._rawEvents[0];
    const validation = new EventValidation();
    const flag = validation.validate(eventItem);
    if (flag) {
      void this._eventRepository.write(eventItem);
    } else {
      this._log.info(`Class Exampe1 - run() - Validation is not correct.`);
    }
  }
  /* eslint-enable @typescript-eslint/require-await */
}
export {Example1};
