import {Logging} from '../utils/Logging';

/**
 * Configuration
 */
abstract class Configuration {
  private static _log:Logging;
  /**
   * Configuration
   * @return {void}
   */
  public static initialize():void {
    this._log = new Logging();
  }
  /**
   * Configuration
   * @return {Logging}
   */
  public static get log():Logging {
    return Configuration._log;
  }
  /**
   * Configuration
   * @param {Logging} log
   */
  public static set log(log:Logging) {
    Configuration._log = log;
  }
}

export {Configuration};
