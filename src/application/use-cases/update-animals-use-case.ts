import { Animals } from "../../domain/animals";
import { AnimalsRepository } from "../repositories/animals-repository";

export class UpdateAnimalsUseCase {
    constructor(
        private animalsRepository: AnimalsRepository
    ) {}

    execute(id: string, bodyParams: Partial<Animals>): Animals | null {
        return this.animalsRepository.update(id, bodyParams);
    }
}
