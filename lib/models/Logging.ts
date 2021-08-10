import {Logger} from 'tslog';
/**
 * Adds two numbers together.
 */
class Logging {
  private static _log:Logger
  /**
   * Adds two numbers together.
   */
  static initialize():void {
    this._log = new Logger();
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static silly(msg:string):void {
    this._log.silly(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static trace(msg:string):void {
    this._log.trace(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static debug(msg:string):void {
    this._log.debug(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static info(msg:string):void {
    this._log.info(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static warn(msg:string):void {
    this._log.warn(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static error(msg:string):void {
    this._log.error(msg);
  }

  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public static fatal(msg:string):void {
    this._log.fatal(msg);
  }
}
export {Logging};
