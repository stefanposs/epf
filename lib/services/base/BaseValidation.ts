import {Logging} from '../../utils/Logging';
import {Event} from '../../models/Event';
/**
 * BaseValidation functions
 */
class BaseValidation {
  private _log:Logging
  /**
   * initialize all variables
   * @param {Logging} log
   */
  constructor() {
    this._log = new Logging();
    this._log.info(`Class BaseValidation - constructor()`);
  }
  /**
   * validate event
   * @param {Event} _event
   * @param {unknown} _valideSchema
   * @return {boolean}
   */
  public validate(_event:Event, _valideSchema:unknown):boolean {
    this._log.info(`Class BaseValidation - validate()`);
    return true;
  }
  /**
   * log()
   * @return {Logging}
   */
  protected get log():Logging {
    return this._log;
  }
}
export {BaseValidation};
