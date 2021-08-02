import { Source } from '../models/Source'
import { Layer } from '../models/Layer'
import { Command } from '../models/enum/Command'

class Meta {
  private _source:Source
  private _command:Command
  private _layer:Layer[]

  constructor (
    source?:Source,
    command?:Command,
    layer?:Layer[]
  ) {
    // source
    if (source == (undefined || null)) {
      this._source = new Source()
    }else{
      this._source = source
    }
    // command
    if (command == (undefined || null)) {
      this._command = Command.write
    }else{
      this._command = command
    }
    // layer
    if (layer == (undefined || null)) {
      this._layer = []
    }else{
      this._layer = layer
    }
  }

  /*
  * getter/setter methods
  */

  public get source ():Source {
    return this._source
  }

  public set source (source:Source) {
    this._source = source
  }

  public get command ():Command {
    return this._command
  }

  public set command (command:Command) {
    this._command = command
  }

  public get layer ():Layer[] {
    return this._layer
  }

  public set layer (layer:Layer[]) {
    this._layer = layer
  }

  public pushElementToDataLayer (item:Layer): void {
    this._layer.push(item)
  }
}

export { Meta }
