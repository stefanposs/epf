import {Logging} from '../../utils/Logging';
import {Event} from '../../models/Event';

import Ajv, {JTDSchemaType} from 'ajv/dist/jtd';

import * as eventSchema from 
  '../../bin/example1/files/schema/event.schema.json';
import * as metaSchema from 
  '../../bin/example1/files/schema/meta.schema.json';
import * as dataSchema from 
  '../../bin/example1/files/schema/data.schema.json';
import * as sourceSchema from 
  '../../bin/example1/files/schema/source.schema.json';
/**
 * BaseParser functions
 */
class BaseParser {
  private _log:Logging
  /**
   * Process
   * @param {Logging} log
   */
  constructor() {
    // initialize
    this._log = new Logging();
    this._log.info(`Class BaseParser - constructor()`);
  }
  /**
   * parse event
   * @param {JSON} _item
   * @param {unknown} _valideSchema
   * @return {Event}
   */
  public parse(_item:JSON, _valideSchema:unknown):Event {
    this._log.info(`Class BaseParser - parse()`);
    const ajv = new Ajv();
    ajv.addSchema(eventSchema);
    ajv.addSchema(metaSchema);
    ajv.addSchema(dataSchema);
    ajv.addSchema(sourceSchema);
    // parse will return MyData or undefined
    const parse = ajv.compileParser(eventSchema);
    const item:Event = new Event();
    return item;
  }
}
export {BaseParser};
