import { Request,Response } from "express";
import { CreateAnimalsUseCase } from "../application/use-cases/create-animals-use-case";
import { Repository } from "../infrastructure/database/repositry";
import { DeleteAnimalsUseCase } from "../application/use-cases/delete-animals-use-case";

import { error } from "console";

export class animalsController{
    constructor(
        private createAnimalsUseCase: CreateAnimalsUseCase,
        private animalsRepository: Repository,
        private deleteanimalsUseCase: DeleteAnimalsUseCase

    ){}
    
    //
    create( req: Request, res: Response): Response{
        try{
            const animals = this.createAnimalsUseCase.execute(req.body);
            return  res.status(201).json(animals);

        }catch(error: any){ 
            return  res.status(400).json({ error: error.message });
        }
    }

    listAll(req: Request, res: Response): Response{
        try {
            const animals = this.createAnimalsUseCase.listAll();
            return res.status(200).json(animals);
        }
         catch (error: any){
            return res.status(400).json({error: error.message});

         }
        //return res.status(200).json(animals);
    }

    delete (req: Request, res: Response): Response{
        try {
            const {id } = req.params;
            const  IdDelete = this.deleteanimalsUseCase.execute(id);
            
            if (IdDelete){
                return res.status(200).json({message: 'Animal deletado com sucesso'});
            }
            else{
                return res.status(404).json({ message: "Animal não encontrado" });
            }

        } catch (error: any){
            return res.status(400).json({ error: error.message});
        }
    }


}