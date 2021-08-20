import {BaseValidation} from './base/BaseValidation';
import {Event} from '../models/Event';
import Ajv from 'ajv';

import * as eventSchema from '../bin/example1/files/schema/event.schema.json';
import * as metaSchema from '../bin/example1/files/schema/meta.schema.json';
import * as dataSchema from '../bin/example1/files/schema/data.schema.json';
import * as sourceSchema from '../bin/example1/files/schema/source.schema.json';
/**
 * Process functions
 */
class EventValidation extends BaseValidation {
  /**
   * Process
   */
  constructor() {
    super();
    // initialize
    this.log.info(`Class EventValidation - Constructor()`);
  }
  /**
   * Validate event
   * @param {Event} _event
   * @param {unknown} _valideSchema
   * @return {boolean}
   */
  public validate(_event:Event):boolean {
    this.log.info(`Class EventValidation - validate()`);
    let res = true;
    const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
    ajv.addSchema(eventSchema);
    ajv.addSchema(metaSchema);
    ajv.addSchema(dataSchema);
    ajv.addSchema(sourceSchema);
    const validate = ajv.compile(eventSchema);
    const valid = validate(_event);
    if (!valid) {
      this.log.info(`
        Class EventValidation - validate() - 
        ${JSON.stringify(validate.errors)}`,
      );
      res = false;
    } else {
      this.log.info(`
        Class EventValidation - validate() - 
        ${JSON.stringify(valid)}`,
      );
      res = true;
    }
    return res;
  }
}
export {EventValidation};
