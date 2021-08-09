import { Logger } from "tslog";

class Logging{

  private static _log:Logger

  static initialize ():void{
    this._log = new Logger();
  }

  public static silly(msg:string):void{
    this._log.silly(msg)
  }

  public static trace(msg:string):void{
    this._log.trace(msg)
  }

  public static debug(msg:string):void{
    this._log.debug(msg)
  }

  public static info(msg:string):void{
    this._log.info(msg)
  }

  public static warn(msg:string):void{
    this._log.warn(msg)
  }

  public static error(msg:string):void{
    this._log.error(msg)
  }

  public static fatal(msg:string):void{
    this._log.fatal(msg)
  }
}

export { Logging }
