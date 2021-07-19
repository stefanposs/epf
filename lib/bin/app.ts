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
//import { Event } from '../models/Event'
import * as dotenv from 'dotenv'

console.log('Application loads ...')
/*
const event:Event = new Event();
console.log(event.getEvent());
*/
dotenv.config({ path: '.env' })
console.log(process.env.test)
