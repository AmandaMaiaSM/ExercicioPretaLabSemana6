import { Animals } from "../../domain/animals";
import { AnimalsRepository } from "../repositories/animals-repository";
import { IdGenerator } from "../repositories/id-generator-interface";


/*export interface Params{
    name: string;
    description: string;
    value: number;
    age: number;
    breed: string;
    color: string;
    status: 'read' | 'unread' | 'donated';

}*/

export class CreateAnimalsUseCase{
    constructor (
        private animalsRepository: AnimalsRepository,
        private  idGerator: IdGenerator
    ){}

    execute(data: Omit < Animals, 'id' | 'created_at'>  ): Animals{
        const animals: Animals = {
            ...data,
            id: this.idGerator.generate(),
            created_at: new Date().toISOString(),
        };
        return this.animalsRepository.create(animals);
    }

    listAll (): Animals[]{
        return this.animalsRepository.listAll();
    }

}