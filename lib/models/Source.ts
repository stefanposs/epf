import { v4 as uuidV4 } from "uuid"

class Source {
    private _uuid:string;
    private _name:string;
    private _dateOfBirthUtc:Date;

    constructor (
      uuid?:string,
      name?:string,
      dateOfBirthUtc?:Date
    ) {
      // uuid
      if (uuid == (undefined || null)) {
        this._uuid = uuidV4()
      }else{
        this._uuid = uuid
      }
      // name
      if (name == (undefined || null)) {
        this._name = "1/1/2020, 00:00:00 AM"
      }else{
        this._name = name
      }
      // dateOfBirth
      if (dateOfBirthUtc == (undefined || null)) {
        this._dateOfBirthUtc = new Date
      }else{
        this._dateOfBirthUtc = dateOfBirthUtc
      }
    }

    /*
    * getter/setter methods
    */
    public get uuid ():string {
      return this._uuid
    }

    public set uuid (uuid:string) {
      this._uuid = uuid
    }

    public get name ():string {
      return this._name
    }

    public set name (name:string) {
      this._name = name
    }

    public set dateOfBirthUtc (dateOfBirthUtc:Date) {
      this._dateOfBirthUtc = dateOfBirthUtc
    }

    public get dateOfBirthUtc ():Date {
      return this._dateOfBirthUtc
    }
}

export { Source }
