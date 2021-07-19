import { v4 as uuidV4 } from 'uuid'

class Source {
    private _uuid:string;
    private _name:string;
    private _dateOfBirth:Date;

    constructor (
      uuid?:string,
      name?:string,
      dateOfBirth?:Date
    ) {
      if (uuid) {
        this._uuid = uuidV4()
      }
      this._name = name
      this._dateOfBirth = dateOfBirth
    }

    /*
    * getter methods
    */
    public get uuid ():string {
      return this._uuid
    }

    public get name ():string {
      return this._name
    }

    public get dateOfBirth ():Date {
      return this._dateOfBirth
    }

    /*
    * setter methods
    */
    public set uuid (uuid:string) {
      this._uuid = uuid
    }

    public set name (name:string) {
      this._name = name
    }

    public set dateOfBirth (dateOfBirth:Date) {
      this._dateOfBirth = dateOfBirth
    }
}

export { Source }
