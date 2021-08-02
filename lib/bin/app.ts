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
import { Event } from '../models/Event'
import * as dotenv from 'dotenv'

const Test = new Event()
Test.uuid = 'kjdkasjdaksd'
console.log('Application loads ...' + Test.uuid)
/*
const event:Event = new Event();
console.log(event.getEvent());
*/
dotenv.config({ path: '.env' })
console.log(process.env.test)

import { Logger } from "tslog";

const log: Logger = new Logger({ name: "myLogger" });
log.silly("I am a silly log.");
log.trace("I am a trace log with a stack trace.");
log.debug("I am a debug log.");
log.info("I am an info log.");
log.warn("I am a warn log with a json object:", {foo: "bar"});
log.error("I am an error log.");
log.fatal(new Error("I am a pretty Error with a stacktrace."))
