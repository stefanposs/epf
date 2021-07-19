import "reflect-metadata";
import { Container } from "inversify";

import SERVICE_IDENTIFIER from "../models/Identifiers";
import {IEvent} from "../models/IEvent";
import {Event} from "../models/Event";

let container = new Container();
container.bind<IEvent>(SERVICE_IDENTIFIER.IEvent).to(Event);

export default container;