import {IEvent} from '../models/IEvent'
import { inject, injectable, named } from "inversify";

@injectable()
class Event implements IEvent{
    msg:string;

    constructor(){
        this.msg = "Hallo";
    }

    getEvent():string{
        return this.msg;
    }
}
export {Event};

