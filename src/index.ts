import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express();
app.use(cors())

interface IProducts {
    id:number,
    name: string,
    price: number,
    description?: string,
    address:object,
}

let products: IProducts[] = []

app.get('/produtos', (req: Request, res: Response) => {

    let newProducts = ({
        id:Math.random(),
        name: "batedeira",
        price: 300,
        // description: "muito boas", COM SINAL DE '?' PASSA A ANAO SER OBRIGATORIO
        address: {
            street: "rua baronesa",
            number: 0,
            state: "rj"
        }
    })

    products.push(newProducts)

    return res.json(products);
});

app.listen(3000, () => {
    console.log('servidor on');
});
