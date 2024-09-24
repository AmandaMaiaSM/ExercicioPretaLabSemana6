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

    update(id: string, bodyParams: Partial<Animals>): Animals | null {
        const animalToUpdate = this.animals.find(animal => animal.id === id);
    
        if (animalToUpdate) {
            const updatedAnimal = { 
                ...animalToUpdate, 
                ...bodyParams 
            };
    
            const index = this.animals.findIndex(animal => animal.id === id);
            this.animals[index] = updatedAnimal;
    
            return updatedAnimal;
        }
        
        return null;
    
    }
    

}