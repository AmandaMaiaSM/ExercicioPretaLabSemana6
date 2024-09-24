import { AnimalsRepository } from "../../application/repositories/animals-repository";
import { Animals } from "../../domain/animals";

export class Repository implements AnimalsRepository{
    private  animals: Animals [] = [];

    create(animals: Animals): Animals{
        this.animals.push(animals);
        return animals;
    }

    listAll(): Animals[]{
        return this.animals;
    }

    delete(id: string): boolean {
        const compriment = this.animals.length;
        this.animals = this.animals.filter(animalF => animalF.id !== id);
        return this.animals.length< compriment;
    }

}