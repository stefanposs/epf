import {Logger} from 'tslog';
/**
 * Adds two numbers together.
 */
class Logging {
  private _log:Logger
  /**
   * Adds two numbers together.
   */
  constructor() {
    this._log = new Logger();
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public silly(msg:string):void {
    this._log.silly(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public trace(msg:string):void {
    this._log.trace(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public debug(msg:string):void {
    this._log.debug(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public info(msg:string):void {
    this._log.info(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public warn(msg:string):void {
    this._log.warn(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public error(msg:string):void {
    this._log.error(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public fatal(msg:string):void {
    this._log.fatal(msg);
  }
}
export {Logging};
