// app.ts
/*
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(port, () => {
    console.log('The application is listening on port 3000!');
})
*/
import { Event } from '../models/Event';
import { IEvent } from '../models/IEvent';
import SERVICE_IDENTIFIER from '../models/Identifiers';
import container from "../models/Installer";

console.log("Application loads ...")


/*
const event:Event = new Event();
console.log(event.getEvent());
*/

let event = container.get<IEvent>(SERVICE_IDENTIFIER.IEvent);
console.log(event.getEvent());

//const instance = container.resolve(Event);
//console.log(instance.getEvent());