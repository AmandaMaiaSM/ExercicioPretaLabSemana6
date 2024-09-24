import { Repository } from "../database/repositry";
import { CreateAnimalsUseCase } from "../../application/use-cases/create-animals-use-case";
import { GeradorIdentificador } from "../utils/id-generator"; // Importar a classe correta
import { animalsController } from "../../interface/animals-controller";
import { DeleteAnimalsUseCase } from "../../application/use-cases/delete-animals-use-case";

export function configureDependenceis() {

    const animalsRepository = new Repository();
    const identificador = new GeradorIdentificador();
    const createAnimalsUseCase = new CreateAnimalsUseCase(animalsRepository, identificador); 
    const deleteanimalsUseCase = new DeleteAnimalsUseCase(animalsRepository);
    const controller = new animalsController(createAnimalsUseCase, animalsRepository, deleteanimalsUseCase); // Instanciar o controlador com o caso de uso
    
    return { animalsController: controller }; // Retornar o controlador corretamente

}