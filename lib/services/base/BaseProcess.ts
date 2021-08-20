import {Logging} from '../../utils/Logging';
import {Event} from '../../models/Event';
/**
 * BaseProcess functions
 */
class BaseProcess {
  private _log:Logging
  /**
   * Process
   * @param {Logging} log
   */
  constructor() {
    // initialize
    this._log = new Logging();
    this._log.info(`Class BaseProcess - Constructor()`);
  }
  /**
   * Validate event
   * @param {Event} _event
   * @param {unknown} _valideSchema
   * @return {boolean}
   */
  public validate(_event:Event, _valideSchema:unknown):boolean {
    this._log.info(`Class BaseProcess - validate()`);
    return true;
  }
  /**
   * Map event
   */
  public map():void {
    this._log.info(`Class BaseProcess - map()`);
  }
  /**
   * Enrich event
   */
  public enrich():void {
    this._log.info(`Class BaseProcess - enrich()`);
  }
  /**
   * Disinfect event
   */
  public disinfect():void {
    this._log.info(`Class BaseProcess - disinfect`);
  }
  /**
   * log()
   * @return {Logging}
   */
  protected get log():Logging {
    return this._log;
  }
}
export {BaseProcess};
