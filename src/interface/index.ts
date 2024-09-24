import express  from "express";
import {configureDependenceis} from '../infrastructure/utils/config'


export const app = express();
app.use(express.json());


const {animalsController} = configureDependenceis();
app.post('/animals', (req, res) => animalsController.create(req, res));
app.get('/animals', (req, res) => animalsController.listAll(req,res));
app.delete('/animals/:id', (req, res) => animalsController.delete(req, res)); 

if (require.main === module){
    const PORT = 3333;
    app.listen(PORT, () => {
        console.log( ` Sevidor rodando com sucesso na porta ${PORT}`);
    })
}