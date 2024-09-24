import { AnimalsRepository } from "../repositories/animals-repository";

export class DeleteAnimalsUseCase{
    constructor(
        private animalsRepository : AnimalsRepository
    ){}
    execute(id: string): boolean {
       return this.animalsRepository.delete(id);
    };
}