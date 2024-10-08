import { Animals } from "../../domain/animals";

export interface AnimalsRepository{
    create(animals: Animals): Animals;
    listAll(): Animals[];
    delete(id: string): boolean;
    update(id: string, data: Partial<Animals>): Animals | null;
}