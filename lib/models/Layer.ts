class Layer {
  private _name:string
  private _entryTimestampUtc:Date

  constructor (
    name:string,
    entryTimestampUtc:Date
  ) {
    this._name = name
    this._entryTimestampUtc = entryTimestampUtc
  }

  /**
   * getter methods
   */
  public get name ():string {
    return this._name
  }

  public get entryTimestampUtc ():Date {
    return this._entryTimestampUtc
  }

  /**
   * setter methods
   */
  public set name (name:string) {
    this._name = name
  }

  public set entryTimestampUtc (entryTimestampUtc:Date) {
    this._entryTimestampUtc = entryTimestampUtc
  }
}

export { Layer }
