import {Event} from '../models/Event'

interface IEvent{
    msg: string;
    getEvent: () => string;
}

export {IEvent};