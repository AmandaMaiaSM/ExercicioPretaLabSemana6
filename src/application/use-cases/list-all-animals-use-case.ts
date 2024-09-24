import { AnimalsRepository } from "../repositories/animals-repository";
import { Animals } from "../../domain/animals";

export class ListAnimalsUseCase {
    constructor(private animalsRepository: AnimalsRepository) {}

    execute(): Animals[] {
        return this.animalsRepository.listAll();
    }
}