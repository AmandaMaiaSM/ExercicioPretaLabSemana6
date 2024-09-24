import { IdGenerator } from "../../application/repositories/id-generator-interface";
import {v4 as uuidv4} from 'uuid';

export class GeradorIdentificador implements IdGenerator {
    generate(): string {
        return uuidv4();
    }
}

