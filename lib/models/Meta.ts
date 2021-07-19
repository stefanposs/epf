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
    this._source = source
    this._command = command
    this._layer = layer
  }

  /*
  * getter methods
  */

  public get source ():Source {
    return this._source
  }

  public get command ():Command {
    return this._command
  }

  public get layer ():Layer[] {
    return this._layer
  }

  /*
  * setter methods
  */

  public set source (source:Source) {
    this._source = source
  }

  public set command (command:Command) {
    this._command = command
  }

  public set layer (layer:Layer[]) {
    this._layer = layer
  }

  public pushElementToDataLayer (item:Layer) {
    this._layer.push(item)
  }
}

export { Meta }
